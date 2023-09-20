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
   ).toFixed(0)} 283`;
   document
      .getElementById("timer-path")
      .setAttribute("stroke-dasharray", circleDasharray);
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

      document.getElementById("timer-label").innerHTML =
         tempoRimanente(tempoMancante);
      // aggiorno la funzione dentro lo span che
      //  visulazzia i secondi rimanenti
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
        <span id="timer-label" class="cTimer-label"><p>Seconds</p>${tempoRimanente(
           tempoMancante
        )}<p>Remainig</p> </span>`;
//startTimer();
//
//
//Da qui funziona per le domande
const questions = [
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
         "Central Process Unit",
         "Computer Personal Unit",
         "Central Processor Unit",
      ],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
   },
   {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
   },
   {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
         "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
         "Counter Strike: Source",
         "Corrective Style Sheet",
         "Computer Style Sheet",
      ],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
   },
   {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
   },
];

const arrayType = [];

const arrayQuestion = [];

for (let i = 0; i < questions.length; i++) {
   const QuestionPush = questions[i].question;
   const typePush = questions[i].type;

   //  const answers = questions[i].incorrect_answers.push(
   //     questions[i].correct_answer
   //  );

   //  ***********************************************
   //  const answers = [
   //     ...questions[i].incorrect_answers,
   //     questions[i].correct_answer,
   //  ];

   //  const containerQuestion = document.getElementById("question-container");
   //  const questionP = document.createElement("p");
   //  questionP.innerHTML = QuestionPush;

   //  let listOfAnswers = document.getElementById("answers");

   question.textContent = questions[domandaCorrente].question;
   ans.innerHTML = "";
   for (let i = 0; i < questions[domandaCorrente].answer.length; i++) {
      const sceltaDiv = document.createElement("div");
      const scelta = document.createElement("input");
      const etichetta = document.createElement("label");

      scelta.type = "radio";
      scelta.name = "answer";
      scelta.value = i;
      scelta.setAttribute("onclick", "check()");
      scelta.setAttribute("id", i);
      etichetta.setAttribute("for", i);
      etichetta.classList.add("forCss");
      etichetta.textContent = questions[domandaCorrente].answer[i].testo;

      sceltaDiv.appendChild(scelta);
      sceltaDiv.appendChild(etichetta);
      ans.appendChild(sceltaDiv);
      if (i !== 0) {
         resetTimer();
      }
      cont.innerHTML = `<p>QUESTION  ${domandaCorrente + 1}</p><p id="cont">/ ${
         questions.length
      }</p>`;
   }
}
const start = function () {
   startTimer();
   displayQuestion();
};
const calcolaPunteggio = function () {
   const totalScore = document.getElementById("score");
   totalScore.textContent = `il tuo punteggio è ${punteggio}`;
};
const prossimaDomanda = function () {
   if (domandaCorrente < questions.length - 1) {
      domandaCorrente++;
      displayQuestion();
   } else {
      document.getElementById("answer-container").remove();
      document.getElementById("question-container").remove();

      let countAsString = punteggio.toString();
      console.log(countAsString);

      location.assign(`results.html?score=${countAsString}`);
      //calcolaPunteggio();
   }
};

const check = function () {
   const rispostaSelezionata = parseInt(
      document.querySelector('input[name="answer"]:checked').value
   );

   if (questions[domandaCorrente].answer[rispostaSelezionata].corretto) {
      punteggio = punteggio += 1;
      console.log("corretto");
      console.log(punteggio);
      prossimaDomanda();
   } else {
      prossimaDomanda();
   }
};
//displayQuestion();
start();
