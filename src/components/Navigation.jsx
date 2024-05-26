// [Navigation.jsx]
import React from 'react'
import { AppState } from '../states/AppState'

export default function Navigation ({ logoApp }) {
  const useAppState = AppState()
  return (
    <nav className='navbar navbar-dark bg-dark px-2'>
      <img src={logoApp} width='30' height='30' className='mx-2' alt='logo' />
      <div className='navbar-brand h4 text-white me-auto'>{useAppState.appName}</div>
    </nav>
  )
}
