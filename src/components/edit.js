import { useState } from 'react'

const Edit = (props) => {

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
          <label htmlFor="title">Album Title: </label>
          <input type="text" name="title" value={record.title} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="artist">Artist: </label>
          <input type="text" name="artist" value={record.age} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="year">Release Year: </label>
          <input type="number" name="year" value={record.year} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="cover">Album Art URL: </label>
          <input type="text" name="cover" value={record.cover} onChange={handleChange}/>
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
