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
"id": "1",
"question": "Which of the following statement is TRUE about chemical kinetic?",
"options": ["The volume is directly proportional to the temperature", "Concentration and pressure are virtually the same in gaseous reaction", "The no of moles is inversely proportional to the pressure", "The universal gas constant, R is synonymous with rate"],
"correct": "Concentration and pressure are virtually the same in gaseous reaction"
},

{
"id": "2", 
"question": "Which of the following is not related to conversion",
"options": ["Estimation of conversion is in no way time bound", "It is a dimensionless quantity", "Its values varies between zero and one", "It is not the same as yield"],
"correct": "It is not the same as yield"
},

{
"id": "3",
"question": "Which of the following statement is NOT true of the rate law",
"options": ["It is always a positive quantity", "Its unit is dependent on the power to which the concentration is raised", "It is influenced by pressure, temperature and concentration", "It has a unit of mol/dm³-sec"],
"correct": "Its unit is dependent on the power to which the concentration is raised"
},

{
"id": "4",
"question": "What is the unit of the reaction rate constant in a reaction with the order of 4?",
"options": ["mol/dm³-sec", "mol-³ (dm³)³ sec-¹", "mol-⁴ (dm³)⁴ sec-¹", "mol (dm³)³ sec-³"],
"correct": "mol (dm³)³ sec-³"
},

{
"id": "5",
"question": "What is the concentration of a NaOH left after 2.5 mins if the its reaction with a unknown substance proceeded via a first order, and the initial concentration of the NaOH was 0.8 mol dm and the reaction rate constant is 0.0075 sec.",
"options": ["0.26 mol dm3", "0.56 mol dm3", "0.46 mol dm3", "0.36 mol dm3"],
"correct": "0.36 mol dm3"
},

{
"id": "6",
"question": "How long does it take ethanoic acid in a chemical to reduce to half its initial concentration, given that the initial concentration is 0.56 mol dm and the rate constant is 0.54mol (dm3) sec for a second order reaction.",
"options": ["0.56 sec", "0.24 sec", "3.31 sec", "4.76 sec"],
"correct": "3.31 sec"
},

{
"id": "7",
"question": "One of the following statement is INCORRECT",
"options": ["The half-life of a zero order is directly proportional to initial concentration", "The half-life of a first order reaction is dependent of initial concentration", "For a second order, the half life is inversely proportional to the initial concentration", "Half life can be mathematically represented as Ct0.5 = Cao(-n+1)"],
"correct": "The half-life of a first order reaction is dependent of initial concentration"
},

{
"id": "8",
"question": "The actual number of atoms of each element in a molecule is given by:",
"options": ["Actual formula", "Numerical formula", "Molecular formula", "Emperical formula"],
"correct": "Molecular formula"
},

{
"id": "9",
"question": "Those ions that remain in solution after the reaction has completed are called",
"options": ["Vehicle ions", "Particulate ion", "Spectator ions", "Indicator ions"],
"correct": "Spectator ions"
},

{
"id": "10",
"question": "Another name for synthesis reaction is called:",
"options": ["Substitution reactions", "Activity reactions", "Composition reactions", "Displacement reactions"],
"correct": "Composition reactions"
},

{
"id": "11",
"question": "Choose the invalid statement among the following:",
"options": ["Conversion of acetic acid to methyl acetate can be enhanced by raising the temperature", "Kp and Kc are equal for hydrogenation of Iodine", "NaCl is a typical electrolyte", "None of the above"],
"correct": "None of the above"
},

{
"id": "12",
"question": "Which of the following compounds is a weak electrolyte?",
"options": ["K2SO4", "MgCl2", "H3PO4", "None of the above"],
"correct": "H3PO4"
},

{
"id": "13",
"question": "Synthesis of ammonia gas by the Haber's process is favoured by",
"options": ["Decrease in temperature", "Increase in pressure", "All of the above", "None of the above"],
"correct": "All of the above"
},

{
"id": "14",
"question": "For the dissociation of dinitrogen tetroxide, the correct relationship is:",
"options": ["Kp = KC(RT)²", "Kp = Kc (RT)-²", "Kp = Kc(RT)-¹", "None of the above"],
"correct": "Kp = KC(RT)²"
},

{
"id": "15",
"question": "Electrolysis of dilute sodium sulphate solution using platinum as the electrode gives::",
"options": ["Sodium at cathode and sulphate at anode", "Sodium at cathode and oxygen at anode", "Sodium at cathode and sulphur at anode", "None of the above"],
"correct": "None of the above"
},

