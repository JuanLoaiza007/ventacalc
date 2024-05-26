// [App.jsx]
import React from 'react'
import './App.css'

import Navigation from './components/Navigation'
import FormCalculator from './components/FormCalculator'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

export default function App () {
  return (
    <div className='App'>
      <Navigation />
      <div className='container my-auto'>
        <div className='row'>

          <div className='col-lg-4 col-md-12'>
            <FormCalculator />
          </div>

          <div className='col-lg-8 col-md-12 my-auto'>
            <Statistics />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
