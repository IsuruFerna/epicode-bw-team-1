console.log("ciao");

const circleProgress = document.getElementById("progress");
circleProgress.innerHTML = `
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
        <span id="timer-label" class="cTimer-label"><p>Seconds</p> 8% <p>Remainig</p> </span>
        `;

const FULL_DASH_ARRAY = 220;
const inputValue = 10;
const percent = (FULL_DASH_ARRAY / 100) * inputValue;
// const strokeDashArray = 2 * Math.PI * radius;
document.getElementById("timer-path").setAttribute("stroke-dasharray", percent);
