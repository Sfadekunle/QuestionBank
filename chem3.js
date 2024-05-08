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
id: "0",
question: "The ratio of proton to neutron in an atom of ³⁵Cl17 is?",
options: ["17:35", "35:17", "18:17", "17:18"],
correct: "17:18"
},
{
id: "1",
question: "How many unpaired electron(s) is/are in the electron configuration 1S² 2S² 2P⁶ 3S² 3S⁵?",
options: ["1", "2", "3", "0"],
correct: "3"
},
{
id: "2",
question: "Which of the following has the same electronic configuration as 18Ar?",
options: ["Na+", "Cl-", "Fe²+", "O²-"],
correct: "Cl-"
},
{
id: "3",
question: "Which subshell has the lowest energy among 3d, 4s, 4p, and 4d?",
options: ["3d", "4s", "4p", "4d"],
correct: "4s"
},
{
id: "4",
question: "The isotopes of element A, ¹⁸A⁸ and ¹⁸A⁹, are in the proportion 10% and 90% respectively. What is the relative atomic mass of A?",
options: ["20", "18", "16.2", "19.2"],
correct: "18"
},
{
id: "5",
question: "²³⁶X92 and ²³⁸X92 are?",
options: ["Anomers", "Isomers", "Allotropes", "Isotopes"],
correct: "Isotopes"
},
{
    id: "6",
    question: "The subsidiary quantum number (l) for F-orbitals is?",
    options: ["-1", "1", "3", "-3"],
    correct: "3"
},
{
id: "7",
question: "What is the content of the nucleus of tritium?",
options: ["2 neutrons, 1 proton, and 1 electron", "2 neutrons with no proton", "2 neutrons and 1 proton", "2 protons and 1 neutron"],
correct: "2 neutrons and 1 proton"
},
{
id: "8",
question: "What did Millikan calculate in the oil drop experiment?",
options: ["Charge to mass ratio of electron", "Mass of the electron", "Charge of the electron", "Mass of the proton"],
correct: "Charge to mass ratio of electron"
},
{
id: "9",
question: "What is the unit for the rate constant for a second-order reaction?",
options: ["Sec^-1", "mol^-1(dm³)sec^-1", "mol^-2(dm³)sec^-1", "mol(dm³)^-1sec^-1"],
correct: "mol(dm³)^-1sec^-1"
},
{
id: 10,
question: "Which of the following is true about the reaction rate constant?",
options: ["It varies linearly with temperature", "It varies exponentially with reaction temperature", "Its unit depends on the reaction order", "All of the above"],
correct: "It varies exponentially with reaction temperature"
},
{
"id": "11",
"question": "The Arrhenius equation can be written in the form: Kr = Aoexp(-Ea/RT). Which statements are correct?",
"options": ["Kr, Ao, Ea, and T stands for reaction rate, pre-exponential factor, activation energy, and temperature respectively", "A plot of lnKr against 1/T gives a straight line with slope Ea/R", "A plot of lnKr against 1/T gives a straight line with intercept lnA", "All of the above"],
"correct": "All of the above"
},
{
"id": "12",
"question": "One of the following is not associated with the kinetic theory of gases.",
"options": ["Heat", "Moving molecules", "Collisions are elastic", "Endothermicity"],
"correct": "Endothermicity"
},
{
"id": "13",
"question": "Titrations are possible when the following conditions are satisfied except?",
"options": ["Equivalence point must be readily detectable", "The reaction must be relatively fast", "Impurities may not be important", "The standard reagent must react completely with the unknown"],
"correct": "Impurities may not be important"
},
{
"id": "14",
"question": "Those ions that do not normally participate in the reaction process are called?",
"options": ["Spectator ions", "Vehicle ions", "Dormant ions", "Indicator ions"],
"correct": "Spectator ions"
},
{
"id": "15",
"question": "The principle that governs chemical reactions is?",
"options": ["New substances are formed", "New elements are created", "High magnitude of energy is required", "Internal energy is reduced"],
"correct": "New substances are formed"
},
{
"id": "16",
"question": "One of the following reactions requires somewhat high energy.",
"options": ["Organic reaction", "Physical reactions", "Nuclear reaction", "Neutralization reactions"],
"correct": "Nuclear reaction"
},
{
"id": "17",
"question": "Calculate the pressure at which 2 moles of ammonia will occupy a volume of 5 dm³ at 27°C given that a = 4.17 atm dm³ mol⁻¹ and b = 0.0371 dm³ mol⁻¹.",
"options": ["8.00 atm", "8.9 atm", "9.94 atm", "10.0 atm"],
"correct": "9.94 atm"
},
{
"id": "18",
"question": "The relative number of atoms of each element in a compound is given by?",
"options": ["Empirical formula", "Molecular formula", "Numerical formula", "Relative formula"],
"correct": "Empirical formula"
},
{
"id": "19",
"question": "What weight of CaCl₂ is required to react with sufficient silver to make 10 g of AgCl?",
"options": ["0.0697 mole", "0.00697 mole", "0.0348 mole", "0.000348 mole"],
"correct": "0.0697 mole"
},
{
"id": "20",
"question": "How many moles of LiO₂ can be produced from 1.00 g of Li and 1.50 g of oxygen?",
"options": ["0.720 mole", "0.00720 mole", "0.0720 mole", "0.144 mole"],
"correct": "0.144 mole"
},
{
"id": "21",
"question": "The base that neutralizes stomach acid is?",
"options": ["CaCO₃", "CaHCO₃", "KOH", "Ca(OH)₂"],
"correct": "Ca(OH)₂"
},
{
"id": "22",
"question": "The color of silver sulphide formed when silver reacts with sulfur in the air is?",
"options": ["Silver", "White",
"Black",
"Blue"],
"correct": "Black"
},
{
"id": "23",
"question": "The following are examples of chemical changes except?",
"options": ["When iron burns in air", "A silver spoon tarnishes", "When methane burns", "Melting of gold"],
"correct": "Melting of gold"
},
{
"id": "24",
"question": "A compound was found to contain 72.0% Mn and the remainder was oxygen. Determine its empirical formula. (Mn = 59.94, O = 16)",
"options": ["MnO", "Mn₂O", "Mn₄O₃", "Mn₂O₃"],
"correct": "Mn₂O₃"
},
{
"id": "25",
"question": "Which molecule shows a decrease in PV in the beginning, passes through a minimum, and then begins to increase?",
"options": ["CO₂", "O₂", "NH₃", "He"],
"correct": "He"
},
{
"id": "26",
"question": "A radioactive solid is best stored?",
"options": ["Under paraffin oil", "Under UV light", "In a cool cupboard", "In a box lined with lead"],
"correct": "In a box lined with lead"
},
{
"id": "27",
"question": "A positron is represented as?",
"options": ["¹n0", "⁰B-₁", "⁰B1", "¹H 1"],
"correct": "¹n⁰"
},
{
"id": "28",
"question": "Which of the following will you expect a β- emission from?",
"options": ["²⁸P15", "⁴⁵K19", "⁷²Zn30", "²³Na11"],
"correct": "²⁸P 15"
},
{
"id": "29",
"question": "The binding energy of He is?",
"options": ["29.2", "81.2", "28.3", "28.1"],
"correct": "28.3"
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


nextBtn.addEventListener(
    "click",changeBtn)

backBtn.addEventListener(
    "click",changeBtn)
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






