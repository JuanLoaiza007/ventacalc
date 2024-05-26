/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'
import FormCalculator from './components/FormCalculator'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

import initialFormValues from './defaultFormState.json'

import imagenes from './images/imagenes'

export default function App () {
  const [formState, setFormState] = useState(initialFormValues)

  function handleUpdateForm (state) {
    setFormState(state)
  }

  return (
    <div className='App'>

      <Navigation
        logoApp={imagenes.logoApp}
      />

      <div className='container my-auto'>
        <div className='row'>

          <div className='col-lg-4 col-md-12'>
            <FormCalculator onUpdateForm={handleUpdateForm} />
          </div>

          <div className='col-lg-8 col-md-12 my-auto'>
            <Statistics />
          </div>

        </div>
      </div>

      <div id='footerMain'>
        <Footer />
      </div>

    </div>
  )
}
