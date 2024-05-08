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
    "question": "Which of these is the most advanced phylogenetically among the dicotyledonous families?",
    "options": ["Scrophulariaceae", "Acanthaceae", "Umbelliferae", "Compositae"],
    "correct": "Compositae"
  },
  {
    "id": "2",
    "question": "The substitute for the newly collected specimen when the original type material is missing in a herbarium is entitled as",
    "options": ["Holotype", "Neotype", "Lectotype", "Isotype"],
    "correct": "Neotype"
  },
  {
    "id": "3",
    "question": "If all the puddles and ponds are destroyed, the entities likely to be destroyed are",
    "options": ["Plasmodium", "Ascaris", "Leishmania", "Trypanosoma"],
    "correct": "Plasmodium"
  },
  {
    "id": "4",
    "question": "In the five-kingdom system of classification, into which kingdom would you classify nitrogen-fixing organisms and archaea?",
    "options": ["Fungi", "Plantae", "Protista", "Monera"],
    "correct": "Monera"
  },
  {
    "id": "5",
    "question": "This is considered as a demerit of the 'Engler and Prantl' in the system of classification",
    "options": ["Gymnosperms are placed between monocotyledons and dicotyledons", "Dicotyledons are placed after monocotyledons", "Dicotyledons are placed before monocotyledons", "Gymnosperms are placed among dicotyledons"],
    "correct": "Dicotyledons are placed after monocotyledons"
  },
  {
    "id": "6",
    "question": "Phenetic classification is based on",
    "options": ["Observable characteristics of existing entities", "The ancestral lineage of existing organisms", "Dendrograms based on DNA characteristics", "Sexual characteristics"],
    "correct": "Observable characteristics of existing entities"
  },
  {
    "id": "7",
    "question": "Difference between the natural system of plant classification and artificial system of classification is",
    "options": ["Considers only one vegetative character", "Considers all the similarities between plants", "Considers only one floral character", "All of the above"],
    "correct": "Considers all similarities between plants"
  },
  {
    "id": "8",
    "question": "This system of classification was used by Linnaeus",
    "options": ["Phylogenetic system", "Natural system", "Artificial system", "Asexual system"],
    "correct": "Artificial system"
  },
  {
    "id": "9",
    "question": "Pick the right sequence of taxonomic categories",
    "options": ["Division-Class-Family-Tribe-Order-Genus-Species", "Division-Class-Family-Order-Tribe-Genus-Species", "Division-Class-Order-Family-Tribe-Genus-Species", "Division-Order-Class-Family-Genus-Tribe-Species"],
    "correct": "Division-Class-Order-Family-Tribe-Genus-Species"
  },
  {
    "id": "10",
    "question": "'New Systematics' term was coined by",
    "options": ["Linnaeus", "Bentham and Hooker", "A.P. de Candolle", "Julianne Huxley"],
    "correct": "Julianne Huxley"
  },
  {
    "id": "11",
    "question": "Foeniculum vulgare belongs to family?",
    "options": ["Rutaceae", "Meliaceae", "Apiaceae", "Brassicaceae"],
    "correct": "Apiaceae"
  },
  {
    "id": "12",
    "question": "When two or more authors publish a new species or propose a new name, their names are linked using the epithet",
    "options": ["In", "Ex", "Et", "Emend"],
    "correct": "Et"
  },
  {
    "id": "13",
    "question": "Binomials with identical genus name and specific epithet are called?",
    "options": ["Homonym", "Tautonym", "Basionym", "Synonym"],
    "correct": "Tautonym"
  },
  {
    "id": "14",
    "question": "The principles of numerical taxonomy were developed by?",
    "options": ["Bentham and Hooker", "Engler and Prantl", "Sneath and Sokal", "Takhtajan and Conquest"],
    "correct": "Sneath and Sokal"
  },
  {
    "id": "15",
    "question": "A document containing a comprehensive account of a specific taxonomy group, generally genus or family is?",
    "options": ["Manual", "Flora", "Monograph", "Revision"],
    "correct": "Monograph"
  },
  {
    "id": "16",
    "question": "The newly collected specimen which is used as a substitute is missing in a herbarium is designated as?",
    "options": ["Lectotype", "Holotype", "Neotype", "Isotype"],
    "correct": "Neotype"
  },
  {
    "id": "17",
    "question": "The Commelinaceae family is commonly known as the?",
    "options": ["Spiderwort family", "Aster family", "Grass family", "Lily family"],
    "correct": "Spiderwort family"
  },
  {
    "id": "18",
    "question": "Level of taxonomic study concerned with the biological aspect of taxa, including intraspecific population speciation, evolutionary rates and trends",
    "options": ["Alpha taxonomy", "Beta taxonomy", "Gamma taxonomy", "Theta taxonomy"],
    "correct": "Gamma taxonomy"
  },
  {
    "id": "19",
    "question": "Labellum in Orchidaceae comes to anterior side by the twisting of the ovary through 180 degrees",
    "options": ["Adnation", "Articulation", "Respiration", "Attenuation"],
    "correct": "Articulation"
  },
  {
    "id": "20",
    "question": "Linnaeus is credited introducing?",
    "options": ["The concept of inheritance", "Law of limiting factor", "Theory of heredity", "Binomial nomenclature"],
    "correct": "Binomial nomenclature"
  },
  {
    "id": "21",
    "question": "One of the best method of understanding general relationship of plants is?",
    "options": ["Cytotaxonomy", "Experimental taxonomy", "Numerical taxonomy", "Chemotaxonomy"],
    "correct": "Chemotaxonomy"
  },
  {
  "id": "22",
  "question": "A-taxonomy deals with?",
  "options": ["Classical taxonomy", "Chemo taxonomy", "Phylogeny", "Experimental taxonomy"],
  "correct": "Classical taxonomy"
},
{
  "id": "23",
  "question": "Polyadelphous condition is found in?",
  "options": ["Leguminosae", "Rutaceae", "Compositae", "Liliaceae"],
  "correct": "Rutaceae"
},
{
  "id": "24",
  "question": "Synandrous condition is common in the family",
  "options": ["Umbelliferae", "Rosaceae", "Malvaceae", "Cucurbitaceae"],
  "correct": "Cucurbitaceae"
},
{
  "id": "25",
  "question": "Indefinite stamens are characteristics of family",
  "options": ["Malvaceae", "Gramineae", "Lamiatae", "Cruciferae"],
  "correct": "Malvaceae"
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
    if(questionCount == quizArray.length-1){
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



