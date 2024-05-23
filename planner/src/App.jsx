import './App.css'
import Modal from './components/modal/Modal'

export default () => {

  return (
    <>
      <div className='Container'>
        <header>
          <div className='logo'>
            <h1>Planner</h1>
            <h2>Trabalhos</h2>
          </div>
          <div>
            <button>Add</button>
          </div>
        </header>
        <Modal/>
      </div>
    </>
  )
}


