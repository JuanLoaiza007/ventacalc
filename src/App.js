import React, { useState } from 'react'; 
import './App.css';

import Navigation from './components/Navigation';
import FormCalculator from './components/FormCalculator';
import Statistics from './components/Statistics';

import initialFormValues from "./defaultState.json";

import logo from './logo.svg';

function App() {
  const [appState, setAppState] = useState({
    "appName": "VentaCalc",
    "version": "0.1"
  });

  const [formState, setFormState] = useState(initialFormValues);

  function handleUpdateForm (state) {
    setFormState(state);
    console.log("State updated");
  }

  return (
    <div className="App">
      <Navigation
        appName={appState.appName} 
      />

      <div className='container my-4'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 mb-5'>
            <FormCalculator
              onUpdateForm={handleUpdateForm}
            />
          </div>
          <div className='col-lg-8 col-md-12 mb-5'>
            <Statistics 
              paquetesQueso = {formState.paquetesQueso} 
              paquetesSencillos = {formState.paquetesSencillos} 
              masa = {formState.masa} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
