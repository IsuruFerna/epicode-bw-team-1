const timeLimit = 10;
let tempoPassato = 0;
let tempoMancante = timeLimit;
let intervallo = 0;

const tempoRimanente = function (time) {
  let seconds = time;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${seconds}`;
};

const tempoFinito = function () {
  clearInterval(intervallo);
  console.log(intervallo);
};

const startTimer = function () {
  intervallo = setInterval(() => {
    tempoPassato = tempoPassato += 1;
    tempoMancante = timeLimit - tempoPassato;

    document.getElementById("timer-label").innerHTML =
      tempoRimanente(tempoMancante);
    if (tempoMancante === 0) {
      return tempoFinito();
    }
  }, 1000);
};

document.getElementById("base-timer").innerHTML = `
<svg class="base-timer__svg"
          viewbox="-30 -60 180 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="60" cy="50" r="60" />
            <path
            id="timer-path"
            stroke-dasharray="283"
            class="cTimer-path"
            d="
            M 60,50
            m -70,70
            a 60,60 0 1,0 120,0
            a 60,60 0 1,0 -120,0
            "
            ></path>
          </g>
        </svg>
        <span id="timer-label" class="cTimer-label">${tempoRimanente(
          tempoMancante
        )} </span>`;
startTimer();
