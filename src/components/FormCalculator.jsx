// [FormCalculator.jsx]
import React, { useEffect, useRef } from 'react'
import { FormState } from '../states/FormState'
import { isParseableNumber } from '../utils/numberUtils'

export default function FormCalculator () {
  const useFormState = FormState()
  const inputRefs = useRef({})

  useEffect(() => {
    functionButtonMasa('btnLibras')
  }, [])

  useEffect(() => {
    const handleInput = (e) => {
      let { name, value } = e.target
      if (isParseableNumber(e)) {
        value = parseInt(e.target.value)
      } else {
        value = 0
      }

      if (name === 'paquetesQueso') {
        useFormState.setPaquetesQueso(value)
      } else if (name === 'paquetesSencillos') {
        useFormState.setPaquetesSencillos(value)
      } else if (name === 'masa') {
        useFormState.setMasa(value)
      } else if (name === 'medidaMasa') {
        useFormState.setMedidaMasa(value)
      }
    }

    for (const inputRef of Object.values(inputRefs.current)) {
      inputRef.addEventListener('input', handleInput)
    }

    return () => {
      for (const inputRef of Object.values(inputRefs.current)) {
        inputRef.removeEventListener('input', handleInput)
      }
    }
  }, [useFormState])

  function reloadForm () {
    document.getElementById('main-form').reset()
    useFormState.resetAll()
    functionButtonMasa('btnLibras')
  }

  function functionButtonMasa (id) {
    const classNameSelected = 'btn btn-warning m-2 rounded-5'
    const classNameUnselected = 'btn btn-outline-warning m-2 rounded-5 text-secondary'

    const btnLibras = document.getElementById('btnLibras')
    const btnKilos = document.getElementById('btnKilos')
    const btnDinero = document.getElementById('btnDinero')

    const buttons = {
      btnLibras: {
        setActive: (btn) => {
          btn.className = classNameSelected
          btn.disabled = true
        },
        reset: () => {
          btnKilos.className = classNameUnselected
          btnDinero.className = classNameUnselected
          btnKilos.disabled = false
          btnDinero.disabled = false
        },
        medida: 'Libras'
      },
      btnKilos: {
        setActive: (btn) => {
          btn.className = classNameSelected
          btn.disabled = true
        },
        reset: () => {
          btnLibras.className = classNameUnselected
          btnDinero.className = classNameUnselected
          btnLibras.disabled = false
          btnDinero.disabled = false
        },
        medida: 'Kilos'
      },
      btnDinero: {
        setActive: (btn) => {
          btn.className = classNameSelected
          btn.disabled = true
        },
        reset: () => {
          btnLibras.className = classNameUnselected
          btnKilos.className = classNameUnselected
          btnLibras.disabled = false
          btnKilos.disabled = false
        },
        medida: 'Dinero'
      }
    }

    const activeButton = buttons[id]
    const otherButtons = Object.values(buttons).filter((button) => button !== activeButton)

    otherButtons.forEach((button) => button.reset())
    activeButton.setActive(document.getElementById(id))

    useFormState.setMedidaMasa(activeButton.medida)
  }

  return (
    <div className='card m-4 rounded-4'>
      <div className='card-header text-center'>
        <h4 className='p-2'>Calculadora de ventas</h4>
      </div>
      <div className='row justify-content-center text-center'>
        <div className='col-md-9 col-sm-12'>
          <form id='main-form' className='card-body'>
            <div className='form-group'>
              <p className='h6 mt-2'>Paquetes con queso</p>
              <input
                type='text'
                inputMode='numeric'
                name='paquetesQueso'
                className='form-control text-center'
                placeholder='0'
                ref={(el) => (inputRefs.current.paquetesQueso = el)}
              />
            </div>
            <div className='form-group'>
              <p className='h6 mt-2'>Paquetes sencillos</p>
              <input
                type='text'
                inputMode='numeric'
                name='paquetesSencillos'
                className='form-control text-center'
                placeholder='0'
                ref={(el) => (inputRefs.current.paquetesSencillos = el)}
              />
            </div>
            <div className='form-group my-2'>
              <p className='h6 mt-2'>Masa</p>
              <input
                type='text'
                inputMode='numeric'
                name='masa'
                className='form-control text-center'
                placeholder='0'
                ref={(el) => (inputRefs.current.masa = el)}
              />
              <p className='h6 mt-2'>Medida de masa</p>
              <button
                type='button'
                id='btnLibras'
                className='btn btn-outline-warning m-2 rounded-5'
                onClick={() => functionButtonMasa('btnLibras')}
              >
                Libras
              </button>
              <button
                type='button'
                id='btnKilos'
                className='btn btn-outline-warning m-2 rounded-5'
                onClick={() => functionButtonMasa('btnKilos')}
              >
                Kilos
              </button>
              <button
                type='button'
                id='btnDinero'
                className='btn btn-outline-warning m-2 rounded-5'
                onClick={() => functionButtonMasa('btnDinero')}
              >
                $$$
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='card-footer text-center'>
        <button
          className='btn btn-danger m-2 rounded-5'
          onClick={reloadForm}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
