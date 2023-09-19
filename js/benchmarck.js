const FULL_DASH_ARRAY = 220;
const timeLimit = 10;
let tempoPassato = 0;
let tempoMancante = timeLimit;
let intervallo = null;

const tempoRimanente = function (time) {
  let seconds = time;
  if (seconds < 10) {
    seconds = `0${seconds}`; //mette lo 0 davanti in numeri < di 10 - 09-08-07...
  }
  return `${seconds}`;
};

const tempoFinito = function () {
  clearInterval(intervallo);
  console.log(intervallo);
};
function calculateTimeFraction() {
  const x = tempoMancante / timeLimit;
  return x - (1 / timeLimit) * (1 - x);
}
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("timer-path")
    .setAttribute("stroke-dasharray", circleDasharray);
}
const startTimer = function () {
  intervallo = setInterval(() => {
    tempoPassato++;
    tempoMancante = timeLimit - tempoPassato;

    document.getElementById("timer-label").innerHTML =
      tempoRimanente(tempoMancante);
    // aggiorno la funzione dentro lo span che visulazzia i secondi rimanenti
    setCircleDasharray();
    if (tempoMancante === 0) {
      tempoFinito();
    }
  }, 1000);
};

document.getElementById("base-timer").innerHTML = `
<svg class="cTimer-svg"
          viewbox="0 00 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="base-timer-cerchio">
            <circle class="base-timer-path" cx="50" cy="50" r="35" />
            <path
            id="timer-path"
            stroke-dasharray="220"
            stroke="#00ffff"
            class="cTimer-path " 
            d="
            M 50,50
            m -35,0
            a 35,35 0 1,0 70,0
            a 35,35 0 1,0 -70,0
            "
            ></path>
          </g>
        </svg>
        <span id="timer-label" class="cTimer-label">${tempoRimanente(
          tempoMancante
        )} </span>`;

startTimer();
