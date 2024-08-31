import React, { HTMLAttributes, forwardRef, useEffect, useRef, useState } from 'react'
import "./modalAnitmation.css"

type IPropsRoot = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
    isVisible: boolean
}

const Root = ({children, isVisible = false, ...props} :IPropsRoot) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current) {
          // Força a reexecução da animação removendo e adicionando a classe
          modalRef.current.classList.remove('modal-enter', 'modal-exit');
          void modalRef.current.offsetWidth; // Força o reflow para reiniciar a animação
    
          if (isVisible) {
            modalRef.current.classList.add('modal-enter');
          } else {
            modalRef.current.classList.add('modal-exit');
          }
        }
      }, [isVisible]);

  return (
    <div {...props}  ref={modalRef}>{children}</div>
  )
}

type IInputProps = React.InputHTMLAttributes<HTMLInputElement>    

const Input = forwardRef(({type="text", ...props }: IInputProps) => {
  return (
    <input type={type}  {...props}/>
  )
})

type IDescriptionProps = React.ParamHTMLAttributes<HTMLParagraphElement> & {
    text: string
}

const Description = forwardRef(({ text, ...props}: IDescriptionProps) => {
    return (
      <p {...props}>{text}</p>
    )
  })
  
  const Mounted = ({visible}: {visible: boolean}) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
    if (ref.current) {
        // Força a reexecução da animação removendo e adicionando a classe
        ref.current.classList.remove('backdrop');
        void ref.current.offsetWidth; // Força o reflow para reiniciar a animação
  
        if (visible) {
          ref.current.classList.add('backdrop');
        } else {
          ref.current.classList.add('backdrop');
        }
      }}
    , [visible])

    return (
        // <div  ref={ref} className='w-full h-full flex justify-center'>

      <Modal.Root isVisible={visible} className='bg-neutral-700 text-white flex flex-col gap-8 items-center fixed  p-6 rounded-xl top-36'>
        <Modal.Description text='Add Product' className='font-bold text-2xl'/>
        <div className='flex justify-center items-center  gap-11'>

        <div>
            <Modal.Description  text='Product name'/>
            <Modal.Input className='rounded-lg' />
            
        </div>
        <div>
            <Modal.Description  text='Product price'/>
            <Modal.Input className='rounded-lg'/>
            
        </div>
        <div>
            <Modal.Description text='Product quantity' />
            <Modal.Input className='rounded-lg'/>
        </div>
        <div>
            <Modal.Description text='Product quantity' />
            <Modal.Input className='rounded-lg'/>
        </div>
        </div>
        <div>
            <button><p className='rounded-lg bg-white text-black px-5 py-1'>Send</p></button>
        </div>
      </Modal.Root>
//   </div>
    )
  }


  

export const Modal = {
    Root,
    Input,
    Description,
    Mounted
}