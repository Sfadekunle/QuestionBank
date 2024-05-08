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
    "question": "Transpiration is least in",
    "options": ["Good soil moisture", "High wind velocity", "Dry environment", "High atmospheric humidity"],
    "correct": "High atmospheric humidity"
  },
  {
    "id": "2",
    "question": "Phenyl mercuric acetate (PMA) results in",
    "options": ["Reduced photosynthesis", "Reduced transpiration", "Reduced respiration", "Killing of plants"],
    "correct": "Reduced transpiration"
  },
  {
    "id": "3",
    "question": "Stomata open and close due to",
    "options": ["Circadian rhythm", "Genetic clock", "Pressure of gases inside the leaves", "Turgor pressure of guard cells"],
    "correct": "Turgor pressure of guard cells"
  },
  {
    "id": "4",
    "question": "Movement of leaves of sensitive plant, Mimosa pudica are due to",
    "options": ["Thermonasty", "Seismonasty", "Hydrotropism", "Chemonasty"],
    "correct": "Seismonasty"
  },
  {
    "id": "5",
    "question": "In guard cells when sugar is converted into starch, the stomatal pore",
    "options": ["Closes completely", "Opens partially", "Opens fully", "Remains unchanged"],
    "correct": "Closes completely"
  },
  {
    "id": "6",
    "question": "Phytochrome is involved in",
    "options": ["Phototropism", "Photorespiration", "Photoperiodism", "Geotropism"],
    "correct": "Photoperiodism"
  },
  {
    "id": "7",
    "question": "Giberellins promote",
    "options": ["Seed germination", "Seed dormancy", "Leaf fall", "Root elongation"],
    "correct": "Seed germination"
  },
  {
    "id": "8",
    "question": "Cut or excised leaves remain green for long if induced to root or dipped in",
    "options": ["Giberellins", "Cytokinins", "Auxins", "Ethylene"],
    "correct": "Cytokinins"
  },
  {
    "id": "9",
    "question": "Hormone primarily connected with cell division is",
    "options": ["IAA", "NAA", "Cytokinin (zeatin)", "Giberellic acid"],
    "correct": "Cytokinins (zeatin)"
  },
  {
    "id": "10",
    "question": "Carbon dioxide joins the photosynthetic pathway in",
    "options": ["PS I", "PS II", "Light reaction", "Dark reaction"],
    "correct": "Dark reaction"
  },
  {
    "id": "11",
    "question": "NADP+ is reduced to NADPH in",
    "options": ["PS I", "PS II", "Calvin cycle", "Noncyclic photophosphorylation"],
    "correct": "Noncyclic photophosphorylation"
  },
  {
    "id": "12",
    "question": "Minerals absorbed by root move to the leaf through",
    "options": ["Xylem", "Phloem", "Sieve tubes", "None of the above"],
    "correct": "Xylem"
  },
  {
    "id": "13",
    "question": "Phosphorous and nitrogen ions generally get depleted in soil because they usually occur as",
    "options": ["Neutral ions", "Negatively charged ions", "Positively charged ions", "Both positively and negatively charged but disproportionate mixture"],
    "correct": "Negatively charged ions"
  },
  {
    "id": "14",
    "question": "Which one is an essential mineral, not constituent of any enzyme but stimulates the activity of many enzymes",
    "options": ["Zn", "Mn", "K", "Mg"],
    "correct": "K"
  },
  {
    "id": "15",
    "question": "Which one increases in the absence of light?",
    "options": ["Uptake of minerals", "Uptake of water", "Elongation of internodes", "Ascent of sap"],
    "correct": "Elongation of internodes"
  },
  {
    "id": "16",
    "question": "Mowing grass lawn facilitates better maintenance because",
    "options": ["Wounding stimulates regeneration", "Removal of apical dominance and stimulation of intercalary meristem", "Removal of apical dominance", "Removal of apical dominance and promotion of lateral meristem"],
    "correct": "Removal of apical dominance and stimulation of intercalary meristem"
  },
  {
    "id": "17",
    "question": "Leaf fall can be prevented with the help of",
    "options": ["Abscisic acid", "Auxins", "Florigen", "Cytokinins"],
    "correct": "Cytokinins"
  },
  {
    "id": "18",
    "question": "Which of the following hormones can replace vernalization?",
    "options": ["Auxin", "Cytokinin", "Giberellins", "Ethylene"],
    "correct": "Giberellins"
  },
  {
    "id": "19",
    "question": "The size of chlorophyll molecule is",
    "options": ["Head 15 x 15 A, tail 15 A", "Head 20 x 20 A, tail 15 A", "Head 15 x 15 A, tail 10 A", "Head 10 x 10 A, tail 15 A"],
    "correct": "Head 15 x 15 A, tail 10 A"
  },
  {
    "id": "20",
    "question": "The substrate for photorespiration is",
    "options": ["Phosphoglyceric acid", "Glycolate", "Serine", "Glycine"],
    "correct": "Glycolate"
  },
  {
    "id": "21",
    "question": "In C4 plants, Calvin cycle operates in",
    "options": ["Stroma of bundle sheath chloroplasts", "Grana of bundle sheath chloroplasts", "Grana of mesophyll chloroplasts", "Stroma of mesophyll chloroplasts"],
    "correct": "Stroma of bundle sheath chloroplasts"
  },
  {
    "id": "22",
    "question": "Which of thr following is the greatest producers of organic matter?",
    "options": ["Crop plants", "Forests", "Plants of the land area", "Phytoplankton of oceans"],
    "correct": "Phytoplankton of oceans"
  },

