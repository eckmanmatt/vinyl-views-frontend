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
        <summary>Edit</summary>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder='album title' value={record.title} onChange={handleChange}/>
          <br/>
          <input type="text" name="artist" placeholder='artist' value={record.age} onChange={handleChange}/>
          <br/>
          <input type="number" name="year" placeholder='release year' value={record.year} onChange={handleChange}/>
          <br/>
          <input type="text" name="cover" placeholder='album art url' value={record.cover} onChange={handleChange}/>
          <input className='btn btn-success'type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
