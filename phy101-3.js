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
  "id": 0,
  "question": "Which of the following equation is dimensionally correct, M, L and T represent the dimension of mass, length and time.",
  "options": [
    "v³= 2ax²",
    "F= mvx",
    "v = at",
    "x = ut² + 1/2at²"
  ],
  "correct": ""
},
{
  "id": 1, 
  "question": "The position of an object moving in a straight line is x=3t-4t²+t³ where x is in meters and t is in seconds. Determine the instantaneous acceleration at t= 2seconds.",
  "options": [
    "4 m/s²",
    "4m/s",
    "3 m/s²",
    "7 m/s²"
  ],
  "correct": "4 m/s²"
},
{
  "id": 2,
  "question": "Particles of mass 4kg and 2kg are connected by a light string passing over a smooth fixed pulley. The particles hang freely and are released from rest. Find the acceleration of the two particles.",
  "options": [
    "3.00m/s",
    "3.27m/s2",
    "26.14m/s2", 
    "327m/s2"
  ],
  "correct": "3.27m/s2"
},
{
  "id": 3,
  "question": "Find the scalar product of vector p=7i-3j+ 2k and q = 4i+5j-3k.",
  "options": [
    "6",
    "8",
    "7",
    "13 38"
  ],
  "correct": "7"
},
{
  "id": 4,
  "question": "A body of mass 2kg lies on a rough plane which is inclined at 230 to the horizontal. A force of 20N is applied to the body parallel to and up the plane, if the body accelerates up the plane at 1.5m/s, find the coefficient of friction between the body and the plane.",
  "options": [
    "0.43",
    "0.42",
    "0.52",
    "0.62"
  ],
  "correct": "0.42"
},
{
  "id": 5,
  "question": "Calculate the angle between vector a= -i + 2j-2k and b = 3i + 4j- 2k.",
  "options": [
    "56.14°",
    "50.14°",
    "57.14°",
    "46.14°"
  ],
  "correct": "57.14°"
},
{
  "id": 6,
  "question": "Two bodies of mass 4kg and 3kg moving with a velocity 3m/s and 2m/s collide on a surface and the 4kg mass move with a velocity of 2.5m/s after impact. What is the speed of the lighter body after impact?",
  "options": [
    "18.00m/s",
    "3.33m/s",
    "6.00m/s",
    "2.67m/s"
  ],
  "correct": "2.67m/s"
},
{
  "id": 7,
  "question": "A movie stunt man wishes to drop from a freeway overpass and land on the roof of a speeding truck passing beneath him. The distance he will fall from rest to the roof of the truck is 12m and the truck is moving 80km/h. what horizontal distance away should the truck be when the stunt man jump?",
  "options": [
    "34.8m",
    "33.8m",
    "35.8m",
    "33.8m"
  ],
  "correct": "34.8m"
},
{
  "id": 8,
  "question": "What minimum horse power is needed to lift an 80kg man at a constant speed of 0.20 m/s?",
  "options": [
    "157W",
    "167W",
    "1570W",
    "160W"
  ],
  "correct": "157W"
},
{
  "id": 9,
  "question": "A body of mass 4kg decreases is kinetic energy by 32J. If initially it had a speed of 5 m/s, find its final speed.",
  "options": [
    "3 m/s",
    "6 m/s", 
    "4 m/s",
    "5 m/s"
  ],
  "correct": "3 m/s"
},
{
  "id": 10,
  "question": "A student stand on a scale in an elevator, if the scale reads 640N when the elevator is stationary, what will it read when the elevator is moving upward with a constant speed?",
  "options": [
    "768N",
    "512N",
    "640N",
    "128N"
  ],
  "correct": "640N"
},
{
  "id": 11,
  "question": "Which of the following is a non-conservative force?",
  "options": [
    "Gravitational force",
    "Tension",
    "Friction",
    "Momentum"
  ],
  "correct": "Friction"
},
{
  "id": 12,
  "question": "An object is thrown forward from the top of a cliff 20m high with horizontal velocity of 15m/s. What is the horizontal distance covered by the object from the bottom of the cliff?",
  "options": [
    "60m",
    "30m",
    "20m",
    "40m"
  ],
  "correct": "30m"
},
{
  "id": 13,
  "question": "A horizontal force pulls a body of mass 5kg a distance of 8m across a rough horizontal surface with coefficient of friction 0.25. The body moves with uniform velocity and the only resisting force is that due to friction. Find the work done.",
  "options": [
    "3921J",
    "98J",
    "88J",
    "12J"
  ],
  "correct": "98J"
},
{
  "id": 14,
  "question": "A box of mass 5kg is lowered vertically by a rope. Find the force in the rope when the box is lowered with an acceleration of 4m/s.",
  "options": [
    "69N",
    "20N",
    "49N",
    "29N"
  ],
  "correct": "29N"
},
{
  "id": 15,
  "question": "Which of the following quantity is dimensionless?",
  "options": [
    "stress",
    "strain",
    "frequency",
    "young modulus"
  ],
  "correct": "strain"
},
{
  "id": 16,
  "question": "The rotational kinetic energy of a body is given by",
  "options": [
    "½mv²",
    "½mr²",
    "½Iw²",
    "½Fr²"
  ],
  "correct": "½Iw²"
},
{
  "id": 17,
  "question": "Which of the following explain how the work done by the resultant force on an object changes the motion of the object.",
  "options": [
    "kinetic energy",
    "resistant energy",
    "conservation energy",
    "work-energy theorem"
  ],
  "correct": "work-energy theorem"
},
{
  "id": 18,
  "question": "Given two displacements of magnitudes 4m and 5m, find the magnitude of the total displacement if they are in the same direction.",
  "options": [
    "1.0m",
    "6.4m",
    "9.0m",
    "4.0m"
  ],
  "correct": "9.0m"
},

{
  "id": 19,
  "question": "If vector A has magnitude 4 and is inclined at 30°above the positive x-axis and vector B has magnitude 2 and is inclined at 55° above the positive x-axis. Find the resultant.",
  "options": [
    "58.7",
    "5.87",
    "5.00",
    "6.87"
  ],
  "correct": "5.87"
},
{
  "id": 20,
  "question": "Point A is 4m vertically above point B. A 0.2kg body is projected from A vertically downward with speed 3m/s. Find the speed of the body when it reaches B.",
  "options": [
    "9.35m/s",
    "87.4m/s",
    "7.84m/s",
    "8.74m/s"
  ],
  "correct": "9.35m/s"
},
{
  "id": 21,
  "question": "Two unlike forces of equal magnitude not acting along the same line are said to form a",
  "options": [
    "Torque",
    "Couple",
    "Moment",
    "Centripetal"
  ],
  "correct": "Couple"
},
{
  "id": 22,
  "question": "The speed required for an object to escape completely from the earth and never to return is",
  "options": [
    "Escape potential",
    "Angular speed", 
    "Escape velocity",
    "Gravitational speed"
  ],
  "correct": "Escape velocity"
},
{
  "id": 23,
  "question": "The force of gravity which acts on the objects is",
  "options": [
    "Weight",
    "Mass",
    "Tension",
    "Gravitational force"
  ],
  "correct": "Gravitational force"
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
            timerDisplay()
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





