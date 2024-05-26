// [CalculateCosts.js]
/**
 * Calcula el costo total de los paquetes con queso.
 * @param {number} paquetesQueso - Cantidad de paquetes con queso.
 * @param {number} costoPaqueteQueso - Costo por paquete con queso.
 * @returns {number} Costo total de los paquetes con queso.
 */
export function calculatePaquetesQuesoCost (paquetesQueso, costoPaqueteQueso) {
  return paquetesQueso * costoPaqueteQueso
}

/**
 * Calcula el costo total de los paquetes sencillos.
 * @param {number} paquetesSencillos - Cantidad de paquetes sencillos.
 * @param {number} costoPaqueteSencillo - Costo por paquete sencillo.
 * @returns {number} Costo total de los paquetes sencillos.
 */
export function calculatePaquetesSencillosCost (paquetesSencillos, costoPaqueteSencillo) {
  return paquetesSencillos * costoPaqueteSencillo
}

/**
 * Calcula el costo total de la venta.
 * @param {number} costoPaquetesQueso - Costo total de los paquetes con queso.
 * @param {number} costoPaquetesSencillos - Costo total de los paquetes sencillos.
 * @param {number} costoMasa - Costo de la masa.
 * @returns {number} Costo total de la venta.
 */
export function calculateTotalCost (costoPaquetesQueso, costoPaquetesSencillos, costoMasa) {
  return costoPaquetesQueso + costoPaquetesSencillos + costoMasa
}
