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
  id: "0",
  question: "Most of the Niger Delta ethnic groups belong to the _______ family group.", 
  options: ["Kwa", "Chadic", "Niger-Congo", "Akwa Ibom"],
  correct: "Kwa"
},

{
  id: "1",
  question: "Among the Niger Delta People, _______ is well known as the bride of the seas.",
  options: ["All Women", "Mami Water", "Osanobua", "Sea fishes"],
  correct: "Mami Water"
},

{
  id: "2", 
  question: "The Supreme God in Ijaw is called:",
  options: ["Osanobua", "Egbesu", "Orunmila", "Tamuno"],
  correct: "Egbesu"
},

{
  id: "3",
  question: "In Itsekiri, the Supreme God is called:", 
  options: ["Oritsenebuwe", "Tamra", "Olorun", "Oghene"],
  correct: "Oritsenebuwe"
},

{
  id: "4",
  question: "In the Guinea Savanna Region, Land belongs to the ______.",
  options: ["Age Group", "the older generation", "Lineage", "the Chiefs"],
  correct: "Lineage"
},

{
  id: "5",
  question: "Prescriptive norms dictate ______.",
  options: ["What people should do", "What people should not do", "the sexual orientation of the people", "What people should desire"],
  correct: "What people should do"
},

{
  id: "6",
  question: "Chinoy defines folkways as _______ accepted as appropriate but not insisted upon.",
  options: ["a mere conventional practice", "a mere cultural practice", "a mere historical practice", "a mere educational practice"],
  correct: "a mere conventional practice"
},

{
  id: "7",
  question: "Proscriptive norms dictates ______.", 
  options: ["What people should not do", "What women should do", "What men should do", "What children should do"],
  correct: "What people should not do"
},

{
  id: "8",
  question: "Chinoy defines mores as those norms or institutions, which ______.",
  options: ["are morally poorly sanctioned", "are morally strongly sanctioned", "are not morally strongly sanctioned", "are morally not poorly sanctioned"],
  correct: "are morally strongly sanctioned"
},

{
  id: "9",
  question: "Right is the ______ of a citizen.",
  options: ["Colonial Entitlement", "Educational Entitlement", "Constitutional Entitlement", "Historical Entitlement"], 
  correct: "Constitutional Entitlement"
},

{
  id: "10",
  question: "Privileges are some of what a citizen enjoys by chance which can be ______ of him/her at any time.",
  options: ["deprived", "divested", "rob", "slammed"],
  correct: "deprived"
},

{
  id: "11",
  question: "The term value to Chinoy is sometimes used for the object or situations which are defined as _______ for money, wives, jewelry, success, power, fame, rather than for shared sentiments and judgements.",
  options: ["bad, not proper, not desirable, not worthwhile", "worse, not proper, not desirable, not worthwhile", "good, proper, desirable, worthwhile", "unjust, foolish, rubbish, not worthy"],
  correct: "good, proper, desirable, worthwhile"
},

{
  id: "12",
  question: "Social values are ______ that indicate the general good deemed desirable for organised social life.",
  options: ["Cultural Standards", "Normative Standards", "Equal Standards", "Economic Standard"],
  correct: "Cultural Standards"
},

{
  id: "13", 
  question: "What are the types of values?",
  options: ["Good Values, Rational Values and Aesthetic Values", "Bad Values, Rational Values and Aesthetic Values", "Moral Values, Rational Values and Aesthetic Values", "Moral Values, Irrational Values and Aesthetic Values"],
  correct: "Moral Values, Rational Values and Aesthetic Values"
},

{
  id: "14",
  question: "Values are cherished on through the ______.", 
  options: ["Observance of norms", "commemoration of norms", "disobedience of norms", "capital punishment"],
  correct: "Observance of norms"
},

{
  id: "15",
  question: "Variant values are the values which allows a person the ______ according to his desires and choices",
  options: ["freedom to behave", "restriction to behave", "opportunity to behave", "constitutional right to behave"], 
  correct: "freedom to behave"
},

{
  id: "16",
  question: "Negative attitudes and conducts are ______ which are based on voluntary acts that violate societal norms and threaten the welfare of at least one or more societal members",
  options: ["normal behaviours", "deviant behaviours", "standard behaviours", "good behaviours"],
  correct: "deviant behaviours"
},

