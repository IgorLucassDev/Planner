import './App.css'

import Modal from './components/modal/Modal'

import { useState } from 'react'

export default () => {

  const [modalActive, setModalActive] = useState(false)

  const handleModalVisible = () =>{
    setModalActive(true)
  }

  return (
    <>
      <div className='Container'>
        <header>
          <div className='logo'>
            <h1>Planner</h1>
            <h2>Trabalhos</h2>
          </div>
          <div>
            <button onClick={setModalActive}>Add</button>
          </div>
        </header>
        { modalActive &&
          <Modal setModalActive={setModalActive}/>
        }
      </div>
    </>
  )
}


