import './App.css'

import Modal from './components/modal/Modal'

import { useState, useEffect } from 'react'
import Task from './components/task/Task'

export default () => {

  const [modalActive, setModalActive] = useState(false)

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      // Carrega as tasks do localStorage quando o componente é montado
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
  }, []);



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
            <button className='addButton' onClick={setModalActive}>Add</button>
          </div>
        </header>
        { modalActive &&
          <Modal tasks={tasks} setTasks={setTasks} setModalActive={setModalActive}/>
        }

            <div className='taskContainer'>
              {tasks.map((task, index) => (
                  <Task
                    key={index}
                    title={task.title}
                    date={task.date}
                  />
              ))}
            </div>
      </div>
    </>
  )
}


