/*-------------------------------- Constants --------------------------------*/
// Game Data
const game = {
    levels: [
  {
    level: 1,
    question: "UNIT OPERATION FOR SEPARATION",
    options: ["Distillation", "Reaction", "Polymerization", "Combustion"],
    correctAnswer: ["Distillation"],
    time: 15
  },
  {
    level: 2,
    question: "HEAT TRANSFER MODES",
    options: ["Conduction", "Convection", "Radiation", "Diffusion"],
    correctAnswer: ["Conduction", "Convection", "Radiation"],
    time: 15
  },
  {
    level: 3,
    question: "MASS TRANSFER OPERATION",
    options: ["Absorption", "Crystallization", "Filtration", "Combustion"],
    correctAnswer: ["Absorption"],
    time: 14
  },
  {
    level: 4,
    question: "FLUID FLOW EQUIPMENT",
    options: ["Pump", "Reactor", "Heat Exchanger", "Column"],
    correctAnswer: ["Pump"],
    time: 14
  },
  {
    level: 5,
    question: "TYPE OF REACTOR",
    options: ["CSTR", "PFR", "Batch", "Separator"],
    correctAnswer: ["CSTR", "PFR", "Batch"],
    time: 14
  },
  {
    level: 6,
    question: "DISTILLATION COLUMN PART",
    options: ["Reboiler", "Condenser", "Pump", "Filter"],
    correctAnswer: ["Reboiler", "Condenser"],
    time: 13
  },
  {
    level: 7,
    question: "THERMODYNAMICS PROPERTY",
    options: ["Enthalpy", "Entropy", "Velocity", "Pressure"],
    correctAnswer: ["Enthalpy", "Entropy", "Pressure"],
    time: 13
  },
  {
    level: 8,
    question: "UNIT FOR PRESSURE",
    options: ["Pa", "bar", "Joule", "atm"],
    correctAnswer: ["Pa", "bar", "atm"],
    time: 13
  },
  {
    level: 9,
    question: "SEPARATION TECHNIQUE",
    options: ["Filtration", "Distillation", "Reaction", "Mixing"],
    correctAnswer: ["Filtration", "Distillation"],
    time: 12
  },
  {
    level: 10,
    question: "ENERGY BALANCE USES",
    options: ["Heat", "Work", "Mass", "Energy"],
    correctAnswer: ["Heat", "Work", "Energy"],
    time: 12
  },

  {
    level: 11,
    question: "FLUID PROPERTY",
    options: ["Viscosity", "Density", "Velocity", "Color"],
    correctAnswer: ["Viscosity", "Density"],
    time: 12
  },
  {
    level: 12,
    question: "HEAT EXCHANGER TYPE",
    options: ["Shell & Tube", "Plate", "Reactor", "Tank"],
    correctAnswer: ["Shell & Tube", "Plate"],
    time: 11
  },
  {
    level: 13,
    question: "MASS BALANCE BASIS",
    options: ["Input", "Output", "Generation", "Heat"],
    correctAnswer: ["Input", "Output", "Generation"],
    time: 11
  },
  {
    level: 14,
    question: "FLOW REGIME",
    options: ["Laminar", "Turbulent", "Static", "Random"],
    correctAnswer: ["Laminar", "Turbulent"],
    time: 11
  },
  {
    level: 15,
    question: "REACTOR DESIGN VARIABLE",
    options: ["Temperature", "Pressure", "Color", "Residence Time"],
    correctAnswer: ["Temperature", "Pressure", "Residence Time"],
    time: 11
  },
  {
    level: 16,
    question: "PROCESS SAFETY DEVICE",
    options: ["Relief Valve", "Pump", "Filter", "Reactor"],
    correctAnswer: ["Relief Valve"],
    time: 10
  },
  {
    level: 17,
    question: "THERMODYNAMICS LAW",
    options: ["First Law", "Second Law", "Ohm’s Law", "Newton’s Law"],
    correctAnswer: ["First Law", "Second Law"],
    time: 10
  },
  {
    level: 18,
    question: "SEPARATION BASED ON SIZE",
    options: ["Filtration", "Distillation", "Absorption", "Reaction"],
    correctAnswer: ["Filtration"],
    time: 10
  },
  {
    level: 19,
    question: "PROCESS VARIABLE",
    options: ["Temperature", "Pressure", "Flow Rate", "Color"],
    correctAnswer: ["Temperature", "Pressure", "Flow Rate"],
    time: 9
  },
  {
    level: 20,
    question: "CONTROL SYSTEM ELEMENT",
    options: ["Sensor", "Controller", "Actuator", "Reactor"],
    correctAnswer: ["Sensor", "Controller", "Actuator"],
    time: 9
  },

  {
    level: 21,
    question: "UNIT OPERATION",
    options: ["Drying", "Mixing", "Reaction", "Cooling"],
    correctAnswer: ["Drying", "Mixing", "Cooling"],
    time: 9
  },
  {
    level: 22,
    question: "FLOW MEASUREMENT DEVICE",
    options: ["Orifice Meter", "Venturi", "Thermometer", "Pump"],
    correctAnswer: ["Orifice Meter", "Venturi"],
    time: 8
  },
  {
    level: 23,
    question: "REACTION TYPE",
    options: ["Exothermic", "Endothermic", "Isothermal", "Mechanical"],
    correctAnswer: ["Exothermic", "Endothermic"],
    time: 8
  },
  {
    level: 24,
    question: "CHEMICAL ENGINEERING FIELD",
    options: ["Petrochemical", "Biochemical", "Mechanical", "Civil"],
    correctAnswer: ["Petrochemical", "Biochemical"],
    time: 8
  },
  {
    level: 25,
    question: "PROCESS ECONOMICS FACTOR",
    options: ["Cost", "Profit", "Efficiency", "Color"],
    correctAnswer: ["Cost", "Profit", "Efficiency"],
    time: 8
  },
  {
    level: 26,
    question: "HEAT TRANSFER EQUIPMENT",
    options: ["Heat Exchanger", "Boiler", "Condenser", "Filter"],
    correctAnswer: ["Heat Exchanger", "Boiler", "Condenser"],
    time: 7
  },
  {
    level: 27,
    question: "FLUID FLOW LAW",
    options: ["Bernoulli", "Newton", "Fourier", "Fick"],
    correctAnswer: ["Bernoulli"],
    time: 7
  },
  {
    level: 28,
    question: "MASS TRANSFER LAW",
    options: ["Fick", "Fourier", "Ohm", "Bernoulli"],
    correctAnswer: ["Fick"],
    time: 7
  },
  {
    level: 29,
    question: "HEAT TRANSFER LAW",
    options: ["Fourier", "Fick", "Newton", "Bernoulli"],
    correctAnswer: ["Fourier"],
    time: 7
  },
  {
    level: 30,
    question: "PROCESS CONTROL OBJECTIVE",
    options: ["Stability", "Safety", "Efficiency", "Decoration"],
    correctAnswer: ["Stability", "Safety", "Efficiency"],
    time: 7
  },

  {
    level: 31,
    question: "INDUSTRIAL SECTOR",
    options: ["Oil & Gas", "Food", "Textile", "Fashion"],
    correctAnswer: ["Oil & Gas", "Food"],
    time: 6
  },
  {
    level: 32,
    question: "ENERGY SOURCE",
    options: ["Steam", "Electricity", "Solar", "Color"],
    correctAnswer: ["Steam", "Electricity", "Solar"],
    time: 6
  },
  {
    level: 33,
    question: "PROCESS INPUT",
    options: ["Raw Material", "Energy", "Product", "Waste"],
    correctAnswer: ["Raw Material", "Energy"],
    time: 6
  },
  {
    level: 34,
    question: "PROCESS OUTPUT",
    options: ["Product", "Waste", "Energy", "Raw Material"],
    correctAnswer: ["Product", "Waste"],
    time: 6
  },
  {
    level: 35,
    question: "CHEMICAL ENGINEER ROLE",
    options: ["Design", "Operation", "Safety", "Painting"],
    correctAnswer: ["Design", "Operation", "Safety"],
    time: 6
  },
  {
    level: 36,
    question: "RENEWABLE ENERGY",
    options: ["Solar", "Wind", "Coal", "Gas"],
    correctAnswer: ["Solar", "Wind"],
    time: 6
  },
  {
    level: 37,
    question: "PROCESS SCALE",
    options: ["Lab", "Pilot", "Industrial", "Home"],
    correctAnswer: ["Lab", "Pilot", "Industrial"],
    time: 5
  },
  {
    level: 38,
    question: "SAFETY HAZARD",
    options: ["Fire", "Explosion", "Leak", "Decoration"],
    correctAnswer: ["Fire", "Explosion", "Leak"],
    time: 5
  },
  {
    level: 39,
    question: "PROCESS SIMULATION SOFTWARE",
    options: ["Aspen", "HYSYS", "MATLAB", "Photoshop"],
    correctAnswer: ["Aspen", "HYSYS"],
    time: 5
  },
  {
    level: 40,
    question: "CHEMICAL ENGINEERING SKILL",
    options: ["Problem Solving", "Teamwork", "Analysis", "Guessing"],
    correctAnswer: ["Problem Solving", "Teamwork", "Analysis"],
    time: 5
  }
]

};

