import React, { useState } from 'react'; 
import './App.css';

import Navigation from './components/Navigation';
import FormCalculator from './components/FormCalculator';
import Statistics from './components/Statistics';

import initialFormValues from "./defaultFormState.json";
import defaultPricesValues from "./defaultPrices.json";

import logo from './logo.svg';

function App() {
  const [appState, setAppState] = useState({
    "appName": "VentaCalc",
    "version": "0.1"
  });

  const [formState, setFormState] = useState(initialFormValues);
  const [prices, setPrices] = useState(defaultPricesValues);

  function handleUpdateForm (state) {
    setFormState(state);
  }

  return (
    <div className="App">
      <Navigation
        appName={appState.appName} 
      />

      <div className='container my-2'>
        <div className='row'>
          <div className='col-lg-4 col-md-12'>
            <FormCalculator
              onUpdateForm={handleUpdateForm}
            />
          </div>
          <div className='col-lg-8 col-md-12'>
            <Statistics 
              paquetesQueso = {formState.paquetesQueso} 
              paquetesSencillos = {formState.paquetesSencillos} 
              masa = {formState.masa} 
              medidaMasa = {formState.medidaMasa}
              costoPaqueteQueso = {prices.costoPaqueteQueso}
              costoPaqueteSencillo = {prices.costoPaqueteSencillo}
              costoPorLibraDeMasa = {prices.costoPorLibraDeMasa}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
