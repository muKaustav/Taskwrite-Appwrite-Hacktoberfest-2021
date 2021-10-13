import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { api } from '../../Appwrite.js'
import './Application.scss'

function Application () {
  let [name, setName] = useState('')

  let getUsername = async () => {
    let data = await api.getUser()
    setName(data.name.split(' ')[0])
  }

  useEffect(() => {
    getUsername()
  }, [])

  const logOut = async () => {
    try {
      await api.logout()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='Salutation'>
				Hey {name}, get cracking.
				<button onClick={logOut} className='Logout'>
  <span className='logout-icon'>
    <RiLogoutBoxLine />
  </span>{' '}
					Logout
				</button>
      </div>
      <Footer />
    </div>
  )
}

export default Application
