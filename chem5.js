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
"id": 0,
"question": "The number of electrons in the outermost occupied orbital of Sodium",
"options": ["0", "6", "8", "2"],
"correct": "8"
},

{
"id": 1,
"question": "The principle of hybridization can be employed in describing the bonding in which of the following group of molecules:",
"options": ["H2O, N2 and HF", "HCI, NH4, and H2S", "Li H2S, HF and H2O", "NH3, H2O and CH4"],
"correct": "NH3, H2O and CH4"
},

{
"id": 2,
"question": "Which of the following statements best describes hydrogen bonding",
"options": ["Intra-atomic bonding between hydrogen and electronegative atoms of another molecule", "Intra-molecular bond ng between hydrogen and electronegative atom of another molecule", "Inter-molecular bond ng between hydrogen and electronegative atom within the same molecule", "Inter-molecular bond ng between hydrogen and electronegative atom of another molecule."],
"correct": "Inter-molecular bond ng between hydrogen and electronegative atom of another molecule."
},

{
"id": 3,
"question": "The general order of increasing strength/energy in chemical bonds is as follows:",
"options": ["lonic bond > Covalent bond > Hydrogen bond > Vander Waals bonds", "Hydrogen bond> Covalent bond> lonic bond > Vander Waals bonds", "Vander Waals bond> Hydrogen bond> Covalent bond> lonic bond", "Vander Waals bond > Hydrogen bond> lanic bond > Covalent bond."],
"correct": "lonic bond > Covalent bond > Hydrogen bond > Vander Waals bonds"
},

{
"id": 4,
"question": "Which of the following gives a different type of bounding in their order of decreasing energy?",
"options": ["Covalent>hydrogen> van Der Waal > electrovalent", "hydrogen> covalent> van der waal > electrovalent", "Electrovalent > covalent> van Der Waal > hydrogen", "Electrovalent> covalent > hydrogen > van Der waal"],
"correct": "Electrovalent> covalent > hydrogen > van Der waal"
},

{
"id": 5,
"question": "Which of the following has the greatest tendency to form covalent compounds?",
"options": ["Aluminium", "Calcium", "Magnesium", "Sodium"],
"correct": "Aluminium"
},

{
"id": 6,
"question": "The energy of the photons, 'E' emitted or absorbed by a substance is proportional to the",
"options": ["Frequency of light", "Spectrun of hydrogen", "Speed of photons", "Speed of light"],
"correct": "Frequency of light"
},

{
"id": 7,
"question": "The Azimuthal quantum Number 'L' corresponds to F-orbital is",
"options": ["3", "4", "1", "2"],
"correct": "3"
},

{
"id": 8,
"question": "Who postulated the theory the electrons in an atom revolve around the nucleus along certain orbits",
"options": ["Nells Bohr", "JJ. Thompson", "John Dalton", "Ernest Rutherford"],
"correct": "Ernest Rutherford"
},

{
"id": 9,
"question": "Cathode rays",
"options": ["A consist of tiny particles bearing charges", "consist of particles having a constant charge-to-mass ratio no matter the gas used in the tube or the nature of the electrodes", "Cannot cause the motion of a mechanical paddle wheel placed along their path.", "Can cause the emission of x-rays on hitting a metal target"],
"correct": "consist of particles having a constant charge-to-mass ratio no matter the gas used in the tube or the nature of the electrodes"
},

{
"id": 10,
"question": "Which of the following is used to shield alpha radiation fall-outs in Rutherford's experiment?",
"options": ["Lead block", "Iron block", "Wood block", "Aluminum block"],
"correct": "Lead block"
},

{
"id": 11,
"question": "What did Millikan calculate in the oil drop experiment?",
"options": ["Charge-to-mass ratio", "mass of the electron", "charge of the electron", "mass of the proton"],
"correct": "Charge-to-mass ratio"
},

{
"id": 12,
"question": "The lines observed in the hydrogen spectroscope are due to:",
"options": ["loss of electrons from the at om", "loss of neutrons from the atom", "emission protons transitions", "emission of energy by electrons transitions"],
"correct": "emission of energy by electrons transitions"
},

{
"id": 13,
"question": "According to Chardwick, the Nucleus of an atom consists of",
"options": ["electrons and protons", "neutrons and electrons", "protons only", "protons and neutrons"],
"correct": "protons and neutrons"
},

