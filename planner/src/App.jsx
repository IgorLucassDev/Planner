import './App.css'

import Modal from './components/modal/Modal'
import Navbar from './components/navbar/Navbar'
import Task from './components/task/Task'

import { Outlet } from 'react-router-dom'

import { useState, useEffect } from 'react'

export default () => {

  const [tasks, setTasks] = useState([]);

  const [modalActive, setModalActive] = useState(false)

  const handleModalVisible = () =>{
    setModalActive(true)
  }

  useEffect(() => {
    // Carrega as tasks do localStorage quando o componente é montado
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const [activeButton, setActiveButton] = useState('home');

  return (
    <>
      <div className='Container'>
        <header>
          <div className='logo'>
            <h1>Planner</h1>
            <h2>Trabalhos</h2>
          </div>
          <Navbar activeButton={activeButton} setActiveButton={setActiveButton}/>
          <div>
            <button className='addButton' onClick={handleModalVisible}>Add</button>
          </div>
        </header>
        { modalActive &&
          <Modal tasks={tasks} setTasks={setTasks} setModalActive={setModalActive}/>
        }

        <Outlet/>

        { activeButton == 'home' ? 
          
          <div className='taskContainer'>
              {tasks.map((task, index) => (
                  <Task
                    key={index}
                    title={task.title}
                    date={task.date}
                  />
              ))}
        </div>
         : []
        }

      </div>
    </>
  )
}


