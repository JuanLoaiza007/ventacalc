// [Footer.jsx]
import React from 'react'
import { AppState } from '../states/AppState'

export default function Footer () {
  const useAppState = AppState()
  return (
    <footer className='bg-dark text-white'>
      <div className='text-center p-2'>v{useAppState.appVersion}</div>
    </footer>
  )
}
