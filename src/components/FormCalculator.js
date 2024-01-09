import React, { useEffect, useState } from "react";

function FormCalculator({onUpdateForm}) {
  const initialFormValues = {
    paquetesQueso: 0,
    paquetesSencillos: 0,
    masa: 0
  };

  const [formState, setFormState] = useState(initialFormValues);

  useEffect(() => {
    console.log(formState)
    onUpdateForm(formState);
  }, [formState]);

  function handleInput(e) {
    let { name, value } = e.target;

    if (isParseableNumber(e)) {
      value = parseInt(e.target.value);
    } else value = 0;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  
  function isParseableNumber(e) {
    let inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, '');
    const isNumber = !isNaN(parseInt(numericValue));
    e.target.value = numericValue;
  
    return isNumber;
  }

  function reloadForm() {
    document.getElementById("main-form").reset();
    setFormState(initialFormValues);  
  }
  

  return(
    <div className='card m-4 rounded-4'>
      <div className='card-header text-center'>
        <h4 className='p-2'> Calculadora de ventas </h4>
      </div>       
      <div className='row justify-content-center text-center'>
          <div className='col-md-5 col-sm-12'>
            <form 
              id='main-form'
              className='card-body'
              >
                <div 
                className='form-group'>
                  <p className='h6 mt-2'>Paquetes con queso</p>
                  <input 
                  type='text' 
                  inputMode='numeric'
                  name='paquetesQueso'
                  className='form-control text-center'
                  placeholder='0'
                  onChange={handleInput}></input>
                </div>
                <div className='form-group'>
                <p className='h6 mt-2'>Paquetes sencillos</p>
                  <input 
                  type='text'
                  inputMode='numeric'
                  name='paquetesSencillos'
                  className='form-control text-center'
                  placeholder='0'
                  onChange={handleInput}></input>
                </div>
                <div className='form-group my-2'>
                <p className='h6 mt-2'>Masa (libras)</p>
                  <input 
                  type='text'
                  inputMode='numeric'
                  name='masa'
                  className='form-control text-center' 
                  placeholder='0'
                  onChange={handleInput}></input>
                </div>
              </form> 
          </div>
        </div>
      
      <dic className='card-footer text-center'>
        <button 
        type='submit' 
        className='btn btn-warning m-2 rounded-5'
        onClick={reloadForm}>
          Limpiar
        </button>
      </dic>
    </div> 
  );
}

export default FormCalculator;