{
  "id": "23",
  "question": "A very efficient converter of solar energy with net productivity of 40 kg/m^2 or more is the crop:",
  "options": [
    "wheat",
    "sugarcane",
    "rice",
    "ajra"
  ],
  "correct": "sugarcane"
},

{
  "id": "24",
  "question": "The principal pathway of water translocation in angiosperms is:",
  "options": [
    "sieve cells",
    "sieve tube elements",
    "xylem vessel system",
    "xylem and phloem"
  ],
  "correct": "xylem vessel system"
},

{
  "id": "25",
  "question": "Which of the following movement is not related to auxin level?",
  "options": [
    "ending of shoot towards light",
    "movement of root towards soil",
    "nyctinastic leaf movements",
    "movement of sunflower head tracking the sun"
  ],
  "correct": "nyctinastic leaf movements"
},

{
  "id": "26",
  "question": "Phototropic and geotropic movements are linked to:",
  "options": [
    "gibberellins",
    "enzymes",
    "auxin",
    "cytokinins"
  ],
  "correct": "auxin"
},

{
  "id": "27",
  "question": "Abscisic acid controls:",
  "options": [
    "cell division",
    "leaf fall and dormancy",
    "shoot elongation",
    "cell elongation and wall formation"
  ],
  "correct": "leaf fall and dormancy"
},

{
  "id": "28",
  "question": "Phytohormones are:",
  "options": [
    "chemical regulation flowering",
    "chemical regulation secondary growth",
    "hormones regulating growth from seed to adulthood",
    "regulators synthesised by plants and influencing physiological processes"
  ],
  "correct": "regulators synthesised by plants and influencing physiological processes"
},

{
  "id": "29",
  "question": "Twining of tendrils is due to:",
  "options": [
    "thigmotropism",
    "seismonasty",
    "heliotropism",
    "diageotropism"
  ],
  "correct": "thigmotropism"
},

{
  "id": "30",
  "question": "The hormone responsible for apical dominance is:",
  "options": [
    "IAA",
    "GA",
    "ABA",
    "Florigen"
  ],
  "correct": "IAA"
}

];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    
});

//Next Button

nextBtn.addEventListener("click", (displayNext = () => {
  //increment questionCount
  questionCount += 1;
  
  //if last question
  if (questionCount == quizArray.length) {
    //hide question container and display score
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    //user score
    userScore.innerHTML = "Your score is " + scoreCount + " out of " + quizArray.length;
  } else {
    //display questionCount
    countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
    //display quiz
    quizDisplay(questionCount);
    clearInterval(countdown);
    timerDisplay();
    checkAnswer();
    
    // Check if there is a stored answer for the new question
    if (userAnswers[questionCount]) {
      let selectedOption = document.querySelector(`input[data-option="${userAnswers[questionCount]}"]`);
      selectedOption.checked = true;
    }
  }
}));



nextBtn.addEventListener(
    "click",changeBtn)
//back button
backBtn.addEventListener("click", displayPrevious = () => {
  if (questionCount > 0) {
    questionCount -= 1;
    countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
    quizDisplay(questionCount);
    
    // Check if there is a stored answer for the previous question
    if (userAnswers[questionCount]) {
      let selectedOption = document.querySelector(`input[data-option="${userAnswers[questionCount]}"]`);
      selectedOption.checked = true;
    }
  }
})

 //Change next to submit 
  function changeBtn(){
    if(questionCount == quizArray.length -1){
      nextBtn.textContent = "Submit"; 
    }else{
        nextBtn.textContent = "Next";
    }
 
  }
      


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
function quizDisplay(questionCount) {
  let quizCards = document.querySelectorAll(".container-mid");
  // Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  // Display current question card
  quizCards[questionCount].classList.remove("hide");
  // Retrieve stored user answer
  let storedAnswer = localStorage.getItem(`answer-${questionCount}`);
  if (storedAnswer) {
    let selectedOption = document.querySelector(`input[name="option"][data-option="${storedAnswer}"]`);
    selectedOption.checked = true;
  }
}


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




