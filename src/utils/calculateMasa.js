// [CalculateMasa.js]
import {
  convertToLibras,
  convertToGramosFromLibras,
  convertToGramosFromKilos,
  convertToLibrasFromGramos,
  convertToLibrasFromDinero,
  convertToGramosFromDinero
} from './conversionUtils'

/**
 * Calcula la masa en diferentes unidades y su costo basado en la medida de masa.
 * @param {number} masa - Valor de la masa.
 * @param {string} medidaMasa - Medida de la masa ('Libras', 'Kilos' o 'Dinero').
 * @param {number} costoPorLibraDeMasa - Costo por libra de masa.
 * @returns {Object} Objeto con la masa en libras, gramos, costo de la masa y cantidad de masa.
 */
export function calculateMasa (masa, medidaMasa, costoPorLibraDeMasa) {
  let masaLb = 0
  let masaGr = 0
  let costoMasa = 0
  let cantidadMasa = ''

  switch (medidaMasa) {
    case 'Libras':
      masaLb = convertToLibras(masa)
      masaGr = convertToGramosFromLibras(masaLb)
      costoMasa = masaLb * costoPorLibraDeMasa
      cantidadMasa = `${masaLb} lb`
      break
    case 'Kilos':
      masaGr = convertToGramosFromKilos(masa)
      masaLb = convertToLibrasFromGramos(masaGr)
      costoMasa = masaLb * 1500
      cantidadMasa = `${masa} kg`
      break
    case 'Dinero':
      masaLb = convertToLibrasFromDinero(masa, costoPorLibraDeMasa)
      masaGr = convertToGramosFromDinero(masa, costoPorLibraDeMasa)
      costoMasa = masa
      cantidadMasa = `$${masa}`
      break
    default:
      break
  }

  return { masaLb, masaGr, costoMasa, cantidadMasa }
}
