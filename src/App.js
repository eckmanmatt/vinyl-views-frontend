import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios'

import Add from './components/add.js'
import Edit from './components/edit.js'


const App = () => {

  // states
  const [records, setRecords] = useState([])
  const [toggleAddRecord, setToggleAddRecord] = useState(false)

  // functions
  const getRecords = () => {
    axios
      .get('https://fast-taiga-56523.herokuapp.com/api/records')
      .then(
        (response) => setRecords(response.data),
        (error) => console.error(error)
      )
      .catch((error) => console.error(error))
  }

  const handleCreate = (addRecord) => {
    axios
      .post('https://fast-taiga-56523.herokuapp.com/api/records', addRecord)
      .then((response) => {
        getRecords()
      })
  }

  const handleDelete = event => {
    axios
      .delete('https://fast-taiga-56523.herokuapp.com/api/records/' + event.target.value)
      .then((response) => {
        getRecords()
      })
  }

  const handleUpdate = (editRecord) => {
    axios
      .put('https://fast-taiga-56523.herokuapp.com/api/records/' + editRecord.id, editRecord)
      .then((response) => {
        getRecords()
      })
  }

  const handleToggleAddRecord = () => {
    if(toggleAddRecord){
      setToggleAddRecord(false)
    }else{
      setToggleAddRecord(true)
    }
  }

  useEffect(() => {
    getRecords()
  }, [])


  return (
    <>
      <div className='d-flex flex-row text-center justify-content-center m-auto'>
        <img className='logo' src='https://i.imgur.com/U3gbIZP.png'/>
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <div className='text-center'>
          <button className='btn btn-success p-2' onClick={handleToggleAddRecord}>
          <h5 className='m-0'><span className='lnr lnr-chevron-down'/>Add Record to Collection<span className='lnr lnr-chevron-down'/></h5>
          </button>
        </div>
        <div className='text-center'>
          {toggleAddRecord ?
            <Add handleCreate={handleCreate}/>
            :null
          }
        </div>
      </div>
      <div className='d-flex flex-row-reverse flex-wrap container justify-content-center'>
        {records.map((record)=>{
          return(
            <div className='d-flex flex-column card text-center align-content-center justify-content-around p-1 m-1 bg-dark text-white' key={record.id}>
              <h4><b><i>{record.title}</i></b></h4>
              <div className='cover'>
                <img className='cover' src={record.cover}/>
              </div>
              <h4>{record.artist}</h4>
              <h6>{record.year}</h6>
              <div>
                <Edit handleUpdate={handleUpdate} id={record.id}/>
                <button className='w-30 btn btn-danger' onClick={handleDelete} value = {record.id}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='footer d-flex flex-column text-center bg-light mt-3 pt-3'>
        <h5>Designed and Built by</h5>
        <h4>Matt Eckman</h4>
      </div>
    </>
  );
}

export default App;
