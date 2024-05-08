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
  "question": "The name Nigeria was suggested by",
  "options": ["Flora Shaw", "Lord Lugard", "Taubman Goldie", "Consul Phillip"],
  "correct": "Flora Shaw"
},
{
  "id": "2",
  "question": "Instituted the elective principles.",
  "options": ["Clifford Constitution", "Richards Constitution", "Independence Constitution", "Oliver Littleton Constitution"],
  "correct": "Clifford Constitution"
},
{
  "id": "3",
  "question": "The first Prime Minister of Nigeria was",
  "options": ["Dr. Michael Okpara", "Chief Obafemi Awolowo", "Sir Tafawa Balewa", "Dr. Nnamdi Azikiwe"],
  "correct": "Sir Tafawa Balewa"
},
{
  "id": "4",
  "question": "The institutionalization of the structural adjustment programme in Nigeria was during the era of",
  "options": ["General Yakubu Gowon", "General Sanni Abacha", "General 1964", "General 1962", "General 1966"],
  "correct": "General 1964"
},
{
  "id": "5",
  "question": "The move to Abuja was initiated by",
  "options": ["General Murtala Mohammed", "Alhaji Shehu Shagari", "General Sanni Abacha", "Dr. Nnamdi Azikiwe"],
  "correct": "General Murtala Mohammed"
},
{
  "id": "6",
  "question": "By 1963, the population of Nigeria grew to",
  "options": ["55.7 million", "52 million", "88.9 million", "165 million"],
  "correct": "55.7 million"
},
{
  "id": "7",
  "question": "Monarchical ascendancy in the Igbo subsection was by",
  "options": ["achievement", "seniority", "patriarchy primogeniture", "chieftaincy"],
  "correct": "achievement"
},
{
  "id": "8",
  "question": "The jihad of Uthman Dan Fodio started in",
  "options": ["1808", "1810", "1804", "1830"],
  "correct": "1804"
},
{
  "id": "9",
  "question": "The first missionary sent by the CMS to Nigeria was",
  "options": ["Henry Townsend", "Reverend Father Lutz", "Father Conquard", "Bishop Ajayi Crowther"],
  "correct": "Henry Townsend"
},
{
  "id": "10",
  "question": "The first military coup in Nigeria took place on the",
  "options": ["15th April, 1966", "16th January, 1966", "15th January, 1966", "17th January, 1966"],
  "correct": "16th January, 1966"
},
{
  "id": "11",
  "question": "Two Nigeria major tribes are",
  "options": ["Hausa and Edo", "Ibibio and Niger Delta", "Yoruba and Ibo", "Fulani and Ijaws"],
  "correct": "Yoruba and Ibo"
},
{
  "id": "12",
  "question": "The first newspaper in Nigeria was called",
  "options": ["National Daily", "Vanguard", "Nigerian Observer", "Iwe-Irohin"],
  "correct": "Iwe-Irohin"
},
{
  "id": "13",
  "question": "Defined culture as that complex whole which includes knowledge belief, art, law, morals, customs and other capabilities and habits acquired by man as a member of the society",
  "options": ["Edward B. Tylor", "and Hunt", "Spencer-Oatay", "Smith D.E."],
  "correct": "Edward B. Tylor"
},
{
  "id": "14",
  "question": "The process by which people learn the characteristics of their group like behaviour, knowledge, attitude, values, norms and other orientation that suit the group is called_",
  "options": ["socialization", "social context", "acquisitive", "mutable"],
  "correct": "socialization"
},
{
  "id": "15",
  "question": "The culture that is inter-woven and inter-connected is called",
  "options": ["incorporating", "continuous", "receptive", "universal"],
  "correct": "incorporating"
},
{
  "id": "16",
  "question": "The central homeland of the Hausa covers an area about",
  "options": ["640 kilometers wide", "740 kilometers", "840 kilometers wide", "940 kilometers wide"],
  "correct": "840 kilometers wide"
},
{
  "id": "17",
  "question": "Bayajidda is associated with the origin of",
  "options": ["Hausa states", "Benin Kingdom", "Kanuri Empire", "Oyo Empire"],
  "correct": "Hausa states"
},
{
  "id": "18",
  "question": "Before 1804, Hausaland was ruled by",
  "options": ["Habe Kings", "fuling ruling class", "appointire ruling class", "nomadic Fulanis"],
  "correct": "Habe Kings"
},
{
  "id": "19",
  "question": "The original Fulani language is",
  "options": ["fulfulde", "Yan Bori", "Sarkin Rafi", "Kabewa"],
  "correct": "fulfulde"
},
{
  "id": "20",
  "question": "One of the highly cherished and celebrated festivals among the Fulani",
  "options": ["Gelede", "Awon lya Wa", "Ugie Erha Oba", "Sharo"],
  "correct": "Sharo"
},
{
  "id": "21",
  "question": "In the ninth century A.D, black-smithing and agriculture had emerged at",
  "options": ["Oyo", "Ondo", "Ilorin", "Ife"],
  "correct": "Ife"
},
{
  "id": "22",
  "question": "Urbanism was a way of life of",
  "options": ["Hausa", "Yoruba", "Binni", "Isoko"],
  "correct": "Yoruba"
},
{
  "id": "23",
  "question": "The two new states that emerged after the fall of Oyo Empire founded by war time refugees were___",
  "options": ["Egbado and Ifonyin", "Ijebu and Ijesha", "Ketu and Owo", "Ibadan and Egba"],
  "correct": "Ijebu and Ijesha"
},
{
  "id": "24",
  "question": "Ogiso rulers existed in",
  "options": ["Benin Kingdom", "Oyo Empire", "Hausa States", "Kanem-Bornu Empire"],
  "correct": "Benin Kingdom"
},
{
  "id": "25",
  "question": "Olokun in Benin is the god of",
  "options": ["Iron", "god of death", "the goddess of safe delivery", "global waters"],
  "correct": "global waters"
},
{
  "id": "26",
  "question": "The city of Nri is reflected to be the origin of",
  "options": ["Yoruba culture", "Bini culture", "Fulani culture", "Igbo culture"],
  "correct": "Igbo culture"
},
{
  "id": "27",
  "question": "Core beliefs mean",
  "options": ["ascribed to someone who has not thought about the issue", "beliefs that are actively thought about", "dispositional beliefs", "belief formation"],
  "correct": "beliefs that are actively thought about"
},
{
  "id": "28",
  "question": "The controversial book 'Saving Belief' was written by",
  "options": ["Baker", "Fodor", "Paul T.", "O. Otite"],
  "correct": "O. Otite"
},
{
  "id": "29",
  "question": "Linear models of belief formation takes into consideration",
  "options": ["multiple factors influencing belief formation", "one factor influencing belief formation", "double factors influencing belief formation", "none of the above"],
  "correct": "one factor influencing belief formation"
},
{
    "id": "30",
  "question": "The following factors can influence belief formation except",
  "options": ["Internationalization of beliefs during childhood", 
    "Charismatic leaders advertising",
    "Social belief"],
   "correct": "Social belief"
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










