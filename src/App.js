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
      <div>
        <h1>Vinyl Views</h1>
      </div>
      <div>

        {toggleAddRecord ?
          <Add handleCreate={handleCreate}/>
          :null
        }
        <button onClick={handleToggleAddRecord}>
          <h2>add</h2>
          </button>

      </div>
      <div>
        {records.map((record)=>{
          return(
            <div className='record' key={record.id}>
              <h4>{record.title}</h4>
              <h4>{record.artist}</h4>
              <h4>{record.year}</h4>
              <Edit handleUpdate={handleUpdate} id={record.id}/>
              <button onClick={handleDelete} value = {record.id}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
