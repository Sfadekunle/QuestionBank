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
question: "X-ray was discovered by one of the following Scientists...",
options: ["J.J. Thompson", "R. A. Millikan", "Lord Rutherford", "Roentgen"],
correct: "Roentgen",
},

{
id: "1", 
question: "The Oil drop experiment was used in the measurement of... of electron.",
options: ["Charge", "Mass", "Power", "Unit"],
correct: "Charge",
},

{
id: "2",
question: "The following are the properties of light. explained by the wave theory EXCEPT",
options: ["Reflection", "Diffraction", "Incandescence", "Polarization"],
correct: "Incandescence",
},

{
id: "3",
question: "The following are the assumptions based on Bohr's model of atoms EXCEPT",
options: ["Each spectral line is caused by an electron", "Rutherford's model of the atom is basically correct", "Electrons can exist only in circular orbits of defined quantum energy", "Interference is the superposition of light waves"],
correct: "Interference is the superposition of light waves",
},

{
id: "5",
question: "Neils Bohr used the quantum theory ideas developed by Planck and Einstein to account for",
options: ["Energy of photons", "Spectrum of Hydrogen", "Wave property of atom", "Frequency of electrons"],
correct: "Energy of photons",
},

{
id: "6",
question: "Which of the following rightly describe p-orbitals in terms of space orientation?",
options: ["1-space orientation", "5- space orientation", "3-space orientation", "7-space orientation"],
correct: "3-space orientation",
},

{
id: "7",
question: "The Azimuthal quantum number that corresponds to F-orbital is...",
options: ["3", "2", "1", "0"],
correct: "3",
},


{
"id": "8",
"question": "Which of the following is not iso-electronic with O<sub>2</sub>?",
"options": [
"F<sup>-</sup>",
"S<sub>2</sub><sup>+</sup>",
"Ne",
"Na<sup>+</sup>"
],
"correct": "Na+"
},

{ 
"id": "9", 
"question": "The relative abundances of the two isotopes of Chlorine are 75% and 25% for <sup>35</sup>Cl<sub>17</sub> and <sup>37</sup>Cl<sub>17</sub> respectively. The relative atomic mass of chlorine is...", 
"options": ["35.5", "37", "35", "17"], 
"correct": "35.5" 
},

{ 
"id": "10", 
"question": "Which of the species in the following equation is an oxidizing agent? 2H<sub>2</sub>S (g) + SO<sub>2</sub> (g) → 2H<sub>2</sub>O (l) + 3S (s)", 
"options": ["H<sub>2</sub>S", "SO<sub>2</sub>", "H<sub>2</sub>O", "S"], 
"correct": "SO2" 
},

{
id: "11",
question: "The double stroke (/) in the equation below represents Pt/Sn², Sn4 //Fe3+, Fe²/Pt2",
options: ["Separator", "Salt bridge", "Cell divider", "Alternator"],
correct: "Salt bridge",
},

{
id: "12",
question: "Given the following half-cells: Fe<sub>3+</sub> + e<sub>-</sub> Fe<sub>2+</sub> EQ=0.771V, Sn +2e Sn E0-0.154 V. Calculate the total e.m.f of the cell.",
options: ["0.620 V", "0.924 V", "0.771 V", "0.154 V"],
correct: "0.924 V",
},

{
id: "13",
question: "The Ksp of AgCl at 25°C is 1.0 x 10-12. The concentration of Ag+ and Cl- in a saturated solution of AgCl is..",
options: ["1.0 x 10-12 M", "1.0 x 106M", "1.0 x 1024 M", "1.0 x 10²M"],
correct: "1.0 x 106M",
},

{
id: "14",
question: "Which of the following substances gives a solution of pH less than 7.0 in water?",
options: ["NaCl","NH<sub>4</sub>Cl", "K₂SO4", "CaO"],
correct: "NH4Cl",
},

{
"id": "15",
"question": "Which of the following best describe the order of increasing penetrating power of the radiations?",
"options": [
"γ < α < β",
"α < β < γ",
"γ < α < β",
"α < γ < β"
],
"correct": "α < β < γ"
},
{
id: "16",
question: "Detection of radiation may be achieved through the use of the following EXCEPT",
options: ["Spinthariscopes", "Scintillation counters", "Geiger-Muller counters", "Photographic counters"],
correct: "Spinthariscopes",
},

{
"id": "17",
"question": "The values of x and y in the following equation are:<br>MnO<sub>4</sub><sup>-</sup> + xH<sup>+</sup> + ye<sup>-</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O",
"options": [
["2 and 7"],
["8 and 5"],
["4 and 6"],
["2 and 5"]
],
"correct": ["8 and 5"]
},

{
id: "18",
question: "Calculate the number of radioactive ²⁴Na atom in uci of Na. if the t1/2 of ²⁴Na is 75 hours.",
options: ["2.88 x 10⁹ atoms", "8.28 x 10⁹ atoms", "2.44 x 10⁹ atoms", "8.00 x 10⁹ atoms"],
correct: "8.28 x 10⁹ atoms",
},



{
id: "19",
question: "Choose the invalid statement among the following:",
options: ["Conversion of acetic acid to methyl acetate can be enhanced by raising the temperature", "Kp and Kc are equal for dissociation of dinitrogen tetroxide", "Fused sodium chloride is a strong electrolyte", "All of the above"],
correct: "Fused sodium chloride is a strong electrolyte",
},

{
id: "20",
"question": "The value of y in the following equation is..<sup>27</sup>Al<sub>13</sub> + <sup>4</sup>H<sub>2</sub> → <sup>y</sup>P<sub>15</sub> + <sup>1</sup>n<sub>0</sub>",
"options": [
    "30",
    "32",
    "31",
    "27"
],
"correct": "31"
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
    count = 20 *30;
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




