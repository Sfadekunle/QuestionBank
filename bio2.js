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
    "question": "Flowers with both androecium and gynoecium are called",
    "options": ["Bisexual flower", "Anther", "Stamens", "Unisexual flowers"],
    "correct": "Bisexual flower"
  },
  {
    "id": "2",
    "question": "The transfer of pollen from the anther to stigma is called",
    "options": ["Pollination", "Fertilization", "Adoption", "Diffusion"],
    "correct": "Pollination"
  },
  {
    "id": "3",
    "question": "The fusion of female reproductive nucleus with the male reproductive nucleus is known as",
    "options": ["Adoption", "Excretion", "Fertilization", "Regeneration"],
    "correct": "Fertilization"
  },
  {
    "id": "4",
    "question": "The two nuclei at the end of the pollen tube are called",
    "options": ["True nucleus and a generative nucleus", "Sperm and ovum", "Generative nucleus and stigma", "True nucleus and sperm"],
    "correct": "True nucleus and a generative nucleus"
  },
  {
    "id": "5",
    "question": "Generative nucleus divides forming",
    "options": ["2 male nuclei", "3 male nuclei", "2 female nuclei", "3 female nuclei"],
    "correct": "2 male nuclei"
  },
  {
    "id": "6",
    "question": "Embryo sac is located inside the",
    "options": ["Stigma", "Ovule", "Micropyle", "Style"],
    "correct": "Ovule"
  },
  {
    "id": "7",
    "question": "One nucleus of the pollen tube and secondary nucleus of the ovum grow into",
    "options": ["Stigma", "Endosperm", "Anther", "Stamen"],
    "correct": "Endosperm"
  },
  {
    "id": "8",
    "question": "The stalk of Datura flower at its base is known as",
    "options": ["Pedicel", "Corolla", "Sepals", "Thalamus"],
    "correct": "Pedicel"
  },
  {
    "id": "9",
    "question": "The male reproductive parts of a flower, the stamens, are collectively known as",
    "options": ["Androecium", "Filament", "Anther", "Gynoecium"],
    "correct": "Androecium"
  },
  {
    "id": "10",
    "question": "The other name for gynoecium is",
    "options": ["Pistil", "Stigma", "Androecium", "Style"],
    "correct": "Pistil"
  },
  {
    "id": "11",
    "question": "Functional megaspore in a flowering plant develops into",
    "options": ["Endosperm", "Ovule", "Embryo-sac", "Embryo"],
    "correct": "Embryo-sac"
  },
  {
    "id": "12",
    "question": "Which of the following is similar to autogamy, but requires pollinators?",
    "options": ["Geitonogamy", "Cleistogamy", "Apogamy", "Xenogamy"],
    "correct": "Apogamy"
  },
  {
    "id": "13",
    "question": "What is the function of the filiform apparatus?",
    "options": ["Guide the entry of pollen tube", "Recognize the suitable pollen at the stigma", "Produce nectar", "Stimulate division of the generative cell"],
    "correct": "Guide the entry of pollen tube"
  },
  {
    "id": "14",
    "question": "A mass of nutritive material outside the embryo sac is called _____",
    "options": ["Protoplasm", "Pericarp", "Ectoderm", "Perisperm"],
    "correct": "Protoplasm"
  },
  {
    "id": "15",
    "question": "Which of the following statements is correct?",
    "options": ["Sporogenous tissue is haploid", "The hard outer layer of pollen is called intine", "Tapetum nourishes the developing pollen", "Microspores are produced by endothecium"],
    "correct": "Microspores are produced by endothecium"
  },
  {
    "id": "16",
    "question": "Which of the following fruit is produced by parthenocarpy?",
    "options": ["Brinjal", "Apple", "Banana", "Jackfruit"],
    "correct": "Banana"
  },
  {
    "id": "17",
    "question": "The process of formation of seeds without fertilization in flowering plants is known as",
    "options": ["Budding", "Apomixis", "Sporulation", "Somatic hybridization"],
    "correct": "Sporulation"
  },
  {
    "id": "18",
    "question": "Functional megaspore in an angiosperm develops into",
    "options": ["Endosperm", "Embryo", "Embryo-sac", "Ovule"],
    "correct": "Embryo"
  },
  {
    "id": "19",
    "question": "Rewards and attractants are required for",
    "options": ["Entomophily", "Cleistogamy", "Anemophily", "Hydrophily"],
    "correct": "Anemophily"
  },
  {
    "id": "20",
    "question": "A dioecious flowering plant prevents",
    "options": ["Geitonogamy and xenogamy", "Autogamy and xenogamy", "Autogamy and geitonogamy", "Cleistogamy and xenogamy"],
    "correct": "Cleistogamy and xenogamy"
  },
  {
    "id": "21",
    "question": "Bryophyllum can reproduce by its _____",
    "options": ["Stem", "Leaves", "Roots", "Flower"],
    "correct": "Leaves"
  },
  {
    "id": "22",
    "question": "Self-pollination will lead to ______",
    "options": ["Overbreeding", "Outbreeding", "Inbreeding", "All of the above"],
    "correct": "Inbreeding"
  },
  {
    "id": "23",
    "question": "What is the basis on which the parts of the flowers are present?",
    "options": ["Placenta", "Sepal", "Fallopian", "Thalamus"],
    "correct": "Thalamus"
  },
  {
    "id": "24",
    "question": "Small head-like structure inside the ovary of a flower are called?",
    "options":
    ["Petal", "Ovules", "Sepals", "None of the above"],
    "correct": "Ovules"
  },
  {
    "id": "25",
    "question": "Taproots are commonly found in _______",
    "options": ["Angiosperm", "Gymnosperm", "Monocots", "Dicots"],
    "correct": "Dicots"
  }


]




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
    count = 20 * 45;
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


