// [Navigation.jsx]
import React from 'react'
import { AppState } from '../states/AppState'
import './Navigation.css'

export default function Navigation () {
  const useAppState = AppState()
  return (
    <nav className='navbar navbar-dark bg-dark px-2 '>
      <div className='d-flex flex-row navigation-container'>
        <img src='/assets/images/logo-app.png' alt='logo' className='logo-icon mx-2' />
        <div className='app-name'>{useAppState.appName}</div>
      </div>
    </nav>
  )
}
