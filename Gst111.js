
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
let secondTest = document.getElementById("Test-2");
let questionCount;
let scoreCount = 0;
let count = 20;
let countdown;

//Questions and Options array

const quizArray = [
{
    "id": "1",
    "question": "Poor listener only listen for",
    "options": ["Facts", "Listen to the concluding statements", "Listen to the introductory remarks", "Bothers about the speaker's language"],
    "correct": "Facts"
  },
  {
    "id": "2",
    "question": "An outline helps the student to",
    "options": ["Memorize points", "Date his/her materials", "Structure his/her assignment", "Summarize his/her work"],
    "correct": "Structure his/her assignment"
  },
  {
    "id": "3",
    "question": "A good student must provide for his/her work",
    "options": ["Only the page of source material", "Only the publishers of the source material", "The initials of the author referred to", "A reference for his/her work"],
    "correct": "A reference for his/her work"
  },
  {
    "id": "4",
    "question": "Plagiarism does not cover",
    "options": ["Copying from other person's work", "Information that is common knowledge", "Lifting other people's ideas mindlessly"],
    "correct": "Information that is common knowledge"
  },
  {
    "id": "5",
    "question": "A good learner",
    "options": ["Goes to the library everyday", "Is an attentive listener", "Sits always in front of the class", "Always asks questions in class"],
    "correct": "Is an attentive listener"
  },
  {
    "id": "6",
    "question": "One of these is a more rigorous way of getting knowledge",
    "options": ["Reading", "Studying", "Acting", "Talking"],
    "correct": "Studying"
  },
  {
    "id": "7",
    "question": "Unlike communication, language is",
    "options": ["Human specific", "Animal specific", "Human and animal specific", "Neither animal nor human specific"],
    "correct": "Human specific"
  },
  {
    "id": "8",
    "question": "When a language lacks a logical connection between words or sounds and the objects it refers to, it is said to",
    "options": ["Arbitrary", "Objective", "Subjective", "Unintelligible"],
    "correct": "Arbitrary"
  },
  {
    "id": "9",
    "question": "Occurs when a language is used to talk about language",
    "options": ["Semanticity", "Discreteness", "Creativity", "Reflexibility"],
    "correct": "Reflexibility"
  },
  {
    "id": "10",
    "question": "Anything that reduces the fidelity of communication is",
    "options": ["Noise", "Medium", "Feedback", "Stimulus"],
    "correct": "Noise"
  },
  {
    "id": "11",
    "question": "Body movement is a form of",
    "options": ["Proxemics", "Kinesics", "Chronemics", "Distance"],
    "correct": "Kinesics"
  },
  {
    "id": "12",
    "question": "Horizontal communication takes place",
    "options": ["During lectures", "Among people of the same rank", "Between a boss and a worker", "Between father and son"],
    "correct": "Among people of the same rank"
  },
  {
    "id": "13",
    "question": "Communication has essential components",
    "options": ["Six", "Nine", "Eight", "Twelve"],
    "correct": "Six"
  },
  {
    "id": "14",
    "question": "Is a proper noun",
    "options": ["Ada", "Knowledge", "Casts", "Markets"],
    "correct": "Ada"
  },
  {
    "id": "15",
    "question": "There are six in the garden",
    "options": ["Ox", "Oxen", "Oxs", "Oxes"],
    "correct": "Oxen"
  },
  {
    "id": "16",
    "question": "\"He blamed himself.\" \"himself\" in this sentence is",
    "options": ["Reflexive pronoun", "Interrogative pronoun", "Intensive pronoun", "Reciprocal pronoun"],
    "correct": "Reflexive pronoun"
  },
  {
    "id": "17",
    "question": "One of the following shows an adverb of manner",
    "options": ["They lived happily", "He has gone there", "She went to Lagos yesterday", "She will come"],
    "correct": "They lived happily"
  },
  {
    "id": "18",
    "question": "\"He loves reading\" is an example of",
    "options": ["Simple present tense", "Past present tense", "Present perfect tense", "Past continuous tense"],
    "correct": "Simple present tense"
  },
  {
    "id": "19",
    "question": "She congratulated him his success at the polls",
    "options": ["For", "At", "On", "In"],
    "correct": "For"
  },
  {
    "id": "20",
    "question": "\"Do not go there\" is a sentence",
    "options": ["Declarative", "Imperative", "Optative", "Exclamatory"],
    "correct": "Imperative"
  },
  {
    "id": "21",
    "question": "The rich should help the poor. The underlined is the",
    "options": ["Predicate", "Subject", "Complex sentence", "Subordinate clause"],
    "correct": "Subordinate clause"
  },
  {
    "id": "22",
    "question": "Change the sentence, Paul said, \"Brother, I am coming\" to Indirect Speech",
    "options": ["Paul said that he was coming", "Paul says I am coming", "Paul said that I am coming", "\"I am coming\", says Paul"],
    "correct": "Paul said that he was coming"
  },
  {
    "id": "23",
    "question": "\"He told me that he was hungry\" changed to Direct Speech it becomes",
    "options": ["Peter said, \"I am hungry\"", "Peter says he was hungry", "I am hungry says Peter", "I was hungry said Peter"],
    "correct": "Peter said, \"I am hungry\""
  },
  {
    "id": "24",
    "question": "Yesterday, Tunde asked Charles_",
    "options": ["If he was tired", "If he is tired", "Whether he was tired", "Whether he is tired"],
    "correct": "Whether he was tired"
  },
  {
    "id": "25",
    "question": "Tolu asked Shade_",
    "options": ["What her plan was", "What her plan is", "What is his plan", "What was her plan"],
    "correct": "What her plan was"
  },
  {
    "id": "26",
    "question": "He told them",
    "options": ["Hurry up", "To have hurry up", "To be hurried up", "To hurry up"],
    "correct": "To hurry up"
  },
  {
    "id": "27",
    "question": "They said that",
    "options": ["She will come", "She would come", "Is going to come", "She may come"],
    "correct": "She would come"
  },
  {
    "id": "28",
    "question": "The Vice Chancellor asked me",
    "options": ["What is my name", "What was my name", "What my name was", "What my name should be"],
    "correct": "What my name was"
  },
  {
    "id": "29",
    "question": "Ade is a greenhorn. This means that Ade is",
    "options": ["Inexperienced", "Not tall", "Fair-skinned", "Hard worker"],
    "correct": "Inexperienced"
  },
  {
    "id": "30",
    "question": "He told him to go on till six p.m.",
    "options": ["Working", "Worked", "Works", "To work"],
    "correct": "To work"
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



