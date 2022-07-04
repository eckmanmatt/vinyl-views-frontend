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
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={record.title} placeholder='New Album Title' onChange={handleChange} />
        <br />
        <br />
        <input type="text" name="artist" value={record.artist} placeholder='New Album Artist' onChange={handleChange} />
        <br />
        <br />
        <input type="number" name="year" value={record.year} placeholder='New Album Year' onChange={handleChange} />
        <br />
        <br />
        <input type="text" name="cover" value={record.cover} placeholder='New Album Cover URL' onChange={handleChange} />
        <br />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
