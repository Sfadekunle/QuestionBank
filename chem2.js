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
  id: "1",
  question: "Choose the invalid statement among the following:",
  options: [
    "Conversion of acetic acid to methyl acetate can be enhanced by raising the temperature",
    "Kp and Kc are equal for dissociation of dinitrogen tetroxide",
    "Fused sodium chloride is a strong electrolyte",
    "All of the above"
  ],
      "correct": "Fused sodium chloride is a strong electrolyte"
  },
{
  id: "2",
  question: "Which of the following compounds is a weak electrolyte?",
  options: [
    "H3PO4",
    "K₂SO",
    "MgCl2",
    "None of the above"
  ],
  "correct": "H3PO4",
},
{
  id: "3",
  question: "Synthesis of sulphur trioxide by the contact process is favoured by:",
  "options": [
    "Decrease in temperature",
    "Increase in pressure",
    "All of the above",
    "None of the above"
  ],
  "correct": "Increase in pressure",
},
{
  id: "4",
  question: "The correct relationship for the dissociation of phosphorus pentachloride is:",
  options: [
    "Kp = Kc(RT)",
    "Kp = Kc(RT)-²",
    "Kp Kc (RT)-¹",
    "None of the above"
  ],
  correct: "Kp = Kc(RT)-²",
},
{
    id: "5",
  question: "Electrolysis of fused sodium chloride solution using graphite electrode gives:",
  options: [
    "Sodium at cathode and chlorine at anode",
    "Sodium at cathode and chloride at anode",
    "Sodium at cathode and oxygen at anode",
    "None of the above"
  ],
  correct: "Sodium at cathode and chlorine at anode",
},
{
  id: "6",
  question: "Faraday's First Law of Electrolysis states that:",
  options: [
    "The mass of any substance liberated is proportional to the quantity of electricity passing through the electrolyte",
    "The quantity of electricity required to liberate one mole of an element is proportional to its valency",
    "The electrolytic conductivity of a weak electrolyte is proportional to its molar conductivity",
    "None of the above"
  ],
  correct: "The mass of any substance liberated is proportional to the quantity of electricity passing through the electrolyte",
},
{
  id: "7",
  question: "In an experiment, hydrogen iodide was found to be 24.7% dissociated at 800K. Calculate the equilibrium constant at this temperature:",
  options: [
    "9.29",
    "0.33",
    "0.11",
    "3.05"
  ],
    correct: "0.11",
},

    { 
  id: "8",
  question: "Select the appropriate expression among the following, that is applicable to the ammonia equilibrium:",
  options: [
    "Kc (4x²V²)/(27(1-x)⁴}",
    "Kc = {4x²(4-2x)}/{27(1-x)⁴}",
    "Kc = {4x²V²}/{3(1-x)⁴)",
    "Kc = (4x²V²}/{9(1-x)⁴}"
  ],
  correct: "Kc = {4x²V²}/{3(1-x)⁴)",},
    {  
  id: "9",
  question: "Given that the electrolytic conductivity of a solution containing 3 g of calcium chloride in 250 cm³ aqueous solution is 1.6 x 103 Sm at 20°C. Calculate the molar conductivity of the solution at 20°C. (Ca=40, CI = 35.5)",
  options: [
    "1.0 x 10^5 S m² mol",
    "1.5 x 10^5 S m² mol¹",
    "1.3 x 10^4 S m² mol",
    "1.3 x 10^4 S m'' mol²"
  ],
  correct: "1.5 x 10^5 S m² mol¹",
    },
    {
  id: "10",
  question: "The Kc for dimerization of nitrogen (IV) oxide at -10°C is 70.5. Evaluate the Kp at this temperature. (R= 8.314 J K mol)",
  options: [
    "5.9 x 10^3",
    "-5.9 x 10^3",
    "3.2 x 10^2",
    "1.6 x 10^2"
  ],
  correct: "3.2 x 10^2",
    },
    {
  id: "11",
  question: "Gases exhibit remarkable deviation from ideality particularly at low temperatures and high pressures due to:",
  options: [
    "Molecules do not exert any force of attraction on each other",
    "Molecules do exert any force of attraction on each other",
    "The volume occupied by gas molecules is large compared to the total volume of the gas",
    "None of the above"
  ],
  correct: "Molecules do exert any force of attraction on each other"
},
{
  id: "12",
  question: "The space molecules can move is always less than the total volume of gas by an amount equal to:",
  options: [
    "Intruded volume",
    "Extruded volume",
    "Real volume",
    "Ideal volume"
  ],
  correct: "Intruded volume"
},
{
  id: "13",
  question: "Molecules exert cohesive forces on each other under following conditions:",
  options: [
    "Low temperature and high pressure",
    "High temperature and low pressure",
    "Low temperature and low pressure",
    "High temperature and high pressure"
  ],
  correct: "High temperature and high pressure"
},
{
  id: "14",
    question: "Which of these categories of cations violates the octet rule?",
  options: [
    "Cations having 18 electrons in their outermost shell e.g Cd (2,8,18,18)",
    "Cations form in their outermost shell with the preceded shell containing 18 electrons e.g Pb (2, 8, 18, 32, 18, 2)",
    "Cations having 8 electrons in their outermost shell e.gsCs (2, 8, 18, 18, 8)",
    "Cations of the transition and the inner transition metals having 9 to 17 electrons in their outermost shells"
  ],
  correct: "Cations having 8 electrons in their outermost shell e.gsCs (2, 8, 18, 18, 8)"
},
  
