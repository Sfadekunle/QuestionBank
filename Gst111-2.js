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

const quizArray =
[
{
    "id": "1",
    "question": "She acts____she is the Vice-Chancellor",
    "options": ["As it", "If", "That", "As if"],
    "correct": "As if"
  },
  {
    "id": "2",
    "question": "Must you greet everybody every day, No, I_____",
    "options": ["Can't", "Mustn't", "Shouldn't", "Should"],
    "correct": "Shouldn't"
  },
  {
    "id": "3",
    "question": "When one is immune to an illness, one is",
    "options": ["Opposed to it", "Attached to it", "Protected against it", "Addicted to it"],
    "correct": "Protected against it"
  },
  {
    "id": "4",
    "question": "You should make an to improve the situation reported assault",
    "options": ["Effect", "Effort", "Efficiency", "Effectiveness"],
    "correct": "Effort"
  },
  {
    "id": "5",
    "question": "It is difficult these days to get a seat_the plane",
    "options": ["Inside", "In", "On", "Into"],
    "correct": "In"
  },
{
    "id": "6",
    "question": "The university's supplies are in order",
    "options": ["Stationery", "Stationary", "Stationaries", "Stationeries"],
    "correct": "Stationery"
},
{
    "id": "7",
    "question": "He travelled to Lagos train (a) in (b) on (c) inside (d) by",
    "options": [
      "in",
      "on",
      "inside",
      "by"
    ],
    "correct": "by"
  },
  {
    "id": "8",
    "question": "You surely want some, don't you? (a) loaves (b) loafs (c) loavs (d) loavses",
    "options": [
      "loaves",
      "loafs",
      "loavs",
      "loavses"
    ],
    "correct": "loaves"
  },
  {
    "id": "9",
    "question": "She was reported the lecturer (a) to be assaulting (b) to have assaulted (c) to have been assaulted (d) to",
    "options": [
      "to be assaulting",
      "to have assaulted",
      "to have been assaulted",
      "to"
    ],
    "correct": "to have assaulted"
  },
  {
    "id": "10",
    "question": "Although, he was invited\_ he was not welcome. (a) but (b) yet (c) since (d) so",
    "options": [
      "but",
      "yet",
      "since",
      "so"
    ],
    "correct": "but"
  },
  {
    "id": "11",
    "question": "I could not walk any\_ (a) further (b) furthest (c) far (d) farthest",
    "options": [
      "further",
      "furthest",
      "far",
      "farthest"
    ],
    "correct": "further"
  },
  {
    "id": "12",
    "question": "Choose the opposite in meaning to the capitalised word. MISERS are not loved by many people\_ (a) spenders (b) hoarders (c) savers (d) thieves",
    "options": [
      "spenders",
      "hoarders",
      "savers",
      "thieves"
    ],
    "correct": "hoarders"
  },
  {
    "id": "13",
    "question": "Tolu had a SOLID primary education (a) sound (b) sordid (c) weak (d) shaky",
    "options": [
      "sound",
      "sordid",
      "weak",
      "shaky"
    ],
    "correct": "sound"
  },
  {
    "id": "14",
    "question": "Only few persons are living a life of AFFLUENCE today (a) poverty (b) happy (c) influence (d) pleasure",
    "options": [
      "poverty",
      "happy",
      "influence",
      "pleasure"
    ],
    "correct": "poverty"
  },
  {
    "id": "15",
    "question": "Some clerics are CUNNING (a) smart (b) straight forward (c) generous (d) shy",
    "options": [
      "smart",
      "straight forward",
      "generous",
      "shy"
    ],
    "correct": "generous"
  },
  {
    "id": "16",
    "question": "The man acted COURAGEOUSLY during the robbery. (a) shyly (b) timidly (c) indiscreetly (d) stupidly",
    "options": [
      "shyly",
      "timidly",
      "indiscreetly",
      "stupidly"
    ],
    "correct": "shyly"
  },
  {
    "id": "17",
    "question": "The discussion became ANIMATED at last (a) lively (b) intellectual (c) unruly (d) specialized",
    "options": [
      "lively",
      "intellectual",
      "unruly",
      "specialized"
    ],
    "correct": "lively"
  },
  {
    "id": "18",
    "question": "They will surely BUY this idea. (a) pay for (b) accept (c) trade in (d) barter",
    "options": [
      "pay for",
      "accept",
      "trade in",
      "barter"
    ],
    "correct": "accept"
  },
  {
    "id": "19",
    "question": "The robbers SURRENDERED their loot to the soldiers. (a) gave out (b) gave away (c) gave in (d) gave up",
    "options": [
      "gave out",
      "gave away",
      "gave in",
      "gave up"
    ],
    "correct": "gave in"
  },
  {
    "id": "20",
    "question": "Their attempts were NIPPED in the bud. (a) cut short (b) disqualified (c) unsuccessful (d) frustrated",
    "options": [
      "cut short",
      "disqualified",
      "unsuccessful",
      "frustrated"
    ],
    "correct": "cut short"
  },
  {
    "id": "21",
    "question": "The PROTAGONISTS of the idea were identified. (a) enemies (b) leading figures (c) opponents (d) believers",
    "options": [
      "enemies",
      "leading figures",
      "opponents",
      "believers"
    ],
    "correct": "leading figures"
  },
  {
    "id": "22",
    "question": "The National Assembly _____ Senate and House of Representatives",
      "options": [
      "comprise",
      "compose of",
      "comprise of",
      "comprise of"
    ],
    "correct": "comprise"
  },
  {
    "id": "23",
    "question": "Election _____the house begin at 5p.m.",
      "options": [
      "into",
      "at",
      "to",
      "for"
    ],
    "correct": "at"
  },
  {
    "id": "24",
    "question": "Jonah is a _____man ",
    "options": [
      "trickish",
      "tricky",
      "tricked",
      "trickery"
    ],
    "correct": "tricky"
  },
  {
    "id": "25",
    "question": "The teacher's ______ is faulty.", 
      "options": [
      "pronounciation",
      "pronunciation",
      "pronounce",
      "pronouncements"
    ],
    "correct": "pronunciation"
  },
  {
    "id": "26",
    "question": "We escaped with the skin of our teeth. This means we _______ ",
      "options": [
      "cut our skin",
      "got severely injured",
      "had marks on our skin",
      "narrowly escaped"
    ],
    "correct": "narrowly escaped"
  },
  {
    "id": "27",
    "question": "The university's ____ supplies are in order",
    "options": [
      "stationery",
      "stationary",
      "stationaries",
      "stationeries"
    ],
    "correct": "stationery"
  },
{
   "id": "28",
    "question": "One must protect ______ at all times",
    "options": ["oneself","ourselves","himself","oneselves"],
    "correct": "oneself"
},
{
    "id": "29",
    "question": "He denied _______ the money. (a) he did not steal (b) stealing (c) stolen (d) stole",
     "options": ["he did not steal","stealing","stolen","stole"],
     "correct": "stealing"
},
{
"id": "30",
"question": "He was always cheerful ______ (a) wasn't he? (b) didn't he? (c) was he? (d) did he?",
"options": [
"wasn't he?",
"didn't he?",
"was he?",
"did he?"
],
"correct": "wasn't he?"
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
    count = 20 *45;
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








