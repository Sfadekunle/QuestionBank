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
{
  "id": "0",
  "question": "Which of this formula represents Young Modulus?",
  "options": ["(F/A)/(e/L)", "(F/g)/(e/L)", "(e/L)/(F/A)", "(F/k)/(e/L)"],
  "correct": "(F/A)/(e/L)"
},
{
  "id": "1",
  "question": "Which of this formulas represents Hooke’s law?",
  "options": ["F = mg", "K = F/E", "F = ma", "F = ka"],
  "correct": "K = F/E"
},
{
  "id": "2",
  "question": "Spring A of force constant 6Nm^-1 is connected in series with a spring B of force constant 3Nm^-1. One end of the combination is securely anchored and a force of 0.6N is applied to the other end. How much does spring B extend?",
  "options": ["0.6m", "0.1m", "0.8m", "0.2m"],
  "correct": "0.2m"
},
{
  "id": "3",
  "question": "Spring A of force constant 6Nm^-1 is connected in series with a spring B of force constant 3Nm^-1. One end of the combination is securely anchored and a force of 0.6N is applied to the other end. What is the force constant of the combination?",
  "options": ["2Nm^-1", "4Nm^-1", "6Nm^-1", "8Nm^-1"],
  "correct": "2Nm^-1"
},
{
  "id": "4",
  "question": "Which of the following basic assumptions of the molecular model of matter is True?",
  "options": ["I & III", "I, III & IV", "IV", "All of the above"],
  "correct": "All of the above"
},
{
  "id": "5",
  "question": "Water flows through a garden hole of inside diameter 2cm at a speed of 1.2m/s. At what speed will it emerge from a nozzle of diameter 0.5cm?",
  "options": ["13.2m/s", "10.2m/s", "16.5m/s", "7.5m/s"],
  "correct": "13.2m/s"
},
{
  "id": "6",
  "question": "A pipe of internal diameter 0.04m is joined to another pipe of internal diameter 0.05m. If the resultant and pipe is 4 x 10^-3 m³/s , find the pressure drop between the two pipes.",
  "options": ["2.98 x 10^3Pa", "1.76 x 10^3Pa", "2.98 x 10^6Pa", "1.76 x 10^6Pa"],
  "correct": "2.98 x 10^3Pa"
},
{
  "id": "7",
  "question": "A student observers that 0.24m³ of water flows out of an horizontal pipe in 1min. If the internals diameter of the pipe is 0.05m , calculate the speed of water in the pipe.",
  "options": ["6m/s", "4m/s", "2m/s", "1m/s"],
  "correct": "2m/s"
},
{
  "id": "8",
  "question": "Which of the following have the same unit?",
  "options": ["Young modulus and force", "Stress and Strain", "Stress and pressure", "Bulk modules and Young Modulus"],
  "correct": "Stress and pressure"
},
{
  "id": "9",
  "question": "Which of the following correctly represents pressure?",
  "options": ["P = pgh", "P = F/piR²", "none of the above", "all of the above"],
  "correct": "all of the above"
},
{
  "id": "10",
  "question": "Which of the following uses the principle of flotation to measure relative density?",
  "options": ["Hygrometer", "Barometer", "Hydrometer", "Thermometer"],
  "correct": "Hydrometer"
},
{
  "id": "11",
  "question": "Convert -40 °F to °C",
  "options": ["233°C", "-40°C", "273°C", "303°C"],
  "correct": "-40°C"
},
{
  "id": "12",
  "question": "98°C to °F",
  "options": ["371°F", "303°F", "256°F", "208°F"],
  "correct": "208°F"
},
{
  "id": "13",
  "question": "77°C to Kelvin",
  "options": ["350K", "303K", "196K", "273K"],
  "correct": "350K"
},
{
  "id": "14",
  "question": "What is the value for Absolute zero?",
  "options": ["0K", "-273K", "323K", "273K"],
  "correct": "-273K"
},
{
  "id": "15",
  "question": "55K to °C",
  "options": ["328°C", "218°C", "235°C", "202°C"],
  "correct": "218°C"
},
{
  "id": "16",
  "question": "What is the diameter of a rivet at 23°C? (linear expansivity for Aluminium= 2.4 x 10^-5 °C^-1)",
  "options": ["4.21mm", "6.72mm", "3.21mm", "7.4mm"],
  "correct": "3.21mm"
},
{
  "id": "17",
  "question": "The gas tank of truck is filled with 25 gallons at 23°C. After sitting in the sun all day, the temperature of the gasoline and the steel tank rose to about 35°C. The Co-efficient of volume expansion for gasoline is 9.6 x 10^-5 °C^-1 and that of steel is 1.1 x 10^5 °C^-1. Some gas overflowed out of the tank to the ground. How much gas overflowed under this condition?",
  "options": ["0.28 gallons", "3.0 gallons", "1 gallon", "0.46 gallons"],
  "correct": "0.28 gallons"
},
{
  "id": "18",
  "question": "A brass sleeve of inside diameter 1.9995cm at 20°C is to be heated so that it will just barely slide over a shaft of diameter 2.0005cm. To what temperature must the sleeve be heated? (Linear expansivity for Brass = 1.9 x 10^-6 °C^-1)",
  "options": ["273°C", "263°C", "293°C", "283°C"],
  "correct": "263°C"
},
{
  "id": "20",
  "question": "The resistance Rt of a platinum wire at temperature t°C, measured on the gas scale is given by RT = R(1 + at + bt²) where a = 3.800 x 10^-3 and b = 5.6 x 10^-7. What is the temperature with the platinum thermometer indicate when the temperature on the scale is 200°C?",
  "options": ["200", "197", "89", "247"],
  "correct": "197"
},
{
  "id": "21",
  "question": "The resistance Rt of platinum varies with the temperature t°C on the ideal gas scale is given by Rt = Ro(1+ AT + BT²) where Ro is the resistance at 0°C and A and B are constants such that A = -6.50 x 10^3B, what will be the temperature on the scale of the resistance Wthermometer when t= 50.0°C ?",
  "options": ["50.4°C", "74.5°C", "30.1°C", "40°C"],
  "correct": "50.4°C"
},
{
  "id": "22",
  "question": "The resistance Rt for a platinum wire at temperature t°C measured on the gas scale is given by RT = Ro(1 +at + bt²) where a = 4 x 10^-3 and b = -6.0 x 10^-7. What temperature will the platinum thermometer indicate when the temperature on the gas scale is 300°C?",
  "options": ["280°C", "309°C", "240°C", "10°C"],
  "correct": "309°C"
},
{
  "id": "23",
  "question": "Which of the following statement is true?",
  "options": ["The molecules of liquid are closed together", "The force between gases are very strong", "Molecules in liquid vibrates about their mean positions", "Solid does not have a fixed shape."],
  "correct": "The molecules of liquid are closed together"
},
{
  "id": "24",
  "question": "Crystalline solids are solids that?",
  "options": ["Are randomly arranged over a short distance", "Are arranged in a fixed repetitive manner over a short distance", "Are arranged in a fixed repetitive manner over a large distance", "None of the above"],
  "correct": "Are arranged in a fixed repetitive manner over a large distance"
},
{
  "id": "25",
  "question": "The study of fluids at rest is called?",
  "options": ["Homeostasis", "Hydrostatics", "Stationometric", "Fluid dynamics"],
  "correct": "Hydrostatics"
},
{
  "id": "26",
  "question": "Which of the following is true about viscosity?",
  "options": ["It is independent of temperature", "It is the internal friction that occurs in solids", "It does not oppose the motion of fluid", "It is dependent on temperature"],
  "correct": "It is dependent on temperature"
},
{
  "id": "27",
  "question": "The ability for a material to resist change in its volume or ratio of volume stress to volume strain is called?",
  "options": ["Young modulus", "Bulk modulus", "Shear modulus", "Lift modulus"],
  "correct": "Bulk modulus"
},
{
  "id": "28",
  "question": "An ideal fluid is ?",
  "options": ["Non viscous", "Flow steady", "Incompressible", "All of the above"],
  "correct": "Flow steady"
},
{
  "id": "29",
  "question": "Viscosity is ?",
  "options": ["Free flow of liquids", "Friction within solid materials", "Internal friction in a fluid", "None of the above"],
  "correct": "Internal friction in a fluid"
}

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
    count = 20 *90;
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


