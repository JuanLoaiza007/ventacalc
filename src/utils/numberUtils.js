// [NumberUtils.js]
/**
 * Verifica si el valor de entrada es parseable como número.
 * @param {Event} e - Evento del input.
 * @returns {boolean} Verdadero si el valor es parseable como número, falso de lo contrario.
 */
export function isParseableNumber (e) {
  const inputValue = e.target.value
  const numericValue = inputValue.replace(/[^\d]/g, '')
  const isNumber = !isNaN(parseInt(numericValue))
  e.target.value = numericValue
  return isNumber
}
