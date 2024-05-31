import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

function Private() {
  const navigate = useNavigate()
  const { user, setuser } = useContext(UserContext)


    const item = JSON.parse(localStorage.getItem('userdata'))
    if (item) {
      setuser(true)
    }
    if (user === true) {
      return <Outlet />;
    } else {
      useEffect(() => {
        if (user === false) {
          navigate('/Login')
        }
      })

    }
 


}

export default Private