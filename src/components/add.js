import { useState, useEffect } from 'react'

const Add = (props) => {

  let emptyRecord = { title: '', artist: '', year: '', cover: '' }
  const [record, setRecord] = useState(emptyRecord)

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(record)
  }


  return (
    <>
        <form className='d-flex flex-column' onSubmit={handleSubmit}>
          <div className='d-flex flex-row align-items-center justify-content-center'>
          <input type="text" className='add m-1' name="title" value={record.title} placeholder='New Album Title' onChange={handleChange} />
          <br/>
          <input type="text" className='add m-1' name="artist" value={record.artist} placeholder='New Album Artist' onChange={handleChange} />
          <br/>
          <input type="number" className='add m-1' name="year" value={record.year} placeholder='New Album Year' onChange={handleChange} />
          <br/>
          <input type="text" className='add m-1' name="cover" value={record.cover} placeholder='New Album Cover URL' onChange={handleChange} />
          </div>
          <br/>
          <div className=''>
          <input className='btn btn-success' type="submit"/>
          </div>
        </form>
    </>
  )
}

export default Add
