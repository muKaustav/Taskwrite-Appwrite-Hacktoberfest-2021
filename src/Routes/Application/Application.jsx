import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Test from '../../Components/Test/Test'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { api } from '../../Appwrite.js'
import './Application.scss'

function Application () {
  let [name, setName] = useState('')
  let [edit, setEdit] = useState(false)
  let [docKey, setDocKey] = useState('')
  let [editText, setEditText] = useState('')
  let [newText, setNewText] = useState('')
  let [docs, setDocs] = useState([[]])

  let getUsername = async () => {
    let data = await api.getUser()
    setName(data['name'].split(' ')[0])
  }

  const logOut = async () => {
    try {
      await api.logout()
    } catch (error) {
      console.error(error)
    }
  }

  const handleAdd = async e => {
    e.preventDefault()
    try {
      if (newText.length > 0) {
        let obj = {
          name: newText
        }
        await api.createDoc(obj)
        setNewText('')
        window.location.reload()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getDocs = async () => {
    try {
      let docs = await api.listDocs()
      let docsData = docs['documents'].map(docs => docs.name)
      let docsId = docs['documents'].map(docs => docs['$id'])
      setDocs([docsData, docsId])
    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = async e => {
    e.preventDefault()
    try {
      let obj = {
        name: editText
      }
      await api.updateDoc(docKey, obj)
      setEditText('')
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDocs()
    getUsername()
  }, [])

  return (
    <div>
      <Navbar />

      <div className='Salutation'>
        {docs[0].length > 0
					? 
							<>Hey {name}, here are your tasks.</>
          : <>No tasks yet, get cracking {name}!</>}

        <button onClick={logOut} className='Logout'>
          <span className='logout-icon'>
            <RiLogoutBoxLine />
          </span>{' '}
					Logout
				</button>
      </div>

      <div className='Application'>
        <div className='Tasks'>
          {docs[0].map((doc, key) => {
            return (
              <Test
                key={key}
                className='Tasks-item'
                setEdit={() => {
                  setEditText(`${doc}`)
                  setDocKey(docs[1][key])
                  setEdit(true)
                }}
                doc={docs[1][key]}
                text={doc}
							/>
            )
          })}
        </div>
        {edit
					? <form className='Form'>
  <div className='Form-container'>
    <textarea
      className='Edit'
      type='text'
      onChange={e => {
        setEditText(e.target.value)
      }}
      value={editText}
								/>
    <div className='buttons'>
      <button
        className='Edit-button'
        type='text'
        onClick={handleEdit}
									>
										Edit Task
									</button>
      <button
        className='Back-button'
        onClick={() => {
          setEdit(false)
        }}
									>
										Go Back
									</button>
    </div>
  </div>
						</form>
					: <form className='Form' onSubmit={handleAdd}>
  <div className='Form-container'>
    <textarea
      className='Edit'
      type='text'
      required
      placeholder='Enter new task . . .'
      value={newText}
      onChange={e => {
        setNewText(e.target.value)
      }}
								/>
    <button className='Edit-button' type='submit'>
									Add Task
								</button>
  </div>
						</form>}
      </div>

      <Footer />
    </div>
  )
}

export default Application
