// [Statistics.jsx]
import React from 'react'
import {
  calculatePaquetesQuesoCost,
  calculatePaquetesSencillosCost,
  calculateTotalCost
} from '../utils/calculateCosts'
import { FormState } from '../states/FormState'
import { PricesState } from '../states/PricesState'
import { calculateMasa } from '../utils/calculateMasa'

export default function Statistics () {
  const useFormState = FormState()
  const usePricesState = PricesState()

  const paquetesQueso = useFormState.paquetesQueso
  const paquetesSencillos = useFormState.paquetesSencillos
  const masa = useFormState.masa
  const medidaMasa = useFormState.medidaMasa

  const costoPaqueteQueso = usePricesState.costoPaqueteQueso
  const costoPaqueteSencillo = usePricesState.costoPaqueteSencillo
  const costoPorLibraDeMasa = usePricesState.costoPorLibraDeMasa

  const costoTotalPaquetesQueso = calculatePaquetesQuesoCost(paquetesQueso, costoPaqueteQueso)
  const costoTotalPaquetesSencillos = calculatePaquetesSencillosCost(paquetesSencillos, costoPaqueteSencillo)
  const { masaLb, masaGr, costoMasa, cantidadMasa } = calculateMasa(masa, medidaMasa, costoPorLibraDeMasa)

  const mostrarEstadisticasMasa = masaLb !== 0
  const costoTotal = calculateTotalCost(costoTotalPaquetesQueso, costoTotalPaquetesSencillos, costoMasa)

  return (
    <div className='card m-4 rounded-4'>
      <div className='card-header text-center'>
        <h4>Resultado</h4>
      </div>
      <div className='card-body'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col' />
              <th scope='col'>Cantidad</th>
              <th scope='col'>Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paquetes con queso</td>
              <td>{paquetesQueso}</td>
              <td>${costoTotalPaquetesQueso}</td>
            </tr>
            <tr>
              <td>Paquetes sencillos</td>
              <td>{paquetesSencillos}</td>
              <td>${costoTotalPaquetesSencillos}</td>
            </tr>
            <tr>
              <td>Masa</td>
              <td>{cantidadMasa}</td>
              <td>${costoMasa}</td>
            </tr>
          </tbody>
        </table>
        <div className='text-end m-5'>
          <p className='h4 mb-4'>Costo total: $ {costoTotal}</p>
          <div id='estadisticasMasa' style={{ display: mostrarEstadisticasMasa ? 'block' : 'none' }}>
            <p className='h5'>Libras: {masaLb.toFixed(2)} lb</p>
            <p className='h5'>Gramos: {masaGr.toFixed(2)} g</p>
          </div>
        </div>
      </div>
    </div>
  )
}