/*---------------------------- Variables (state) ----------------------------*/
let currentLevel = 0;
let selectedElements = [];
let timer;
let timeLeft;
let animationIntervals = [];

/*------------------------ Cached Element References ------------------------*/
const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");
const gameScreen = document.querySelector("#game-screen");
const levelDisplay = document.querySelector("#level-display");
const questionDisplay = document.querySelector("#question-display");
const optionsContainer = document.querySelector("#options-container");
const resultDisplay = document.querySelector("#result");
const nextLevelBtn = document.querySelector("#next-level-btn");
const timerDisplay = document.querySelector("#timer-display");
const resetButtonEl = document.querySelector("#reset-button");
const instructionsScreen = document.querySelector("#instructions-screen");
const instructionsStartBtn = document.querySelector("#instructions-start-btn");
const gameAudio = new Audio ('../assets/game.mp3')
const clapAudio = new Audio('../assets/clap.wav')
const loseAudio = new Audio('../assets/lose.wav')

/*-------------------------------- Functions --------------------------------*/

// Initialize game
function init() {
    resetGame();
}

// Reset Game Function
function resetGame() {
    currentLevel = 0;
    selectedElements = [];
    stopAllAnimations();
    clearInterval(timer);

    resetButtonEl.classList.add("hidden");
    nextLevelBtn.classList.add("hidden");
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    // instructionsScreen.classList.remove("hidden");
    resultDisplay.textContent = "";
    if (timerDisplay) timerDisplay.textContent = "";
}

