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
"id": "1",
 "question": "Which of the following is an application of Bernoulli’s principles?",
 "options": ["Venturi meter", "Blood pressure measurement", "None of the above", "All of the above"], 
"correct": "All of the above"},

{
"id": "2",
 "question": "Isochoric indicates?",
 "options": ["Constant temperature", "Constant pressure", "Constant volume", "None of the above"],
 "correct": "Constant volume"},

{
"id": "3", 
"question": "The mattress of a water bed is 2.0m long by 2.0m wide and 30.0cm deep. Find the weight of the water in the mattress and the pressure exerted by the water on the floor when the bed rests in its normal position. Assuming the entire lower surface of the bed makes contact with the floor", 
    "options": ["2.95 x 10^3Pa", "3.5 x 10^3Pa", "2.0 x 10^3Pa", "3.5 x 10^3Pa"], 
"correct": "2.95 x 10^3Pa"},

 {
"id": "4", 
     "question": "As part of a lubricating system for heavy machinery, oil of density 850kg/m^3 is pumped through a cylindrical pipe of diameter 8.0cm at a rate of 9.5liters per second. What is the speed of the oil?", 
     "options": ["2.0m/s", "1.9m/s", "4.0m/s", "0.19m/s"], 
"correct": "1.9m/s"},

 {
"id": "5",
 "question": "As part of a lubricating system for heavy machinery, oil of density 850kg/m^3 is pumped through a cylindrical pipe of diameter 8.0cm at a rate of 9.5liters per second. What is the mass flow rate?", 
"options": ["10.8kg/s", "7.5kg/s", "7.9kg/s", "8.1kg/s"], 
     "correct": "8.1kg/s"},

 {
"id": "6", 
"question": "Which of the following is the correct expression for absolute pressure?", 
"options": ["P = F/A", "P = W/A", "P = Po + pgh", "P = FA"],
 "correct": "P = Po + pgh"},

{
"id": "7",
 "question": "The following is an example of fluid except?", 
"options": ["Liquid", "Solid", "Gas", "None of the above"], 
"correct": "Solid"},


 {
"id": "8", 
"question": "Which of the following is false about pressure?", 
"options": ["The pressure in a fluid at rest is independent of the shape of the container", "Pressure is the same at all points on a horizontal plane in a given fluid", "A change in pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid", "The fluid at rest is dependent on the shape of the container."],
 "correct": "The fluid at rest is dependent on the shape of the container."},

 {
"id": "9",
 "question": "The correct expression for Bernoulli’s equation is",
 "options": ["P + ½pv^2 + pgh = K", "P + ½pv^2 - pgh = K", "P - ½pv^2 + pgh = K", "P - ½pv^2 - pgh = K"],
 "correct": "P + ½pv^2 + pgh = K"},

{
"id": "10",
 "question": "A pipe of internal diameter 0.0020m is joined to another of internal diameter 0.05m. If the resultant pipe is horizontal and the rate of flow in the pipe is 3 x 10^-3m^3s^-1. Find the pressure difference between the two pipes if the fluid flowing through the pipe is water.", 
"options": ["1.7 x 10^3Pa", "2.7 x 10^3Pa", "3.7 x 10^3Pa", "4.7 x 10^3Pa"], 
    "correct": "1.7 x 10^3Pa"
},

{
"id": "11",
 "question": "Water of density 1.0 x 10^3kg/m^3 enters a house through a pipe with an inside diameter of 2.0cm at an absolute pressure of 4.0 x 10^5Pa. A 1.0cm diameter pipe leads to the second floor bathroom 5.0m above. When the flow speed at the inlet pipe is 1.5m/s, find the flow speed.", 
"options": ["3.0m/s", "4.5m/s", "6.0m/s", "7.5m/s"], 
"correct": "6.0m/s"
},

 {
"id": "12", 
"question": "Water of density 1.0 x 10^3kg/m^3 enters a house through a pipe with an inside diameter of 2.0cm at an absolute pressure of 4.0 x 10^5Pa. A 1.0cm diameter pipe leads to the second floor bathroom 5.0m above. When the flow speed at the inlet pipe is 1.5m/s, find the volume flow rate.", 
"options": ["4.5 x 10^-4m^3/s", "4.7 x 10^-4m^3/s", "5.5 x 10^-4m^3/s", "6.5 x 10^-4m^3/s"],
     "correct": "4.7 x 10^-4m^3/s"},

{
"id": "13", 
"question": "A liquid of density 1.65g/cm^3 flows through a horizontal pipe of varying cross-section. In the first section, the cross-sectional area is 10cm^2, the flow speed is 275cm/s, and the pressure is 1.20 x 10^5Pa. In the second section, the cross-sectional area is 2.50cm^2. Calculate the smaller section flow speed.", 
"options": ["5.5m/s", "6.5m/s", "11m/s", "12m/s"], 
    "correct": "11m/s"},

