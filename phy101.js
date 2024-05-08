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
    "question": "Use the scalar product of the two vectors given as A = 2i + 3j – k and B = -i + j -2k to calculate the angle(theta) between them.",
    "options": ["95.3°", "55.6°", "110°", "28.56°"],
    "correct": "95.3°"},

{
"id": "2", 
    "question": "Which of the following is a derived unit?",
    "options": ["Kg", "m", "K", "N"],
    "correct": "N"},

{"id": "3", 
    "question": "The object of masses 60g and 40 kg are separated by a distance of 0.4m. If the gravitational constant is 6.67 x 10^-11 Nm²/Kg². Calculate the gravitational force or attraction between them.", 
    "options": ["1.0005 x 10^-9N", "1.0005 x 10^-6N", "1.0005 x 10^-12N", "3.96 x 10N^-10N"],
    "correct": "1.0005 x 10^-6N"},

{"id":
    "4", "question": "What is the separation distance between the two masses of 10¹²Kg and 10¹³Kg when their gravitational force of attraction is 6.7N?", 
    "options": ["9977km", "9988m", "9978m", "9978km"], 
    "correct": "9978km"},

{"id":"5", 
    "question": "Which of the following is the rotational inertia(I) for a solid sphere about any diameter?", 
    "options": ["2/5MR²", "2/3MR²", "1/2MR²", "1/5MR²"], 
    "correct": "2/5MR²"},

{"id": "6", 
    "question": "A Car moving with velocity of 54Km/h accelerates uniformly at a rate of 2m/s². Calculate the distance S travelled from the place where the acceleration began to the place where the acceleration reaches 72km and the time t given to cover the distance.",
    "options": ["S = 34.75m t= 2sec", "S = 15m t = 5sec", "S = 43.75m t = 2.5 sec", "S = 50km , t = 200sec"], 
    "correct": "S = 43.75m t = 2.5 sec"},

{"id": "7", "question": "Which of the following is not a vector quantity?", 
    "options": ["Force", "Altitude", "Weight", "Displacement"],
    "correct": "Altitude"},

{"id": "8", "question": "The kinetic energy of a rigid body rotating about a fixed axis is given by",
    "options": ["K = ½Iw²", "K =½Imv²", "K = ½I²W", "K= ¹I²mv"],
    "correct": "K = ½Iw²"},

{"id": "9", 
    "question": "Which of the following is a set of vectors?", 
    "options": ["Weight, displacement and moment", "Velocity, volume and thrust", "Density, Capacitance and distance", "Mass, force and impulse"], 
    "correct": "Weight, displacement and moment"},

{"id": "10",
    "question": "The distance travelled by a particle in time t seconds is described by the equation x= 10 + 12r² , find the average speed of the particle between the time interval t = 2sec and t = 5sec.",
    "options": ["60m/s", "72m/s", "84m/s", "105m/s"], 
    "correct": "84m/s"},

{"id": "11",
    "question": "A Car is moving at 100 Km/h. If the mass of the Car is 950 Kg. what is its kinetic energy?", 
    "options": ["4.75 x 10⁶ J", "4.75 x 10 J", "3.67 x 10⁵ J", "3.67 x 10⁷ J"],
    "correct": "3.67 x 10⁵ J"},

{"id": "12",
    "question": "A 0.140 Kg ball is thrown upward with an initial velocity of 35.0 m/s. Estimate the total energy of the ball.",
    "options": ["85.8 J", "2.45 J", "172 J", "4.9 J"], 
    "correct": "85.8 J"},

{
"id": "13", 
    "question": "A boy pushes a toy box 40 cm long along the floor by means of a force of 6 N directed downward at an angle 40° to the horizontal. How much work does the boy do?", 
    "options": ["1.54 J", "1.84 J", "184 J", "154 J"],
    "correct": "1.84 J"},

{"id": "14", 
    "question": "Newton’s laws of motion are the same in all inertial frames of reference. The statement above justifies the principle of", 
    "options": ["Newton’s second law", "Kepler’s laws", "Newton’s law of Gravitation", "Galilean invariance"],
    "correct": "Galilean invariance"},

{"id": "15", 
    "question": "A body of mass 2kg is suspended from the ceiling of a lift with a light inextensible string. If the lift moves upwards with acceleration of 2m/s², calculate the magnitude of the tension in the string.", 
    "options": ["0N", "20N", "24N", "4N"], 
    "correct": "24N"},