{
  id: "15",
  question: "Who postulated the theory that electrons in an atom revolve around the nucleus along certain orbits situated at various distances from the nucleus?",
  options: [
    "Neils Bohr",
    "JJ. Thompson",
    "John Dalton",
    "Ernest Rutherford"
  ],
  correct: "Neils Bohr"
},
{
  id: "16",
  question: "The mass of an atom is a measure of",
  options: [
    "The number of protons and electrons",
    "The number of neutrons and protons",
    "Its electrochemical potential",
    "The number of neutrons and electrons"
  ],
    correct: "The number of neutrons and protons"
},
{
  id: "17",
  question: "An atom X has atomic number of 55 and atomic mass of 133. The nucleus of X then has",
  options: [
    "55 protons and 78 electrons",
    "78 protons and 55 electrons",
    "78 protons and 55 neutrons",
    "55 protons and 78 neutrons"
  ],
  correct: "55 protons and 78 neutrons"
},
{
  id: "18",
  question: "An atom of an element has Y protons, X neutrons and Z electrons, its mass number is..",
  options: [
    "X+Y",
    "X+Z",
    "X+Y+Z",
    "Y+Z"
  ],
  correct: "X+Y"
},
{
  id: "19",
    question: "What determines the stability of the atomic nucleus is",
  options: [
    "Neutron/electron ratio",
    "Positron/neutron ratio",
    "Electron/proton ratio",
    "Neutron/proton ratio"
  ],
  correct: "Electron/proton ratio"
},
    {
         id: "20",
        question: "Which of the following is correct?",
        options: [
    "NaF < NaCl < NaI < NaBr",
    "NaI < NaBr < NaCl < NaF",
    "NaF < NaCl < NaBr < NaI",
    "NaI < NaCl < NaF < NaBr"
  ],
  correct: "NaI < NaCl < NaF < NaBr"
},
  {
    id: "21",
    question: "Which of the following statements is not true about electrovalency?",
    options: [
      "A bond is formed by the complete transfer of one or more electrons from one atom to another.",
      "A bond is formed by the sharing of one or more electrons between atoms.",
      "The ions involved are held together by the Coulomb’s force.",
      "Compounds formed are solid with high melting and boiling point and soluble in polar solvents."
    ],
    correct: "A bond is formed by the sharing of one or more electrons between atoms."
  },
  {
    id: "22",
    question: "Which of these statements about covalency is false?",
    options: [
      "Non-metallic atoms cannot form covalent bonds.",
      "Covalent bonding involves sharing of electrons between two elements.",
      "The difference in the electronegativity values must be less than 1.7.",
      "The greater the difference in electronegativity values, the higher the tendency to form electrovalent compounds."
    ],
    correct: "Non-metallic atoms cannot form covalent bonds."
  },
  {
    id: "23",
    question: "Why is AlF₈ an electrovalent compound whereas Al₂Cl₆ is covalent?",
    options: [
      "Because of the small ionic size of F coupled with its high electronegativity that contributes to higher lattice energy of AlF.",
      "Because of the fewer atoms in the former than the latter.",
      "Because the compound with fewer atoms would be more electrovalent.",
      "None of the above."
    ],
    correct: "Because of the small ionic size of F coupled with its high electronegativity that contributes to higher lattice energy of AlF."
  },
  {
      id: "24",
    question: "Which of these statements is false?",
    options: [
      "Sigma bonds are stronger than pi bond.",
      "Pi bonds are formed head-head overlap of atomic orbitals.",
      "Sigma bonds are formed through head-head overlap of atomic orbitals.",
      "The overlap between two s orbitals produce essentially sigma bonds."
    ],
    correct: "Sigma bonds are formed through head-head overlap of atomic orbitals."
  },
    {
    id: "25",
    question: "In N₂ molecule, we have",
    options: [
      "One sigma bond and one pi bond.",
      "One sigma bond and two pi bonds.",
      "Two sigma bonds and one pi bond.",
      "Two sigma bonds and two pi bonds."
    ],
    correct: "Two sigma bonds and one pi bond."
  },
  {
    id: "26",
    question: "SP hybridization does not exist in which of these compounds?",
    options: [
      "H₂O",
      "NH₃",
      "CH₄",
      "H₂"
    ],
    correct: "H₂"
  },
  {
    id: "27",
    question: "Identify the wrong statement relating to hybridization concept.",
    options: [
      "Hybridization results from the mixing of different atomic orbitals.",
      "Hybrid orbitals formed are completely different.",
      "The bond angle in H₂O > NH₃ > CH₄.",
      "H₂O is more distorted because it has more/lone pairs of electrons."
    ],
    correct: "Hybrid orbitals formed are completely different."
  },
  {
    id: "28",
    question: "Which of these statements is true?",
    options: [
      "Hydrogen bond results from the overlap of the atomic orbital of the hydrogen atom of one molecule with the electronegative element in another molecule.",
      "The overall effect of hydrogen bonding is mostly negligible because the bond formed has an energy value of only 2090 Mol.",
      "The hydrogen bonding is greater than for covalent but lesser than those for ionic bonds.",
      "Hydrogen bond results from the overlap of the atomic orbital of the hydrogen atom of one molecule with the electronegative element of the same molecule."
    ],
    correct: "Hydrogen bond results from the overlap of the atomic orbital of the hydrogen atom of one molecule with the electronegative element of the same molecule."
  },
  {
    id: "29",
    question: "The trend of boiling point in alkanes and noble gases follows the following pattern except",
    options: [
      "Increasing with increasing molecular weight.",
      "Decreasing down the group for the noble gases.",
      "Increasing down the group for the noble gases.",
      "Increasing with the number of carbon among the alkane homologues."
    ],
    correct: "Increasing down the group for the noble gases."
  },
  {
    id: "30",
    question: "The trend of boiling point amongst the hydrides of Group 5 & 6 elements follows the following pattern except",
    options: [
      "NH₃ > PH₃ > AsH₂ > SbH₃",
      "H₂O > H₂S > H₂Se > H₂Te",
      "H₂O < H₂S < H₂Se < H₂Te",
      "SbH₃ < AsH₃ < PH₃ < NH₄"
    ],
    correct: "SbH₃ < AsH₃ < PH₃ < NH₄"
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
    count = 20* 45;
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






