//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let backBtn = document.querySelector("#back-button")
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 20;
let countdown;

//Questions and Options array

const quizArray = [


{ id: "1", 
    question: "The three types of stress and strain are?", 
    options: ["Bulk modulus, young modules, and shear modulus", "Deformation, strength, and rigidity", "Volume, rigidity, and tensile", "Extension, deformation, and tensile"], 
    correct: "Extension, deformation, and tensile" },

{ id: "2", 
    question: "The maximum efficiency of an engine that operates between two reservoirs at temperature 25°C and 40°C is?", 
    options: ["5.99%", "5.8%", "6.4%", "4.79%"], 
    correct: "6.4%" },

{ id: "3", 
    question: "The ionization of gases can be increased through the following processes except?", 
    options: ["Heating the gases to a very high temperature", "Collision or the gases with fast-moving charge particles", "The chemical interaction between the molecules of the gases", "Exposing the gases to electromagnetic radiation of high energy"],
    correct: "The chemical interaction between the molecules of the gases" },

{ id: "4", 
    question: "The pressure on the floor due to the magnet is?", 
    options: ["40 x 10^5 N/m^2", "31.5 x 10^5 N/m^2", "43.3 x 10^5 N/m^2", "3.15 x 10^5 N/m^2"],
    correct: "3.15 x 10^5 N/m^2" },

{ id: "5", 
    question: "At what depth below the surface of oil or relative density 0.8 would a pressure of 120 kN/m be developed?",
    options: ["1.223 m", "122.3 m", "0.123 m", "12.23 m"], 
    correct: "12.23 m" },

{ id: "6", 
    question: "Which of the following is the sole cause of intermolecular forces in nature?", 
    options: ["Gravitational force", "Atomic force", "Molecular force", "Electromagnetic force"], 
    correct: "Electromagnetic force" },

{ id: "7", 
    question: "In an experiment, the apparent weight of a body immersed in a fluid is determined by?",
    options: ["Pascal’s principle", "The real weight minus the buoyant force", "The net downward force", "None of the above"], 
    correct: "The real weight minus the buoyant force" },

{ id: "8", 
    question: "How large a force does the still air in a room exert on the inside of a window pane that is 40 cm x 80 cm in dimension?",
    options: ["0.32 x 10^4", "32", "3.2 x 10^4", "3.2 N"],
    correct: "3.2 x 10^4" },

{ id: "9", 
    question: "Water flowing with a velocity of 2 m/s in a pipe 4 cm in cross-section enters a short section of another new pipe 1 cm in area. What is the velocity in this new pipe?",
    options: ["8 m/s", "4 m/s", "6 m/s", "5 m/s"], 
    correct: "8 m/s" },

{ id: "10", 
    question: "The aorta in a human has a diameter of 3.6 cm, while the average systolic blood velocity is 90 cm/s. Determine the Reynolds number if the coefficient of viscosity is 4.5 x 10^-3 kg/m.s.", 
    options: ["8100", "7200", "9300", "6500"],
    correct: "7200" },

{ id: "11", 
    question: "The formula for Reynolds number is?", 
    options: ["ρUL/μ", "UL/ν", "ρU/μL", "U/ρLμ"],
    correct: "ρUL/μ" },

{ id: "12", 
    question: "The surface tension of water is at its minimum value at?", 
    options: ["4°C", "25°C", "50°C", "70°C"], 
    correct: "70°C" },

{ id: "13", 
    question: "The force necessary to pull a circular plate from a water surface is?", 
    options: ["3 N", "60 N", "75 N", "75π N"], 
    correct: "75π N" },

{ id: "14", 
    question: "The spherical shape of a raindrop is due to?", 
    options: ["Density of liquid", "Surface tension", "Atmospheric pressure", "Gravity"],
    correct: "Surface tension" },

{ id: "15", 
    question: "A flow is said to be incompressible if the fluid density is?", 
    options: ["Constant", "Increasing", "Decreasing", "Changing with time"],
    correct: "Constant" },

{ id: "16", 
    question: "The average kinetic energy of one molecule of an ideal gas at room temperature 27°C is?", 
    options: ["3.4 x 10^-21 J", "6.21 x 10^-21 J", "7.4 x 10^-21 J", "4.5 x 10^-21 J"],
    correct: "6.21 x 10^-21 J" },

{ id: "17", 
    question: "A 2 liter flask is used to store oxygen at a gauge pressure of 10 atm and a temperature of 300 K. If the molecular weight of oxygen is 32 kg/K.mol, what is the mass of oxygen in the flask?", 
    options: ["24.5 g", "56 g", "76 g", "27.5 g"], 
    correct: "27.5 g" },

{ id: "18", 
    question: "An ideal gas occupies a volume of 1 liter at 1 atm and -50°C. What is the volume occupied when it is compressed to 3 atm at a temperature of 30°C?",
    options: ["0.45 L", "1.5 L", "6 L", "7.5 L"], 
    correct: "0.45 L" },

{ id: "19", 
    question: "The root-mean-square speed of an oxygen molecule at 0°C is?",
    options: ["643.3 m/s", "576.4 m/s", "462.2 m/s", "788 m/s"],
    correct: "462.2 m/s" },

{ id: "20", 
    question: "The change in internal energy when 50 g of ice is melted at the same temperature is?", 
    options: ["6.62 x 10^4 J", "7.32 x 10^4 J", "6.62 x 10^4 J", "1.68 x 10^4 J"], 
    correct: "1.68 x 10^4 J" },

{ id: "21", 
    question: "The total power radiated by the sun is?", 
    options: ["9.48 x 10^26 W", "8.36 x 10^26 W", "5.32 x 10^26 W", "8.52 x 10^26 W"], 
    correct: "9.48 x 10^26 W" },

{ id: "22", 
    question: "The rate of radiant emission per m^2 from a blackbody at 25°C is?", 
    options: ["395.5 W", "54.8 W", "65 W", "75 W"],
    correct: "395.5 W" },

{ id: "23", 
    question: "What enables a teacher to write on the blackboard with chalk?",
    options: ["Gravity", "Cohesion", "Adhesion", "None of the above"],
    correct: "Adhesion" },

{ id: "24", 
    question: "How much heat is lost by a human body per day from evaporation if the average perspiration loss is 30 g/hr and the heat of vaporization at body temperature is 540 cal/g?",
    options: ["1.63 x 10^6 J", "13.4 x 10^6 J", "9.4 x 10^-6 J", "1.4 x 10^6 J"], 
    correct: "1.63 x 10^6 J" },

{ id: "25", 
    question: "When the fluid velocity at a given location is independent of time, then the fluid is said to be in?",
    options: ["Steady flow", "Circular flow", "Turbulent flow", "Constant density"],
    correct: "Steady flow" },

{ id: "26", 
    question: "Exactly 250 ml of fluid flows out of a tube whose inner diameter is 7.0 mm in a time of 4 s. What is the average speed of the fluid in the tube?",
    options: ["0.16 m/s", "2.6 m/s", "1.6 m/s", "16 m/s"], 
    correct: "1.6 m/s" },

{ id: "27", 
    question: "A combination of liquid and gases which alter their shape in response to an applied force is known as?", 
    options: ["Liquid", "Specific gravity", "Fluids", "Matter"],
    correct: "Fluids" },

{ id: "28", 
    question: "A metal wire 75 cm long and 0.13 cm in diameter stretches 0.035 cm when a load of 8 kg is hung on its end. Calculate the stress.", 
    options: ["5.9 x 10^7 Pa", "6.7 x 10^7 Pa", "5.5 x 10^7 Pa", "7.1 x 10^7 Pa"], correct: "5.9 x 10^7 Pa" },

{ id: "29", 
    question: "0°C is equivalent to?", 
    options: ["273 K", "-273 K", "274 K", "275 K"], 
    correct: "-273 K" },

{ id: "30", 
    question: "If the pressure of an ideal gas is doubled while its volume is kept constant, the temperature of the gas will?",
    options: ["Double", "Halve", "Remain the same", "Increase by 25%"], 
    correct: "Double" }





];




//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    
});



//Next Button

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
            
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            clearInterval(countdown);
            timerDisplay();
            checkAnswer()
            
        }
    })
);

 //Change next to submit 
  function changeBtn(){
    if(questionCount == quizArray.length -1){
      nextBtn.textContent = "Submit"; 
    }else{
        nextBtn.textContent = "Next";
    }
 
  }
  nextBtn.addEventListener(
    "click",changeBtn)

backBtn.addEventListener(
    "click",changeBtn)

//back button
backBtn.addEventListener(
"click", displayPrevious = () =>{
    
    if(questionCount >0){
        questionCount -= 1;
        countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
          quizDisplay(questionCount);
    }
    
}

)



//Timer

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${Math.floor(count / 60)}:${count % 60}s`;
        if (count == 0) {
            
            clearInterval(countdown)
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
             
            //user score
            userScore.innerHTML =
                "Your score is " +scoreCount+ " out of " + quizArray.length;
            
            
        }
        
        
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};



    //Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
      
//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    } 
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count =20 * 90;
    clearInterval(countdown);
    timerDisplay()
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};








