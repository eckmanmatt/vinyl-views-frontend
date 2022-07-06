import { useState } from 'react'
import axios from 'axios'

const Edit = (props) => {
  const [records, setRecords] = useState([])

  let emptyRecord = { id:props.id, title: '', artist: '', year:'', cover:'' }
  const [record, setRecord] = useState(emptyRecord)

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(record)
  }


  return (
    <>
      <details>
        <summary className='btn btn-warning lnr lnr-pencil p-1'></summary>
        <form className='p-1' onSubmit={handleSubmit}>
          <input className='' type="text" name="title" placeholder='album title' value={record.title} onChange={handleChange} required/>
          <br/>
          <input type="text" name="artist" placeholder='artist' value={record.age} onChange={handleChange} required/>
          <br/>
          <input type="number" name="year" placeholder='release year' value={record.year} onChange={handleChange} required/>
          <br/>
          <input type="text" name="cover" placeholder='album art url' value={record.cover} onChange={handleChange} required/>
          <br/>
          <input className='btn btn-success'type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
