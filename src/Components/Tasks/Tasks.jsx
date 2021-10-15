import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { AiTwotoneDelete } from 'react-icons/ai'
import { api } from '../../Appwrite'
import './Tasks.scss'

function Tasks(props) {
   const handleDelete = async e => {
    e.preventDefault()
    try {
      await api.deleteDoc(props.doc)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='Card'>
        <div className='Card-body'>
          <h1 className='Card-text'>{props.text}</h1>
        </div>
        <div className='Card-utilities'>
          <button onClick={props.setEdit} className='edit'>
            <FaEdit className='icon' />
          </button>
          <button onClick={handleDelete} className='del'>
            <AiTwotoneDelete className='icon' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Tasks
