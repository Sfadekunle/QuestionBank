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
"question": "A bullet of mass 20g is fired from a gun of mass 2.5kg. the bullet leaves the gun with a speed of 500m/s. Find the gain in the kinetic energy.",
"options": ["2520J", "2500J", "2480J", "2530J"],
"correct": "2520J"
},

{
"id": "1",
"question": "When both the velocity and acceleration of an object have the same sign, it means the object",
"options": ["slows down", "at rest", "speed up", "none of the above"],
"correct": "speed up"
},

{
"id": "2",
"question": "A 2.5kg uniform rod is balanced horizontally on a support by two weights attached to its ends. The length of the rod is 2m and the support is 0.5m from one end to another . If the weight near the support is 50N, find the weight on the other end.",
"options": ["12.5N", "83.3N", "8.3N", "25N"],
"correct": "83.3N"
},

{
"id": "3",
"question": "A corolla sport car accelerate from rest to 96km/h in 2.2seconds, what is the average acceleration?",
"options": ["121m/s²", "12.1 m/s²", "11.1 m/s²", "10.1m/s²"],
"correct": "12.1 m/s²"
},

{
"id": "4",
"question": "A ball of mass 0.15kg slides with negligible friction on a horizontal plane. The ball is attached to a pivot by means of a string 0.60m long. The ball moves around a circle at 10rad/sec. what is the tension in the string?",
"options": ["0.9N", "0.8N", "0.7N", "9N"],
"correct": "9N"
},

{
"id": "5",
"question": "A body is initially at rest on a horizontal surface when a horizontal force of 7N acts on it for 5 seconds. Find the final momentum of the body.",
"options": ["1.4Ns", "35Ns", "0.71Ns", "7Ns"],
"correct": "35Ns"
},

{
"id": "6",
"question": "How large a force parallel to a 30 incline is needed to give a 5kg box an acceleration of 0.20m/s up the incline if friction is negligible?",
"options": ["1.0N", "20.0N", "30.0N", "25.5N"],
"correct": "25.5N"
},

{
"id": "7",
"question": "A block weighing 48N is pulled along a horizontal surface with a rope. The applied force due to the rope is 40N at 37° to the horizontal. If the block accelerates at 5m/s how large a friction force must be retarding its motion?",
"options": ["20.5N", "25.5N", "24.5N", "245N"],
"correct": "24.5N"
},

{
"id": "8",
"question": "A ball is thrown up with a speed of 10m/s at an angle of 30° to the vertical. Find the height to which the ball rises.",
"options": ["38.0m", "3.0m", "3.5m", "3.8m"],
"correct": "3.8m"
},

{
"id": "9",
"question": "A particle of mass 150g lies at rest on a smooth surface. Another particle of mass 100g is projected along the surface with speed U and collides with each other. On collision the masses coalesce and move with speed 4m/s. What is the value of U?",
"options": ["0.1m/s", "1.0m/s", "10.0m/s", "100.0m/s"],
"correct": "10.0m/s"
},

{
"id": "10",
"question": "Use the information in the question above, determine the loss in kinetic energy during impact.",
"options": ["5J", "3J", "2J", "7J"],
"correct": "3J"
},
{
"id": "11",
"question": "A pack of bricks of mass 100kg is hoisted up the side of a house. Find the force in the lifting rope when the bricks are lifted with an acceleration of 0.25m/s.",
"options": ["1005N", "955N", "980N", "25N"],
"correct": "1005N"
},

{
"id": "12",
"question": "A disk initially at rest is given an angular acceleration of 12rad/s. What is its frequency after 10 seconds?",
"options": ["120rev/s", "15.1rev/s", "21.1rev/s", "19.1rev/s"],
"correct": "19.1rev/s"
},

{
"id": "13",
"question": "Which of the following is the correct unit of gravitational potential?",
"options": ["Jkg^-2", "Nkg^-1", "Jkg^-1", "Jkg^3"],
"correct": "Jkg^-1"
},

{
"id": "14",
"question": "Determine the vector product of D=5i+6j- 3k and E = 7i + 8j + 4k.",
"options": ["48i - 41j -2k", "48i +j -82k", "48i + j+82k", "48i - j -82k"],
"correct": "48i - 41j -2k"
},