{
"id": 14,
"question": "Each of A- and B+ has a total of 18 electrons. The nuclei of the neutral atoms of A and B respectively contain--",
"options": ["20 and 20 protons", "19 and 19 protons", "17 and 19 protons", "19 and 21 protons"],
"correct": "17 and 19 protons"
},

{
"id": 15,
"question": "Which of the following is used in archaeology?",
"options": ["12C6", "13C6", "14C6", "3H1"],
"correct": "14C6"
},

{
"id": 16,
"question": "If the ground state electronic configuration of an element Q is 1S² 2S² 2P⁶ 3S² what will be the atomic number of its cation Q2+",
"options": ["22", "12", "24", "18"],
"correct": "12"
},

{
"id": 17,
"question": "The K-shell of an atom is first fed with electrons before the L-shell due to the fact that the K-shell ?",
"options": ["has only one type of orbital", "can accommodate only two electrons", "Has few subshell than the L-shell", "is lower in energy than the L-shell"],
"correct": "is lower in energy than the L-shell"
},

{
"id": 18,
"question": "Pauli exclusion principle deals with",
"options": ["collision theory of reaction rates", "electronegativity values of elements", "quantum numbers of orbital electrons", "reversibility of equilibrium reactions"],
"correct": "quantum numbers of orbital electrons"
},

{
"id": 19,
"question": "One of the following statement; is TRUE about isotopes of the same element",
"options": ["they have the same mass nu.mber", "they have the same number of neutrons", "they have the same number of electron", "they have the same atomic number."],
"correct": "they have the same atomic number."
},

{
"id": 20,
"question": "Given that the e/m ratio of an electron is 1.76 x 10-¹¹ Coulomb/kg and the charge on an electron as 1.60 x 10 Coulomb. Estimate the mass of the electron.",
"options": ["9.11 x 10-¹¹ kg", "9.11 x 10¹¹ kg", "91.1 x 10-31 kg", "1.60 x 10-31 kg"],
"correct": "9.11 x 10-¹¹ kg"
},

{
"id": 21,
"question": "Which of the following ions is discharged at the anode during the electrolysis of, a concentrated solution containing H+, Cu2+, OH and Cl- using carbon electrodes?",
"options": ["Cl-", "OH-", "Cu2+", "H+"],
"correct": "Cl-"
},
{
"id": 22,
"question": "Which of the following ions would migrate to the cathode during electrolysis?",
"options": ["Sodium ions", "Hydroxide ions", "Sulphide ions", "Chloride ions"],
"correct": "Sodium ions"
},

{
"id": 23,
"question": "Given the following half-cell reaction, calculate the corresponding E° Cell (Cell voltage) Fe³+/Fe²-. E=0.771V, 1³- /I-, E= 0.536 V",
"options": ["0.235V", "-0.235V", "1.337V", "-0.71V"],
"correct": "1.337V"
},

{
"id": 24,
"question": "Two radioactive elements Q an S have half-lives of 10 hrs and 20 hrs respectively. Therefore",
"options": ["S decays faster than Q", "Q is twice as table as S", "Q emits fewer particles than S", "S is more stable than Q"],
"correct": "S is more stable than Q"
},

{
"id": 25,
"question": "Radioactivity may be detected by the following except?",
"options": ["Scintillation counters", "Geiger-Muller counters", "Spinthariscopes", "Photographic film"],
"correct": "Photographic film"
},

{
"id": 26,
"question": "The following are the application of radioactive isotopes except",
"options": ["Radiotherapy", "Radioactive tracers", "Thickness and density measurements", "Enzymatic dilutions"],
"correct": "Enzymatic dilutions"
},

{
"id": 27,
"question": "The pH of a 2.0 x10-3 M solution of HCI is",
"options": ["2.70", "3.72", "2.73", "7.20"],
"correct": "2.70"
},

{
"id": 28,
"question": "What is the slope following the linearization of Arrhenius equation?",
"options": ["-Ea/RT", "Ao/RT", "-Ea/R", "Ea/RT"],
"correct": "-Ea/R"
},

{
"id": 29,
"question": "What type of radiation has the highest energy and the shortest wavelength, and is able to travel long distances in air and penetrate thick materials, including lead and concrete?",
"options": ["Alpha radiation", "Beta radiation", "Gamma radiation", "Ultraviolet radiation"],
"correct": "Gamma radiation"
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














