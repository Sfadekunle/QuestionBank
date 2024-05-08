
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
  "question": "The natural place of an organism or community is known as",
  "options": ["Niche", "Biome", "Habitat", "Habit"],
  "correct": "Habitat"
},
{
  "id": "2",
  "question": "Which is the renewable exhaustible natural energy resource?",
  "options": ["Coal", "Petroleum", "Kerosene", "Biomass"],
  "correct": "Biomass"
},
{
  "id": "3",
  "question": "According to Shelford’s Law of Tolerance, the organisms wide environmental factor tolerance limit show",
  "options": ["Narrow distribution with low population size", "Wide distribution with high population size", "Narrow distribution with high population size", "Wide distribution with low population size"],
  "correct": "Wide distribution with high population size"
},
{
  "id": "4",
  "question": "Plants growing under direct sunlight are known as",
  "options": ["Heliophytes", "Sciophytes", "Psamophytes", "Dicots"],
  "correct": "Heliophytes"
},
{
  "id": "5",
  "question": "Plants growing under shade are known as",
  "options": ["Psamophytes", "Sciophytes", "Heliophytes", "Monocots"],
  "correct": "Sciophytes"
},
{
  "id": "6",
  "question": "An orchid living on a tree exhibits",
  "options": ["Predator", "Mutualism", "Commensalism", "Parasitism"],
  "correct": "Commensalism"
},
{
  "id": "7",
  "question": "Which statement is correct with respect to the food chain?",
  "options": ["Every component of the food chain forms a trophic level", "Inter-relation between different food chains is known as a food web", "All the chains formed by nutritional relations are used to understand energy flow", "All of the above"],
  "correct": "All of the above"
},
{
  "id": "8",
  "question": "The process of vernalization is practiced in",
  "options": ["Cold countries", "Hot countries", "Only in sub-tropical countries", "Only in tropical countries"],
  "correct": "Cold countries"
},
{
  "id": "9",
  "question": "Which of the following requires maximum energy?",
  "options": ["Secondary consumer", "Decomposer", "Primary consumer", "Primary producer"],
  "correct": "Primary producer"
},
{
  "id": "10",
  "question": "The bottom area where production is less than respiration in a pond ecosystem is termed as",
  "options": ["Profundal zone", "Tidal zone", "Benthic zone", "Limnetic zone"],
  "correct": "Profundal zone"
},
{
  "id": "11",
  "question": "Which is not a characteristic of ‘r’ selected species?",
  "options": ["Reproduce quickly", "Parental care", "A low survival rate of progenies", "Produce a large number of progenies"],
  "correct": "Parental care"
},
{
  "id": "12",
  "question": "Which is not the characteristic of a population?",
  "options": ["Natality", "Mortality", "Stratification", "Sex ratio"],
  "correct": "Stratification"
},
{
  "id": "13",
  "question": "Lincoln index measures",
  "options": ["Population mortality rate", "Population natality rate", "Population size", "Population density"],
  "correct": "Population size"
},
{
  "id": "14",
  "question": "Allelopathy refers to",
  "options": ["Inhibition of growth of one species by another by the production of toxins", "Inhibition of sporulation of pathogen by the host", "Altering the reproductive cycle of one organism by another", "Inhibition of growth of one species by another by preventing reproduction"],
  "correct": "Inhibition of growth of one species by another by the production of toxins"
},
{
  "id": "15",
  "question": "The ratio between energy flow at different points in a food chain is known as",
  "options": ["Ecological capacity", "Ecological efficiency", "Ecological assimilation", "Ecological potential"],
  "correct": "Ecological efficiency"
},
{
  "id": "16",
  "question": "The ability of a population to increase under ideal environmental conditions is called",
  "options": ["Natality", "Carrying capacity", "Biotic potential", "Absolute natality"],
  "correct": "Biotic potential"
},
{
  "id": "17",
  "question": "In an ecosystem, the energy flow is always",
  "options": ["Always unidirectional", "Always bidirectional", "In any direction", "Always downward directional"],
  "correct": "Always unidirectional"
},
{
  "id": "18",
  "question": "In thermal stratification, the middle region which shows vertical temperature change is called",
  "options": ["Mesolimnion", "Epilimnion", "Metalimnion", "Hypolimnion"],
  "correct": "Metalimnion"
},
{
  "id": "19",
  "question": "Select a non-denitrifying bacteria",
  "options": ["Pseudomonas aeruginosa", "Thiobacillus", "Thiobacillus denitrificans", "Bacillus ramosus"],
  "correct": "Bacillus ramosus"
},
{
  "id": "20",
  "question": "Which one is a ‘K’ selected species?",
  "options": ["Aspergillus", "Human", "Taraxacum", "Grass"],
  "correct": "Human"
},
{
  "id": "21",
  "question": "All species of Lemur are endemic to which area?",
  "options": ["Madagascar", "Seychelles Island", "Galapagos Island", "New Caledonia"],
  "correct": "Madagascar"
},
{
  "id": "22",
  "question": "The upper part of an aquatic ecosystem contains",
  "options": ["Nekton", "Plankton", "Benthos", "both (1) and (2)"],
  "correct": "Plankton"
},
{
  "id": "23",
  "question": "What type of food chain is it? dead animals → lowfly maggot → maggots → frog → snake",
  "options": ["Detrital food chain", "Decomposer food chain", "Predator food chain", "Grazing food chain"],
  "correct": "Detrital food chain"
},
{
  "id": "24",
  "question": "Identify the mismatched pair",
  "options": ["Tundra – Permafrost", "Savanna – Acacia trees", "Prairie – Epiphytes", "Coniferous forest – Evergreen trees"],
  "correct": "Prairie – Epiphytes"
},
{
  "id": "25",
  "question": "“The pyramid of energy is always upright” states that",
  "options": ["The energy conversion efficiency of herbivores is better than carnivores", "The energy conversion efficiency of carnivores is better than herbivores", "Producers have the lowest energy conversion efficiency", "Energy conversion efficiency is the same in all trophic levels"],
  "correct": "The energy conversion efficiency of herbivores is better than carnivores"
},
{
  "id": "26",
  "question": "The population of birds declined in an area where DDT was extensively used. Why?",
  "options": ["The birds stopped laying eggs", "The eggs laid by the birds did not hatch", "The snakes ate the eggs", "The DDT spray killed all the birds"],
  "correct": "The eggs laid by the birds did not hatch"
},
{
  "id": "27",
  "question": "Which of the following lake zones has phytoplanktons in abundance?",
  "options": ["Littoral zone", "Benthic zone", "Limnetic zone", "Profundal zone"],
  "correct": "Limnetic zone"
},
{
  "id": "28",
  "question": "Plant species with a wide range of genetic distribution evolve into a local population known as",
  "options": ["Ecotype", "Population", "Ecosystem", "Biome"],
  "correct": "Ecotype"
},
{
  "id": "29",
  "question": "dB is the abbreviation used for the quantitative expression of",
  "options": ["The density of bacteria in a medium", "A Particular Pollutant", "Dominant Bacillus in a culture", "A pesticide"],
  "correct": "A Particular Pollutant"
},
{
  "id": "30",
  "question": "The eggshell of birds becomes thin by the pollution from pesticides due to the interference in the activity of",
  "options": ["Calmodulin", "MgATPase", "CaATPase", "Calcium"],
  "correct": "CaATPase"
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