{
  id: "17",
  question: "Robert Merton defined negative attitudes and conducts as contemporary social problems and abnormal behaviours which are ______ in nature to the growth and development of any society.",
  options: ["highly unconducive", "highly conducive", "conducive", "confortable"],
  correct: "highly unconducive"
},

{
  id: "18",
  question: "Codes that perform the function of policing peoples behaviors are called ______.",
  options: ["norms", "Values", "Holy Spirit", "Conscience"],
  correct: "norms"
}, 

{
  id: "19",
  question: "A closely related concept to value is the notion of ______ which refers to the idea of good or bad or wrong and right.",
  options: ["Moral Reasoning", "Depraved Reasoning", "Corrupt Reasoning", "Immoral Reasoning"],
  correct: "Moral Reasoning"
},
{
  id: "20",
  question: "Kinnier, Kernes and Dautheribes revealed the following universal values:",
  options: ["Self Respect; Commitment to Something Greater than the Self; Care for others; Care for the Environment and other living things", "Self Respect; Commitment to Something not important; Care for others; Care for the Environment and other living things", "Corruption; Commitment to Something Greater than the Self; Care for others; Care for the people of God",
    "Selfishness; Commitment to Something Greater than the Self; Care for others; Care for the Environment and other living things"],
  correct: "Self Respect; Commitment to Something Greater than the Self; Care for others; Care for the Environment and other living things"
},


{
  id: "21", 
  question: "Deforestation is the ______ cover of a hitherto forested environment.",
  options: ["Continuous loss of plant", "Continuous gain of plant", "Continuous growth of plant", "Continuous development of plant"],
  correct: "Continuous loss of plant"
},

{
  id: "22",
  question: "A number of ______ factors are responsible for land degradation in Nigeria.",
  options: ["anthropogenic", "anthropology", "archaeology", "antipoetic"],
  correct: "anthropogenic"
},

{
  id: "23", 
  question: "Ofomata estimated that, of the total area of 78,612km of southeastern Nigeria, ______ per cent of it is affected by one form of soil erosion or another.",
  options: ["85", "82", "70", "56"],
  correct: "70"
},

{
  id: "24", 
  question: "Ogbonna's appraisal of the collectivist nature of Nigeria proposed four moral and cultural values held by Nigerians. They are:",
  options: ["diverseness of the family system ; Community life ; Respect for old Age and Authority; Value for the Sacredness of Religion; Value for Hospitality", "diverseness of the Nigerian People ; Individual life ; Respect for old Age and Authority; Value for the Sacredness of Religion; Value for Hospitality", "Oneness of the family ; Community life ; Respect for old Age and Authority; Value for the Sacredness of Religion; Value for Hospitality", "Oneness of the family ; Community life ; disrespect for Federal Government; Value for the worship of idols; love for education"],
  correct: "Oneness of the family ; Community life ; Respect for old Age and Authority; Value for the Sacredness of Religion; Value for Hospitality"  
},

{
  id: "25", 
  question: "Deforestation is the ______ cover of a hitherto forested environment.",
  options: ["Continuous loss of plant", "Continuous gain of plant", "Continuous growth of plant", "Continuous development of plant"],
  correct: "Continuous loss of plant"
},

{
  id: "26",
  question: "A number of ______ factors are responsible for land degradation in Nigeria.",
  options: ["anthropogenic", "anthropology", "archaeology", "antipoetic"],
  correct: "anthropogenic"
},

{
  id: "27", 
  question: "Ofomata estimated that, of the total area of 78,612km of southeastern Nigeria, ______ per cent of it is affected by one form of soil erosion or another.",
  options: ["85", "82", "70", "56"],
  correct: "70"
},

{
  id: "28",
  question: "Urbanization is caused by population ______.",
  options: ["growth rate and rural high-urban migration", "growth rate and urban high-rural migration", "low rate and urban high-rural migration", "low birth rate and poor rural infrastructure"],
  correct: "growth rate and rural high-urban migration"
},

{
  id: "29",
  question: "Environmental pollution can be categorized into three groups. These are ______.",
  options: ["Space Pollution ; Solid Pollution; Surface Area Pollution", "Atmospheric Pollution ; Water Pollution; Surface Area Pollution", "Liquid Pollution ; Water Pollution; Human Pollution", "Liquid Pollution ; Human Pollution;  Area Pollution"],
  correct: "Atmospheric Pollution ; Water Pollution; Surface Area Pollution"
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





