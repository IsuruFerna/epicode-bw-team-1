//Creazione delle scelte

const divClassForm = document.createElement("div");
divClassForm.className = "form";

const formSelection = document.createElement("form");
formSelection.id = "selection";

const labelDifficulty = document.createElement("label");
labelDifficulty.htmlFor = "label";
labelDifficulty.innerText = "Difficulty";

const selection = document.createElement("select");
selection.name = "difficulty";
selection.id = "difficulty";

const easy = document.createElement("option");
easy.value = "easy";
easy.innerText = "Easy";

const medium = document.createElement("option");
medium.value = "medium";
medium.innerText = "Medium";

const hard = document.createElement("option");
hard.value = "hard";
hard.innerText = "Hard";

selection.appendChild(easy);
selection.appendChild(medium);
selection.appendChild(hard);

const labelQuestions = document.createElement("label");
labelQuestions.htmlFor = "questions";
labelQuestions.innerText = "number of questions";

const input = document.createElement("input");
input.type = "range";
input.id = "numberOfQuestions";
input.name = "numberOfQuestions";
input.min = "1";
input.max = "35";
input.step = "1";
input.value = "1";

const output = document.createElement("output");
output.innerText = "1";

input.addEventListener("input", function () {
  output.textContent = this.value;
});

formSelection.appendChild(labelDifficulty);
formSelection.appendChild(selection);
formSelection.appendChild(labelQuestions);
formSelection.appendChild(input);
formSelection.appendChild(output);

divClassForm.appendChild(formSelection);

//Creazione del bottone Start

const divForStartButton = document.createElement("div");
divForStartButton.classList.add("form", "start");

const startLabel = document.createElement("label");
startLabel.htmlFor = "start";
startLabel.className = "start";
startLabel.id = "startButton";
startLabel.innerText = "Start";

divForStartButton.appendChild(startLabel);

document.body.appendChild(divClassForm);
document.body.appendChild(divForStartButton);

//Inizio pagina domande

let domandaCorrente = 0;
let punteggio = 0;
let arrQuestions = [];
let userAnswers = [];
let numDomande;
let chooseDfifficulty = document.getElementById("difficulty");

chooseDfifficulty.addEventListener("change", function () {
  const difficultyChoosed = chooseDfifficulty.value; //da controllare
  console.log(difficultyChoosed);
});
let rangeInput = document.getElementById("numberOfQuestions");
let numbOfQuestion = document.querySelector("output");
let questions1;

function updateQuestionsValue() {
  questions1 = rangeInput.value;

  numbOfQuestion.textContent = questions1;

  return questions1;
}

rangeInput.addEventListener("input", updateQuestionsValue);

let difficulty = chooseDfifficulty.value;

let startQuiz = document.getElementById("startButton");

