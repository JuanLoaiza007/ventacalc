// [ButtonUtils.js]
/**
 * Establece el botón activo y desactiva los demás botones.
 * @param {string} btnId - ID del botón activo.
 */
export function setActiveButton (btnId) {
  const classNameSelected = 'btn btn-warning m-2 rounded-5'
  const classNameUnselected = 'btn btn-outline-warning m-2 rounded-5 text-secondary'

  const btnLibras = document.getElementById('btnLibras')
  const btnKilos = document.getElementById('btnKilos')
  const btnDinero = document.getElementById('btnDinero')

  function activeBtnLibras () {
    btnLibras.className = classNameUnselected
    btnLibras.disabled = false
  }

  function activeBtnKilos () {
    btnKilos.className = classNameUnselected
    btnKilos.disabled = false
  }

  function activeBtnDinero () {
    btnDinero.className = classNameUnselected
    btnDinero.disabled = false
  }

  if (btnId === 'btnLibras') {
    activeBtnKilos()
    activeBtnDinero()
  } else if (btnId === 'btnKilos') {
    activeBtnLibras()
    activeBtnDinero()
  } else if (btnId === 'btnDinero') {
    activeBtnLibras()
    activeBtnKilos()
  }

  const btnActual = document.getElementById(btnId)
  btnActual.className = classNameSelected
  btnActual.disabled = true
}
