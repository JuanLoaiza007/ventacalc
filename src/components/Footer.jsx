// [Footer.jsx]
import React from 'react'
import { AppState } from '../states/AppState'
import './Footer.css'

export default function Footer () {
  const useAppState = AppState()
  return (
    <footer className='bg-dark text-white footer-container'>
      <div className='py-2'>v{useAppState.appVersion}</div>
    </footer>
  )
}
