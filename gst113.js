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
    id: "1",
    question: "Justice as a concept implies doing that which is 'right', 'just' and",
    options: [
      "Indisputably wrong",
      "Indisputably correct",
      "Indisputably right",
      "Indisputable"
    ],
    "correct": "Indisputably correct"
  },
  {
    id: "2",
    question: "John Stuart Mill defined Justice in terms of what has the",
    options: [
      "Worst consequences",
      "bad consequences",
      "best consequences",
      "worst consequences"
    ],
    correct: "best consequences to the Society"
  },
  {
    id: "3",
    question: "The word Justice is etymologically derived from.",
    options: [
      "Greek",
      "Italian",
      "English",
      "Latin"
    ],
    correct: "Latin"
  },
  {
    id: "4",
    question: "According to Augustus Kakanowski and Marijus Narusevich, Social Justice is a society in which Justice is achieved in",
    options: [
      "some society",
      "every aspect",
      "no aspect",
      "every facet"
    ],
    correct: "every aspect of society"
  },
  {
    id: "5",
    question: "Law and Justice are intimately connected because",
    options: [
      "Law and Justice are founded by the same Judge",
      "One cannot practice law without practicing Justice",
      "Law gives meaning to Justice and what is lawful is said to be just",
      "Justice and Law were established in the same year"
    ],
    correct: "Law gives meaning to Justice and what is lawful is said to be just"
  },
  {
    id: "6",
    "question": "Social Justice is based on the concepts of human rights and equality and can be defined as",
    "options": [
      "The way elections are conducted",
      "The way the government administered a country",
      "The way in which human rights are manifested in everyday lives of people at every level of society",
      "The way people marry themselves"
    ],
    correct: "The way in which human rights are manifested in everyday lives of people at every level of society"
  },
  {
    id: "7",
    question: "In the Goodluck Jonathan Administration, Nigeria was rated one of the governed countries in Africa based on the 2014 Ibrahim Index of African Governance",
    options: [
      "Best",
      "Better",
      "Worse",
      "Worst"
    ],
    correct: "Worst"
  },
  {
    id: "8",
    question: "In the 2014 Ibrahim Index of African Governance, Nigeria is rated per cent lower than the African average of 51.5 per cent",
    options: [
      "45.7 per cent",
      "45.8 percent",
      "46.0 per cent",
      "46.8"
    ],
    correct: "45.8 percent"
  },
  {
    id: "9",
      question: "In the 2014 Ibrahim Index of African Governance Report, Nigeria was ranked out of 52 in the overall governance scale.",
    options: [
      "37th",
      "20th",
      "1st",
      "36th"
    ],
    correct: "37th"
  },
  {
    id: "10",
    question: "Mason Begho described the court as the.",
    options: [
      "Corrupt Avenue of Justice",
      "the place where Judges collect their share of the national cake",
      "Temple of Justice",
      "Bribery Temple"
    ],
    correct: "Temple of Justice"
  },
  {
    id: "11",
    question: "Social Justice can categorized into",
    options: [
      "Inter-Social Treatment and Unequal Government Regulation",
      "Intra-Social Treatment and Unequal Government Treatment",
      "Intra-Social Treatment and Equal Government Regulation",
      "Intra-Social Treatment and Inter-Social Treatment"
    ],
    correct: "Inter-Social Treatment and Unequal Government Regulation"
  },
  {
    id: "12",
    question: "The Oliver Littleton Constitution of 1954 introduced the.",
    options: [
      "Unitary Structure",
      "Co federal Structure",
      "Buhari Structure",
      "Federal Structure"
    ],
    correct: "Federal Structure"
  },
  {
    id: "13",
    question: "How many regions does Nigeria have in 1960",
    options: [
      "3",
      "4",
      "5",
      "36"
    ],
    correct: "3"
  },
  {
    id: "14",
    question: "How many States does Nigeria have in 1991",
    options: [
      "27",
      "30",
      "34",
      "19"
    ],
    correct: "30"
  },
  {
    id: "15",
    question: "The Groundnut Pyramid was the historical pride of.",
    options: [
      "Northern",
      "Southern",
      "Eastern",
      "Western"
    ],
    correct: "Northern"
  },
  {
    id: "16",
    question: "Which constitution provided for the elective principle in Nigeria?",
    options: [
      "Good Luck Jonathan Constitution",
      "Macpherson Constitution",
      "Clifford Constitution",
      "Buhari Constitution"
    ],
    correct: "Clifford Constitution"
  },
  {
    id: "17",
    question: "Who spearheaded the Islamic Jihad of 1804",
    options: [
      "Abubabakar Shekau",
      "Emir Lamido Sanusi",
      "Uthman Dan Fodio",
      "The king of Saudi Arabia"
    ],
    correct: "Uthman Dan Fodio"
  },
  {
    id: "18",
    question: "Culture comprises of two components; they are and",
    options: [
      "Spiritual culture and Non Spiritual Culture",
      "Physical culture and Non Physical culture",
      "Non material culture and Material culture",
      "Unseen culture and Seen culture"
    ],
    correct: "Non material culture and Material culture"
  },
  {
    id: "19",
    question: "The Edo Language has an affiliation with the_ family and the ______ Super family",
    options: [
      "Kwa and Niger Kordofanian",
      "Chadic and Kwa",
      "Niger Kordofanian and Chadic",
      "Chadic and English"
    ],
    correct: "Kwa and Niger Kordofanian"
  },
  {
    id: "20",
    question: "Eshu is a Yoruba deity known for.",
    options: [ "Singing","Reproduction","War","Trickster"],
    correct: "Trickster"
  },
  {
    id: "21",
    question: "Orunmila is a Yoruba deity known for.",
    options: [
      "Divination",
      "Reproduction",
      "War",
      "Agriculture"
    ],
    correct: "Divination"
  },
  {
    id: "22",
    question: "The city of Nri is reflected to be the origin of.",
    options: [
      "Fulani",
      "Urhobo",
      "Igbo",
      "Yoruba"
    ],
    correct: "Igbo"
  },
  {
    id: "23",
      question: "The other name for Sharo festival is.",
    options: [
      "Shadi festival",
      "Shade festival",
      "Shady festival",
      "Shouting festival"
    ],
    correct: "Shadi festival"
  },
  {
    id: "24",
    question: "According to Daniel Katz and Kenneth Braly, stereotyping leads to where people emotionally react to the name of a group, ascribe characteristics to members of that group, and then evaluate those characteristics",
    options: [
      "Gender Prejudice",
      "Racial Prejudice",
      "National Prejudice",
      "Sexual Preference"
    ],
    correct: "Racial Prejudice"
  },
  {
    id: "25",
    question: "The first Europeans to commence the slave trade business in Nigerian Coast were",
    options: [
      "Ghana",
      "British",
      "Scottish",
      "Portuguese"
    ],
    correct: "Portuguese"
  },
  {
    id: "26",
    question: "The most organised criticism against Richard Constitution came from:",
    options: [
      "APC",
      "NCNC",
      "PDP",
      "NYM"
    ],
    correct: "NCNC"
  },
  {
    id: "27",
    question: "Akpar defined an Indigene in line with the Nigerian constitution as:",
    options: [
      "a Nigerian native of a particular area by lineal descent, birth, longest resident or first to settle in an area",
      "a West African native of a particular area by descent, birth, longest resident or first to settle in an area",
      "a Nigerian native of a particular area by bilinear descent, birth, shortest resident or last to settle in an area",
      "a Nigerian native of a particular area by lineal descent, birth, third resident or third to settle in an area"
    ],
    correct: "a Nigerian native of a particular area by lineal descent, birth, longest resident or first to settle in an area"
  },
  {
    id: "28",
    question: "What are the influences on Belief Formation:",
    options: [
      "Public Relations, Advertising, Charismatic Leaders and Internalization of Beliefs",
      "Physical Trauma, Advertising, Charismatic Leaders and Internalization of Beliefs",
      "Marketing, Advertising, Charismatic Leaders and Internalization of Beliefs",
      "Newspapers, Advertising, Charismatic Leaders and Internalization of Beliefs"
    ],
    correct: "Physical Trauma, Advertising, Charismatic Leaders and Internalization of Beliefs"
  },
  {
    id: "29",
    question: "After the British government had declared the slave trade illegal in 1807, European traders were compelled to turn to.",
    options: [
      "Barter Trade",
      "Illegitimate Trade",
      "Legitimate Trade",
      "Drug Trade"
    ],
    correct: "Legitimate Trade"
  },
  {
    id: "30",
    question: "The term stereotype derives from the_ words (Stereos).",
    options: [
      "Latin",
      "African",
      "Greek",
      "English"
    ],
    correct: "Greek"
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






