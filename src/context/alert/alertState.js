import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const AlertState = props => {
  
  const initialState = {
    alert: null
  }

  // const initalState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Set alert for empty search
  const showAlert = (msg, type) => {

    dispatch({
      type: SET_ALERT,
       
    })

    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 4000)
  }


  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState