import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Modal } from './components/modal'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <div className='bg-slate-500 w-screen h-[200vh] flex justify-center'>
      <button onClick={() => setVisible((prev) => !prev)}>
        <p className='bg-slate-50 px-4 py-2 rounded-xl fixed top-4 left-4'>
        add product
        </p>
      </button>
      <Modal.Mounted visible={visible}/>
    </div>
    </>
  )
}

export default App