{
"id": "14", 
"question": "A liquid of density 1.65g/cm^3 flows through a horizontal pipe of varying cross-section. In the first section, the cross-sectional area is 10cm^2, the flow speed is 275cm/s, and the pressure is 1.20 x 10^5Pa. In the second section, the cross-sectional area is 2.50cm^2. Calculate the smaller section pressure.", 
"options": ["4.27 x 10^4Pa", "5.27 x 10^4Pa", "6.27 x 10^4Pa", "7.27 x 10^4Pa"], 
"correct": "4.27 x 10^4Pa"},

 {
"id": "15",
     "question": "Isobaric indicates?", 
     "options": ["Constant volume", "Constant pressure", "Constant temperature", "None of the above"], 
     "correct": "Constant pressure"},

{"id": "16",
    "question": "The ability for a material to resist change in its volume is called?", 
    "options": ["Young Modulus", "Shear modulus", "Bulk modulus", "Faraday’s modulus"], 
    "correct": "Bulk modulus"},

{"id": "17", 
    "question": "A condition reached where two bodies are in thermal contact and there is no net transfer of heat from one body to another, it is said to be in?", 
    "options": ["Mechanical equilibrium", "Thermal equilibrium", "Fluid equilibrium", "Contact equilibrium"], 
    "correct": "Thermal equilibrium"},

{
"id": "18",
 "question": "Aluminium rivets used in airplane construction are made slightly larger than the holes into which they fit and then cooled in dry ice to -78°C before being inserted. When they warm up to room temperature 23°C, they fit very tightly. If a rivet at -78°C is to be inserted into a hole of diameter 3.2mm, what is the diameter of the rivet at 23°C?", 
"options": ["3.19mm", "3.20mm", "3.21mm", "3.22mm"],
 "correct": "3.21mm"},

 {
"id": "19", 
"question": "A steel beam is 12m long when installed at 23°C. By how much does its length change when it changes temperature from -32°C to 55°C?",
 "options": ["0.066m", "0.076m", "0.086m", "0.096m"], 
"correct": "0.066m"},

{
"id": "20", 
"question": "A brass sleeve of inside diameter 1.9995cm at 20°C is to be heated so that it will just barely slide over a shaft of diameter 2.0005cm. To what temperature must the sleeve be heated?", 
"options": ["283°C", "293°C", "303°C", "313°C"], 
    "correct": "283°C"},

 {
"id": "21", 
"question": "The correct expression for root mean square speed is",
 "options": ["√(2RT/M)", "√(3RT/M)", "√(4RT/M)", "√(5RT/M)"],
     "correct": "√(3RT/M)"},

{
"id": "22", 
"question": "What is the RMS of a nitrogen (N2) in air at 300K?", 
"options": ["517m/s", "607m/s", "707m/s", "807m/s"], 
"correct": "517m/s"},

 {
"id": "23", 
"question": "Convert 35°F to °C", 
     "options": ["1.67°C", "2.67°C", "3.67°C", "4.67°C"], 
     "correct": "1.67°C"},

 {
"id": "24", 
"question": "Convert 27°C to Kelvin",
 "options": ["300K", "301K", "302K", "303K"], 
"correct": "300K"},

{
"id": "25", 
"question": "A tank contains 1000kg of water at 20°C. How much heat energy is required to raise the temperature of the water to 50°C?", 
"options": ["1.257 x 10^5J", "1.357 x 10^5J", "1.457 x 10^5J", "1.557 x 10^5J"],
    "correct": "1.257 x 10^5J"
},

 {
"id": "26", 
"question": "A pipe with an internal diameter of 0.1m carries oil at a flow rate of 0.05m^3/s. What is the velocity of the oil in the pipe?", 
"options": ["6.37m/s", "7.37m/s", "8.37m/s", "9.37m/s"],
 "correct": "6.37m/s"
},

{
"id": "27", 
"question": "A gas is compressed from 0.5m^3 to 0.2m^3 at a constant pressure of 3 x 10^5Pa. What is the work done on the gas?", 
    "options": ["1.5 x 10^5J", "2.5 x 10^5J", "3.5 x 10^5J", "4.5 x 10^5J"],
 "correct": "1.5 x 10^5J"},

 {
"id": "28", 
"question": "A spring with a force constant of 100N/m is stretched by 0.2m. What is the potential energy stored in the spring?", 
     "options": ["2J", "4J", "6J", "8J"], 
"correct": "2J"},

 {
"id": "29", 
"question": "A copper wire of diameter 0.5mm and length 10m is heated from 20°C to 80°C. What is the change in length of the wire?", 
"options": ["0.034m", "0.044m", "0.054m", "0.064m"], 
"correct": "0.034m"
},
 {
 "id": "30", 
"question": "A liquid flows through a horizontal pipe of diameter 0.1m at a rate of 0.05m^3/s. If the pressure drop along the pipe is 1000Pa, what is the viscosity of the liquid?", 
     "options": ["16mPa·s", "26mPa·s", "36mPa·s", "46mPa·s"], 
"correct": "16mPa·s"
},


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
    count = 20*90;
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














