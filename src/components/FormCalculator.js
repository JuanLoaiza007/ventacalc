import React, { useEffect, useState } from "react";

function FormCalculator({onUpdateForm}) {
  const initialFormValues = {
    paquetesQueso: 0,
    paquetesSencillos: 0,
    masa: 0,
    medidaMasa: "Libras",
  };

  const [formState, setFormState] = useState(initialFormValues);

  useEffect(() => {
    functionButtonMasa("btnLibras");
  }, []);

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
    functionButtonMasa("btnLibras");
  }

  function functionButtonMasa(id) {
    const classNameSelected = "btn btn-warning m-2 rounded-5"
    const classNameUnselected = "btn btn-outline-warning m-2 rounded-5 text-secondary"

    var btnLibras = document.getElementById("btnLibras");
    var btnKilos = document.getElementById("btnKilos");
    var btnDinero = document.getElementById("btnDinero");

    function activeBtnLibras(){
      btnLibras.className = classNameUnselected;
      btnLibras.disabled = false;
    }

    function activeBtnKilos(){
      btnKilos.className = classNameUnselected;
      btnKilos.disabled = false;
    }

    function activeBtnDinero(){
      btnDinero.className = classNameUnselected;
      btnDinero.disabled = false;
    }

    function medidaSelect(nuevaMedida) {
      setFormState((prevState) => ({
        ...prevState,
        medidaMasa: nuevaMedida
      }));
    }

    if (id === "btnLibras") {
      activeBtnKilos();
      activeBtnDinero();
      medidaSelect("Libras");
      
    } else if (id === "btnKilos") {
      activeBtnLibras();
      activeBtnDinero();
      medidaSelect("Kilos");
    } else if (id === "btnDinero") {
      activeBtnLibras();
      activeBtnKilos();
      medidaSelect("Dinero");
    }

    var btnActual = document.getElementById(id);
    btnActual.className = classNameSelected;
    btnActual.disabled = true;
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
                  <p className='h6 mt-2'>Masa</p>
                  <input 
                  type='text'
                  inputMode='numeric'
                  name='masa'
                  className='form-control text-center' 
                  placeholder='0'
                  onChange={handleInput}></input>
                  <p className='h6 mt-2'>Medida de masa</p>
                  <button 
                  type="button" 
                  id="btnLibras"          
                  className="btn btn-outline-warning m-2 rounded-5"
                  onClick={() => functionButtonMasa("btnLibras")}>
                    Libras
                  </button>
                  <button 
                  type="button" 
                  id="btnKilos"
                  className="btn btn-outline-warning m-2 rounded-5"
                  onClick={() => functionButtonMasa("btnKilos")}>
                    Kilos
                  </button>
                  <button 
                  type="button" 
                  id="btnDinero"
                  className="btn btn-outline-warning m-2 rounded-5"
                  onClick={() => functionButtonMasa("btnDinero")}>
                    $$$
                  </button>
                </div>
              </form> 
          </div>
        </div>
      
      <dic className='card-footer text-center'>
        <button 
        type='submit' 
        className='btn btn-danger m-2 rounded-5'
        onClick={reloadForm}>
          Limpiar
        </button>
      </dic>
    </div> 
  );
}

export default FormCalculator;