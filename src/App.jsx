/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'
import FormCalculator from './components/FormCalculator'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

import initialFormValues from './defaultFormState.json'
import defaultPricesValues from './defaultPrices.json'

import imagenes from './images/imagenes'

export default function App () {
  const [appState, setAppState] = useState({
    appName: 'Ventacalc',
    appVersion: '1.0'
  })

  const [formState, setFormState] = useState(initialFormValues)
  const [prices, setPrices] = useState(defaultPricesValues)

  function handleUpdateForm (state) {
    setFormState(state)
  }

  return (
    <div className='App'>
      <Navigation appName={appState.appName} logoApp={imagenes.logoApp} />
      <div className='container my-auto'>
        <div className='row'>
          <div className='col-lg-4 col-md-12'>
            <FormCalculator onUpdateForm={handleUpdateForm} />
          </div>
          <div className='col-lg-8 col-md-12 my-auto'>
            <Statistics
              paquetesQueso={formState.paquetesQueso}
              paquetesSencillos={formState.paquetesSencillos}
              masa={formState.masa}
              medidaMasa={formState.medidaMasa}
              costoPaqueteQueso={prices.costoPaqueteQueso}
              costoPaqueteSencillo={prices.costoPaqueteSencillo}
              costoPorLibraDeMasa={prices.costoPorLibraDeMasa}
            />
          </div>
        </div>
      </div>
      <div id='footerMain'>
        <Footer appVersion={appState.appVersion} />
      </div>
    </div>
  )
}
