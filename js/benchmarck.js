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
        <span id="timer-label" class="cTimer-label">
        ${tempoRimanente(tempoMancante)} </span>`;

startTimer();

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

   //  answers.forEach((element) => {
   //     console.log("these are answers: ", element);
   //     const li = document.createElement("li");
   //     li.innerHTML = element;
   //     listOfAnswers.append(li);
   //  });

   //  containerQuestion.append(questionP);

   // console.log("question: ", QuestionPush);
   // console.log("answers: ", answers);
   //  ***********************************************

   // arrayQuestion.push(QuestionPush);
   // arrayType.push(typePush);
}
console.log(arrayType);
console.log(arrayQuestion);

// arrayQuestion.forEach = (current) => {
//    if (arrayType[i].type === "multiple") {
//       document.getElementById(
//          "question-container"
//       ).innerHTML = `<h1>${arrayType[i].question}</h1>`;
//    }
// };
// console.log(arrayQuestion);

// const createButton = function (n) {
//    const answerValue = n.shift();
//    if (answerValue === "multiple") {
//       document.getElementById(
//          "button-conteiner"
//       ).innerHTML = `<div><button type="radio">rispondi qui</button>
//     `;
//    }
// };
