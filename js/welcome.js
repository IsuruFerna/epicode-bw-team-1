const form = document.getElementById('myForm')
const checkbox = document.querySelector('#myCheckbox')
const button = document.querySelector('#proceedButton')

checkbox.checked = false

form.addEventListener('submit', function (e) {
  e.preventDefault() // Evita l'invio predefinito del modulo

  // Controlla se la checkbox è selezionata
  if (checkbox.checked) {
    // Reindirizza a benchmark.html se la checkbox è selezionata
    window.location.href = 'benchmark.html'
  }
})

checkbox.addEventListener('click', function () {
  // Abilita il pulsante se la checkbox è selezionata
  if (checkbox.checked) {
    proceedButton.removeAttribute('disabled')
  } else {
    // Disabilita il pulsante se la checkbox non è selezionata
    proceedButton.setAttribute('disabled', 'true')
  }
})