{
"id": "16",
"question": "Faraday's Second Law of Electrolysis states that:",
"options": ["The mass of any substance liberated is proportional to the quantity of electricity passing through the electrolyte", "The quantity of electricity required to liberate one mole of an element is proportional to its valency", "The electrolytic conductivity of a weak electrolyte is proportional to its molar conductivity", "None of the above"],
"correct": "The mass of any substance liberated is proportional to the quantity of electricity passing through the electrolyte"
},

{
"id": "17",
"question": "Which of the following compounds is not a strong electrolyte",
"options": ["NaOH", "HCI", "CdCl2", "MgCl2"],
"correct": "CdCl2"
},

{
"id": "18",
"question": "Select the appropriate expression(s) that is (are) applicable to the ammonia equilibrium:",
"options": ["KC = 4x²v²/27(1-x)⁴", "Kc = 4x²(4-2x)²/27(1-x)⁴", "All of the above", "None of the above"],
"correct": "All of the above"
},

{
"id": "19",
"question": "One of the following is not necessary condition in electrolysis:",
"options": ["Water", "Electrolytes", "Electrode", "Current"],
"correct": "Water"
},

{
"id": "20",
"question": "The molar conductivity at infinite dilution of acetic acid cannot be determined directly because:",
"options": ["Acetic acid is an organic compound", "Acetic acid is not polar", "None of the above", "All of the above"],
"correct": "None of the above"
},

{
"id": "21",
"question": "Given that the electrolytic conductivity of a solution containing 3 g of calcium chloride in 250 cm3 aqueous solution is 1.6 x 10m at 20°C. Calculate the molar conductivity of the solution at 20°C. (Ca =40, CI = 35.5)",
"options": ["1.0 x 10-⁵ Sm²mol-¹", "1.5 x10-⁵Sm² mol-¹", "1.3 x 10-⁴Sm² mol-¹", "1.3 x 10-⁴ Sm-1 mol²"],
"correct": "1.5 x10-⁵Sm² mol-¹"
},

{
    "id": "22",
"question": "The Kc for dimerization of nitrogen (IV) oxidat 10°C is 70.5. Evaluate the Kp at this temperature. (R = 8.314J K mol)",
"options": ["5.9 x 10-3", "-5.9 x 10-3", "3.2 x10-2", "1.6 x 10²"],
"correct": "3.2 x10-2"
},

{
"id": "23", 
"question": "Ten (10) mg of potassium was deposited when a current of 0.5 A was passed through fused potassium chloride for 1.5 hr at 25°C. Calculate the electrochemical equivalent of potassium at this temperature.",
"options": ["1.3x10-³gC-¹", "13 mg C", "3.7 x 10-⁶gC-¹", "3.7 x 10-³gC-¹"],
"correct": "3.7 x 10-³gC-¹"
},

{
"id": "24",
"question": "What is the rate constant for a first order reaction if it's t½ = 0.6mins ?",
"options": ["0.0192sec", "1.153 sec", "0.634sec", "0.643 sec"],
"correct": "1.153 sec"
},

{
"id": "25",
"question": "Consider the reaction: CaCO ->CaO + CO2 the yield of quicklime can be increased by",
"options": ["Lowering the temperature", "Adding a catalyst", "Adding a dehydrating agent", "None of the above"],
"correct": "Adding a catalyst"
},

{
"id": "26",
"question": "Which of the following elements is not directly periodically related.",
"options": ["Sodium", "Lithium", "Potassium", "Calcium"],
"correct": "Calcium"
},

{
"id": "27",
"question": "All the under-listed atoms or ons have electronic configuration of 2, 8 except",
"options": ["Sodium atom", "Sodium ion", "Oxygen ion", "Fluoride ion"],
"correct": "Sodium atom"
},

{
"id": "28",
"question": "Which of these cations has 18 electron in its outermost shell",
"options": ["12Mg2+", "11Na+", "29Cu2+", "10Zn+2"],
"correct": "29Cu2+"
},

{
"id": "29", 
"question": "Which of the following is not true about chemical bonding",
"options": ["Strong bonds are always associated with electrovalent bonds", "The process of making and breaking of bonds determines the generally observed chemical", "Sigma bonds are stronger than pi bonds", "Pi bonds are stronger tha sigma bonds"],
"correct": "Pi bonds are stronger tha sigma bonds"
},

{
"id": "30",
"question": "Which of these gases is the most abundant in nature",
"options": ["Oxygen", "Nitrogen", "Hydrogen", "Argon"],
"correct": "Nitrogen"
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
         timeLeft.innerHTML = `${Math.floor(count / 60)}:${count % 60}s`;;
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