{
"id": "15",
"question": "A particle at position r = i+2j+3k is acted upon by a force F = 4i+5j+6k. Calculate the torque experienced by the particle.",
"options": ["3i+6j- 3k", "-3i+6j-3k", "-3i-6j-3k", "-3i+6j+3k"],
"correct": "-3i-6j-3k"
},
{
"id": "16",
"question": "The resistance of an object to change its rotational motion about an axis is",
"options": ["Torque", "Moment of inertia", "Centripetal force", "Angular momentum"],
"correct": "Moment of inertia"
},

{
"id": "17",
"question": "A ball is thrown vertically upwards from the ground with initial velocity u. the time taken by the ball to reach a height is 3seconds. The ball then takes a further 2seconds to return to the ground. Find the initial velocity?",
"options": ["20.5m/s", "23.5 m/s", "25.5 m/s", "24.5 m/s"],
"correct": "24.5 m/s"
},

{
"id": "18",
"question": "The principle of conservation of energy state that",
"options": ["KE-PE =constant", "KE + PE= constant", "PE-KE= constant", "KE²+PE² = constant"],
"correct": "KE + PE= constant"
},

{
"id": "19",
"question": "A horizontal force pulls a body of mass 2.25kg a distance of 8m across a rough horizontal surface. The body moves with constant velocity and the only resisting force is that due to friction. Find the work done against friction if the coefficient of friction is 0.33.",
"options": ["50.21", "56.21", "68.21", "58.23"],
"correct": "58.23"
},

{
"id": "20",
"question": "A pump raises 75kg of water through a vertical distance of 20m in 14 seconds. Find the average rate at which the pump is working.",
"options": ["14.7Kw", "1.47kW", "105Kw", "1.05Kw"],
"correct": "1.05Kw"
},

{
"id": "21",
"question": "A motorist drives 120km at 100km/h and 120km at 80km/h. what is his average speed for the trip?",
"options": ["88.0km/h", "88.9km/h", "90.9km/h", "8.89km/h"],
"correct": "88.9km/h"
},

{
"id": "22",
"question": "Which of this relationship represents Kepler's third law of gravitation?",
"options": ["T³= kr²", "T³= kr³", "T²= kr³", "T²= kr²"],
"correct": "T³= kr²"
},
{
"id": "23",
"question": "A car travels along a horizontal road which is an arc of a circle of radius 125m. the greatest speed at which the car can travel without slipping is 42km/hr. Find the coefficient of friction between the tyres of the car and the road surface.",
"options": ["0.11", "0.15", "11.67", "0.14"],
"correct": "0.11"
},

{
"id": "24",
"question": "The speed of a satellite which is close to the earth surface is 8 x 10³ m/s, its radius of orbit is assumed to be equal to the earth radius 6400km. find the period of the satellite.",
"options": ["5000sec", "1.25 x 10-sec", "51.2 x 10 sec", "2000sec"],
"correct": "5000sec"
},

{
"id": "25",
"question": "Find in vector form, the resultant force required to make a body of mass 2kg accelerates at (5i+2j)m/s².",
"options": ["(i+4j)N", "(10i+4j)N", "(10i+j)N", "(4i+5j)N"],
"correct": "(10i+4j)N"
},

{
"id": "26",
"question": "Which of the following is a statement of the law of conservation of angular momentum?",
"options": ["dL/dt=0", "dL/dt > 0", "dL/dt < O","dL/dt = 1" ],
"correct": "dL/dt=0"
},

{
"id": "27",
"question": "The term dimensions of a quantity in physics means?",
"options": ["the relationship between physical quantity and fundamental quantity", "the relationship between two physical quantity", "the relationship between two basic quantity", "none of the above"],
"correct": "the relationship between physical quantity and fundamental quantity"
},

{
"id": "28",
"question": "The product of force and velocity is",
"options": ["Momentum", "Power", "Impulse", "Moment"],
"correct": "Power"
},

{
"id": "29",
"question": "A brass sleeve of inside diameter 1.9995cm at 20°C is to be heated so that it will just barely slide over a shaft of diameter 2.0005cm. To what temperature must the sleeve be heated?",
"options": ["283°C", "293°C", "303°C", "313°C"],
"correct": "283°C"
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
    count = 20 * 90;
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





