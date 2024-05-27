// [ConversionUtils.js]
/**
 * Función base intuitiva, toma la masa en libras y la retorna devuelta.
 * @param {number} masa - Masa en libras.
 * @returns {number} Masa en libras.
 */
export function convertToLibras (masa) {
  return masa
}

/**
 * Convierte la masa: libras -> gramos.
 * @param {number} masaLb - Masa en libras.
 * @returns {number} Masa en gramos.
 */
export function convertToGramosFromLibras (masaLb) {
  return masaLb * 500
}

/**
 * Convierte la masa: kilos -> gramos.
 * @param {number} masa - Masa en kilos.
 * @returns {number} Masa en gramos.
 */
export function convertToGramosFromKilos (masa) {
  return masa * 1000
}

/**
 * Convierte la masa: gramos -> libras.
 * @param {number} masaGr - Masa en gramos.
 * @returns {number} Masa en libras.
 */
export function convertToLibrasFromGramos (masaGr) {
  return masaGr / 500
}

/**
 * Convierte la masa: dinero -> libras.
 * @param {number} masa - Masa en dinero.
 * @param {number} costoPorLibraDeMasa - Costo por libra de masa.
 * @returns {number} Masa en libras.
 */
export function convertToLibrasFromDinero (masa, costoPorLibraDeMasa) {
  return masa / costoPorLibraDeMasa
}

/**
 * Convierte la masa: dinero -> gramos.
 * @param {number} masa - Masa en dinero.
 * @param {number} costoPorLibraDeMasa - Costo por libra de masa.
 * @returns {number} Masa en gramos.
 */
export function convertToGramosFromDinero (masa, costoPorLibraDeMasa) {
  return (masa * 500) / costoPorLibraDeMasa
}
