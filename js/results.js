// Calcolo percentuale domande corrette
const urlParams = new URLSearchParams(location.search)
const scoreFromUrl = urlParams.get('score')
const totalAnswers = 10
const numberOfCorrectAnswers = scoreFromUrl
const numberOfWrongAnswers = totalAnswers - numberOfCorrectAnswers
const percentCorrect = (numberOfCorrectAnswers * 100) / totalAnswers

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Colorazione del cerchio in base alla percentuale delle risposte corrette

// Calcola l'angolo iniziale e finale della parte colorata in gradi (da 0 a 360)
const startAngle = 0
const endAngle = (percentCorrect / 100) * 360

//Nel caso in cui la percentuale fosse 100 il cerchio divnterebbe rosa, per cui devo creare la seguente condizione

if (percentCorrect === 100) {
  const circle = document.getElementById('secondCircle') //seleziono il secondo 'circle' che ha un stroke (contorno) 'transparent'
  circle.style.stroke = '#00ffff' //al secondo 'circle' attribuisco il colore cyano
} else {
  // Calcola i punti iniziale e finale della parte colorata del bordo
  const radius = 150 // Raggio del cerchio
  const centerX = 175 // Coordinata x del centro del cerchio
  const centerY = 175 // Coordinata y del centro del cerchio

  const startX =
    centerX + radius * Math.cos((startAngle - 90) * (Math.PI / 180))
  const startY =
    centerY + radius * Math.sin((startAngle - 90) * (Math.PI / 180))
  const endX = centerX + radius * Math.cos((endAngle - 90) * (Math.PI / 180))
  const endY = centerY + radius * Math.sin((endAngle - 90) * (Math.PI / 180))

  // Si costruisce il percorso del bordo colorato
  const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${
    endAngle - startAngle > 180 ? 1 : 0
  } 1 ${endX} ${endY}`

  // Si aggiorna il percorso del bordo colorato nel secondo SVG
  const coloredBorder = document.getElementById('coloredpath')
  coloredBorder.setAttribute('d', pathData)
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Inserimento dei messaggi nelle relative posizioni in base alla percentuale ottenuta

const message = document.querySelector('#message')
const passedNotPassed = document.querySelector('.cyanH3')
const certifcate = document.querySelector('#certificate')
const checkEmail = document.querySelector('#checkEmail')

if (percentCorrect >= 60) {
  message.innerText = 'Congratulations!'
  passedNotPassed.innerText = 'You passed the exam'
  certifcate.innerText = "We'll send you the certificate in few minutes."
  checkEmail.innerText = 'Check your email (including promotions/spam folder)'
} else {
  message.innerText = 'Too bad,'
  passedNotPassed.innerText = "You didn't passed the exam"
  passedNotPassed.classList.replace('cyanH3', 'pinkH3')
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Inserimento a pagina delle percentuali e del numero delle domande corrette e sbagliate

const percentageCorrectAnswers = document.querySelector('#correctPercentage')
const percentageWrongAnswers = document.querySelector('#wrongPercentage')
percentageCorrectAnswers.innerText = `${percentCorrect.toFixed(1)}%`
percentageWrongAnswers.innerText = `${(100 - percentCorrect).toFixed(1)}%`

const correctAnswers = document.querySelector('#correctQuestionsNumber')
correctAnswers.innerText = `${numberOfCorrectAnswers}/${totalAnswers} questions`

const wrongAnswers = document.querySelector('#wrongQuestionsNumber')
wrongAnswers.innerText = `${numberOfWrongAnswers}/${totalAnswers} questions`
