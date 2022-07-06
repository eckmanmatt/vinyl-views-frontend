import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios'

import Add from './components/add.js'
import Edit from './components/edit.js'
import Search from './components/search.js'

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
      <div className='d-flex flex-row w-50 justify-content-around text-center pt-2 pb-3 m-auto'>
        <h3 className='devicon-react-original'></h3>
        <h3 className='devicon-django-plain'></h3>
        <h3 className='devicon-mongodb-plain'></h3>
      </div>
      <div className='d-flex flex-row text-center justify-content-center m-auto'>
        <a href="https://github.com/eckmanmatt/vinyl-views-frontend" target='_blank'><img className='logo' src='https://i.imgur.com/U3gbIZP.png'/></a>
      </div>



      <div className='d-flex flex-column justify-content-center m-auto'>
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
      <div className='d-flex flex-column-reverse flex-wrap container justify-content-center'>
        {records.map((record)=>{
          return(
            <div className='record d-flex flex-row card text-center align-content-center justify-content-between p-1 w-100' key={record.id}>
              <div className='cover'>
                <img className='cover' src={record.cover}/>
              </div>
              <h4 className='d-flex flex-wrap title justify-content-center'><i>{record.title}</i></h4>
              |
              <h4><b>{record.artist}</b></h4>
              |
              <h6>{record.year}</h6>
              |
              <Edit handleUpdate={handleUpdate} id={record.id}/>
              <button className='w-30 btn btn-danger lnr lnr-trash mr-2' onClick={handleDelete} value = {record.id}></button>
            </div>
          )
        })}

      </div>
      <div className='footer d-flex flex-column text-center bg-light mt-3 pt-3'>
        <h8>Designed and Built by</h8>
        <a href='https://www.linkedin.com/in/mattheweckman/' target='_blank'><h8><b>Matt Eckman</b></h8></a>
      </div>
    </>
  );
}

export default App;