startQuiz.addEventListener("click", function () {
  numDomande = updateQuestionsValue();

  //cambio pagina

  let formElement = document.querySelector(".form");
  if (formElement) {
    formElement.style.display = "none";
  }

  let startElement = document.querySelector(".start");
  if (startElement) {
    startElement.style.display = "none";
  }

  const header = document.querySelector("header");
  header.style.textAlign = "initial";

  //pagina cambiata
  // ********************* Dashborad *******************************************
  let FULL_DASH_ARRAY = 220;
  let timeLimit = 20;
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
  const resetTimer = function () {
    FULL_DASH_ARRAY = 220;
    timeLimit = 21;
    tempoPassato = 0;
    tempoMancante = timeLimit;
    intervallo = null;
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
    ).toFixed(0)} 220`;
    document
      .getElementById("timer-path")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  const startTimer = function () {
    intervallo = setInterval(() => {
      tempoPassato++;
      tempoMancante = timeLimit - tempoPassato;

      document.getElementById("timer-label").innerHTML = `
      <p>Seconds</p>${tempoRimanente(tempoMancante)}<p>Remainig</p>`;
      // aggiorno la funzione dentro lo span che visulazzia i secondi rimanenti
      setCircleDasharray();
      if (tempoMancante === 0) {
        tempoFinito();
        prossimaDomanda();
      }
    }, 1000);
  };

  const renderTimer = function (timeRemain) {
    //  timer(circle) code
    const viewTimer = document.getElementById("base-timer");
    viewTimer.innerHTML = `
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
        <span id="timer-label" class="cTimer-label"><p>Seconds</p>${tempoRimanente(
          timeRemain
        )}<p>Remainig</p> </span>`;
  };

  const displayQuestion = function () {
    const question = document.getElementById("question-container");
    const ans = document.getElementById("answer-container");
    const cont = document.getElementById("qCont-Container");

    fetch(
      `https://opentdb.com/api.php?amount=${numDomande}&category=18&difficulty=${difficulty}`
    )
      .then((response) => response.json())
      .then((questions) => {
        // assigning all fetch data to a global array
        arrQuestions = questions.results;

        // render question
        question.textContent = arrQuestions[domandaCorrente].question;
        ans.innerHTML = "";

        console.log(
          "question: ",
          arrQuestions[domandaCorrente].question,
          "Answers: ",
          arrQuestions[domandaCorrente].correct_answer,
          arrQuestions[domandaCorrente].incorrect_answers
        );

        console.log("Type: ", arrQuestions[domandaCorrente].type);

        // creating a list of correct answers and incorrect answers
        let listCorrect = [];
        if (typeof arrQuestions[domandaCorrente].correct_answer === "string") {
          listCorrect = [arrQuestions[domandaCorrente].correct_answer];
        } else {
          listCorrect = [...arrQuestions[domandaCorrente].correct_answer];
        }
        let listIncorrect = [];
        if (
          typeof arrQuestions[domandaCorrente].incorrect_answers === "string"
        ) {
          listIncorrect = [arrQuestions[domandaCorrente].incorrect_answers];
        } else {
          listIncorrect = [...arrQuestions[domandaCorrente].incorrect_answers];
        }

        // joining both correct and incorrect answers
        let listAnswers = [...listCorrect, ...listIncorrect];
        // randomize the order of listAnswers
        listAnswers.sort(() => Math.random() - 0.5);

        console.log(
          "correct answer: ",
          arrQuestions[domandaCorrente].correct_answer
        );

        // check clicked amount so we can target specific multiple selections
        let checkedCount = 0;
        let maxChecked = listCorrect.length;

        // rendering each answer
        for (let i = 0; i < listAnswers.length; i++) {
          const sceltaDiv = document.createElement("div");
          const scelta = document.createElement("input");
          const etichetta = document.createElement("label");

          scelta.type = "radio";
          scelta.name = "answer";
          // scelta.value = i;
          scelta.value = listAnswers[i];
          scelta.setAttribute("onclick", "check(event)");
          scelta.setAttribute("id", i);
          etichetta.setAttribute("for", i);
          etichetta.classList.add("forCss");
          etichetta.textContent = listAnswers[i];

          scelta.addEventListener("click", function () {
            checkedCount += this.checked ? 1 : 0;
            prossimaDomanda();
          });

          sceltaDiv.appendChild(scelta);
          sceltaDiv.appendChild(etichetta);

          ans.appendChild(sceltaDiv);
          if (i !== 0) {
            resetTimer();
            // startTimer()
          }
          cont.innerHTML = `<p>QUESTION  ${
            domandaCorrente + 1
          }</p><p id="cont">/ ${arrQuestions.length}</p>`;
        }

        renderTimer(tempoMancante - 1);
      });
  };

  // displayQuestion();
  const start = function () {
    startTimer();
    displayQuestion();
  };

  const prossimaDomanda = function () {
    if (domandaCorrente < arrQuestions.length - 1) {
      domandaCorrente++;
      displayQuestion();
    } else {
      document.getElementById("answer-container").remove();
      document.getElementById("question-container").remove();

      let countAsString = punteggio.toString();
      console.log(countAsString);

      location.assign(
        `results.html?amount=${numDomande}&score=${countAsString}`
      );
      // calcolaPunteggio();
    }
  };
  start();
});
const calcolaPunteggio = function () {
  const totalScore = document.getElementById("score");
  totalScore.textContent = `il tuo punteggio è ${punteggio}`;
};
const check = function (event) {
  const rispostaSelezionata = document.querySelector(
    'input[name="answer"]:checked'
  ).value;

  const label = document.querySelector('label[for="' + event.target.id + '"]');

  if (arrQuestions[domandaCorrente].correct_answer === rispostaSelezionata) {
    // feedback
    label.style.background = "green";
    punteggio = punteggio += 1;
    prossimaDomanda();
  } else {
    label.style.background = "red";
    prossimaDomanda();
  }
};
//displayQuestion();