// Stop all animations
function stopAllAnimations() {
    animationIntervals.forEach(interval => {
        clearInterval(interval);
    });
    animationIntervals = [];
}

// Load Level
function loadLevel() {
    const level = game.levels[currentLevel];

    if (!level) {
        gameComplete();//the goal is when we complete th levels wa can start again
        return;
    }

    selectedElements = [];
    resultDisplay.textContent = "";
    nextLevelBtn.classList.add("hidden");
    resetButtonEl.classList.add("hidden");

    levelDisplay.textContent = "Level " + level.level;
    questionDisplay.textContent = `What elements make up ${level.question}?`;

    // Render Options
    optionsContainer.innerHTML = "";
    level.options.forEach(element => {
        const btn = document.createElement("button");//creat btn for element
        btn.textContent = element;

        btn.addEventListener("click", () => handleChoice(element, btn));
        btn.style.position = "absolute";

        optionsContainer.appendChild(btn);
        animateButton(btn);//for moving part
    });

    // Start timer
    startTimer(level.time);
}

// Animation function
function animateButton(btn) {
    const area = document.getElementById("options-area");
    const btnWidth = 100;
    const btnHeight = 60;

    const maxX = area.clientWidth - btnWidth;
    const maxY = area.clientHeight - btnHeight;

    const interval = setInterval(() => {
        if (!btn.disabled) {
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }
    }, 1000);

    animationIntervals.push(interval);
}

// Start timer
function startTimer(seconds) {
    timeLeft = seconds;
    updateTimerDisplay();

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    if (timerDisplay) {
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        timerDisplay.style.color = timeLeft <= 3 ? "red" : "white";
    }
}

// Time's up - يرجع للريست تلقائياً
function timeUp() {
    resultDisplay.textContent = "⏰ Time's Up! You lost!";
    resultDisplay.style.color = "#f8f7f7ff";
    
    document.querySelectorAll('#options-container button').forEach(btn => {
        btn.disabled = true;
    });
    resetButtonEl.classList.remove("hidden");
    loseAudio.play()

}

// Handle element choice
function handleChoice(element, btn) {
    if (!selectedElements.includes(element)) {
        selectedElements.push(element);
        btn.style.backgroundColor = "#ff9800";
        btn.disabled = true;
        // Stop animation for this button
        btn.style.transform = "none";
    }

    checkAnswer();
}

// Check answer - إذا أجاب خطأ يرجع للريست
function checkAnswer() {
    const level = game.levels[currentLevel];
    const correct = level.correctAnswer;

    const isCorrect =
        selectedElements.length === correct.length &&
        selectedElements.every(e => correct.includes(e)) &&
        correct.every(e => selectedElements.includes(e));

    if (isCorrect) {
        clearInterval(timer);
        resultDisplay.textContent = "Correct! ✔️";
        resultDisplay.style.color = "#45a348ff";
        nextLevelBtn.classList.remove("hidden");
        clapAudio.play()

        document.querySelectorAll('#options-container button').forEach(btn => {
            btn.disabled = true;
    
        });
    } else if (selectedElements.length >= correct.length) {
        resultDisplay.textContent = "Wrong combination! You lost! ❌";
        resultDisplay.style.color = "#fffbfbff";
        resetButtonEl.classList.remove("hidden");
        loseAudio.play()

    }
}

// Game complete
function gameComplete() {
    resultDisplay.textContent = "Congratulations! You finished all levels!";
    levelDisplay.textContent = "Game Completed!";
    questionDisplay.textContent = "";
    optionsContainer.innerHTML = "";
    if (timerDisplay) timerDisplay.textContent = "";
    nextLevelBtn.classList.add("hidden");
    resetButtonEl.classList.add("hidden");
}

/*----------------------------- Event Listeners -----------------------------*/

// Instructions start
instructionsStartBtn.addEventListener("click", () => {
    instructionsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

// Start game
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    currentLevel = 0;
    gameAudio.play()
    loadLevel();
});

// Reset game
resetButtonEl.addEventListener("click", () => {
    resetGame();
});

// Next level
nextLevelBtn.addEventListener("click", () => {
    currentLevel++;

    if (currentLevel >= game.levels.length) {
        gameComplete();
    } else {
        loadLevel();
    }
});

// Initialize game when loaded
document.addEventListener('DOMContentLoaded', init);
