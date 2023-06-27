import React, { useState } from 'react';
import AddList from './AddList';
import './App.css';
import Modal from './Modal';

const data = [
  {
    id: 1,
    title: "i love Javascript",
    StartDate: "20/8/2016"
  },
  {
    id: 2,
    title: "i love python",
    StartDate: "20/8/2017"
  },
  {
    id: 3,
    title: "i love php",
    StartDate: "20/8/2018"
  },
]

function App() {
  const [list, setList] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const handleDelete = (id) => {
    const filterList = list.filter(item => item.id !== id)
    setList(filterList)
  }

  return (
    <div className="App">
      <h2 style={{textAlign: "center", margin: "50px"}}>My Modulo Real Life<span style={{color: "red"}}>React Project</span></h2>
      {
        list.map(item => (
          <div  onClick={() => handleDelete(item.id)} key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.StartDate}</p>
          </div>
        ))
      }
      <div className="btn_container">
      <button onClick={(e) => setShowModal(true)}>add List</button>
      </div>


      {
        showModal && <Modal>
        <AddList setList={setList} setShowModal = {setShowModal} />
        <button onClick={e => setShowModal(false)}>CLOSE MODAL</button>
      </Modal>
      }
      
      
    </div>
  );
}

export default App;