{"id":
    "16", "question": "The magnitude of the force required to make an object of mass M move with speed v in a circular path of Mass M move with speed V in a circular path of radius R is", 
    "options": ["Mv²/R", "MR/V", "(MR)²/V", "MV/R²"], 
    "correct": "Mv²/R"},

{"id": "17",
    "question": "Particles of mass 4Kg and 2kg are connected by a Light string passing over a smooth fixed pulley. The Particles hang freely and are released from rest. What is the acceleration of the two particles?",
    "options": ["3.27m/s'", "3.27cm/s", "32.7m/s", "3.27m/s"], 
    "correct": "3.27m/s'"},

{"id": "18",
    "question": "What is the tension in the string in question 23?",
    "options": ["261.4N", "26.14N", "13.07N", "260N"],
    "correct": "26.14N"},

{"id": "19", 
    "question": "Which of the following statements about elastic collision is correct?", 
    "options": ["Both kinetic energy and momentum are conserved", "Kinetic energy is lost while momentum is conserved", "Loss in momentum is equal to loss in kinetic Energy", "Momentum is lost due to the sound produced"],
    "correct": "Both kinetic energy and momentum are conserved"},

{"id": "20",
    "question": "A horizontal rod of mass 8 kg and length 2.4m isHinged to a wall and supported by a cable that makes an angle of 25. What is the tension T on the cable?",
    "options": ["92.15 N", "83.33 N", "17.40 N", "45.43 N"],
    "correct": "83.33 N"},

{"id": "21",
    "question": "Find the angle between the position and momenturn vectors of the particle with r = (1.-2,3) and P= (7.-1,1).", 
    "options": ["63.4°", "47.2°", "90.0°", "45.0°"],
    "correct": "63.4°"},

{"id": "22", 
    "question": "A 500kg car which was initially at rest travelled with an acceleration of 5m/s², its kinetic energy after 4seconds was", 
    "options": ["10⁵", "2.5 x 10³", "2 x 10³", "5 x10³"], 
    "correct": "2 x 10³"},

{"id": "23", 
    "question": "A ball of mass 0.5kg moving at 10m/s collides with another ball of equal mass at rest. If the two balls move off together after impact. What is their common velocity?", "options": ["10m/s", "5m/s", "20m/s", "25m/s"], "correct": "5m/s"},

{"id": "24", "question": "A body of mass 5kg falls from a height of 10m above the ground. What is the kinetic energy of the body just before it strikes the ground?",
    "options": ["5J", "25J", "490J", "325J"], "correct": "490J"},

{
"id": "25", "question": "A force of 20N applied parallel to the surface of a horizontal table is just sufficient to make a block of mass 4kg move on the table. Calculate the coefficient of friction between the block and the table?", "options": ["0.5", "0.05", "0.20", "0.80"], "correct": "0.5"},

{"id": "26", "question": "At what respective values of x, y z with the unit of force (N) be dimensionally equivalent to MxLyTz?", "options": ["x = 2, y=4, z=1", "x = 1,y=1, z=-2", "x = 0, y 2, z=5", "x =-2, y=1, z=1"], "correct": "x = 1,y=1, z=-2"},

{"id": "27", "question": "Which is the following is a complete list of vector Quantities?", "options": ["Acceleration, Speed, Velocity", "Force, Acceleration, Velocity,", "Displacement, Force, Velocity", "I only"], "correct": "Displacement, Force, Velocity"},

{"id": "28", "question": "Which of the following is not a vector quantity?", "options": ["Force", "Weight", "Altitude", "Displacement"], "correct": "Altitude"},

{"id": "29", "question": "Which of the following is a set of vectors?", "options": ["Weight, displacement and moment", "Velocity, volume and upthrust", "Density, capacitance and distance", "Mass, force and impulse"], "correct": "Weight, displacement and moment"},

{"id": "30", "question": "A boy ties a stone to the end of a string which he then whiles above head around a circular path of radius 15cm. If the stone makes 20 oscillations in 10 seconds, calculate the angular speed of the stone.", "options": ["50nrads-1", "4πrads-1", "40πnrads-1", "6πrads-1"], "correct": "4πrads-1"}

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










