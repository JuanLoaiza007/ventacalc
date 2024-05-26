// [FormUtils.js]
/**
 * Restablece el estado del formulario a sus valores iniciales.
 * @param {Function} setFormState - Función para actualizar el estado del formulario.
 * @param {Object} initialFormValues - Valores iniciales del formulario.
 */
export function resetForm (setFormState, initialFormValues) {
  setFormState(initialFormValues)
}

/**
 * Actualiza el estado del formulario con un nuevo valor.
 * @param {Object} prevState - Estado previo del formulario.
 * @param {string} name - Nombre del campo del formulario que se actualizará.
 * @param {*} value - Nuevo valor del campo del formulario.
 * @returns {Object} Nuevo estado del formulario.
 */
export function updateFormState (prevState, name, value) {
  return { ...prevState, [name]: value }
}
