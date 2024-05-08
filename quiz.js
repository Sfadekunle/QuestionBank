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
let correctAns =[]
let scoreCount = 0;
let count = 20;
let countdown;

//Questions and Options array

const quizArray = [
       {
           id: "0",
           question: "Which one of the following is not a haploid cell ?",
           options: ["Nuclear", "Syncrgid", "Egg", "Non of the above"],
            correct: "Nuclear",
},
    {
id: "1", 
question: "Which of the following cell organelle contain their own DNA ?",
options: ["Plastids", "Mitochondria", "Non of the above", "All of the above"],
correct: "All of the above",
},
    {
id: "2",
question: "The cell wall of a plant is composed of ?",
options: ["Cellulose", "Lipids", "Carbohydrates", "Non of the above"], 
correct: "Cellulose",
},
    {
id: "3",
question: "Ribosomes are sites for ?",
options: ["Protein synthesis", "Photosynthesis", "Fat synthesis", "Respiration"],
correct: "Protein synthesis",
},
    {
id: "4",
question: "Which of the following organelle shows similarity to a prokaryotic cell ?",
options: ["Mitochondria only", "Chloroplast only", "Both chloroplast and mitochondria", "None of the above"],
correct: "Both chloroplast and mitochondria",
},
   {
id: "5",
question: "What is the cell wall of a plant made of ?",
options: ["Cellulose", "Carbohydrates", "Lipids", "Lipoprotein"],
correct: "Cellulose",
}, 
{
id: "6", 
question: "The outermost covering of a plant cell is constituted by ?",
options: ["Cellulose", "Lignin", "Chitin", "Clyeocalyx"],
correct: "Cellulose",
},
 {
id: "8",
question: "Which is the largest body cell ?",
options: ["Neurons", "RBCs", "Sperms", "Osteocytes"],
correct: "Neurons",
},   
    
    
    {
id: "9",
question: "Ribosomes are found of :",
options: ["DNA and protein", "DNA and RNA", "RNA and Protein", "RNA and Amino acid"],
correct: "DNA and protein",
},
{
id: "10",
question: "The full form of DNA is ?",
options: ["Deoxyribeneutral acid", "Delta nucleic acid", "Deoxyribonucleic acid", "Dyoxyenucleic"],
correct: "Deoxyribonucleic acid",
},
{
id: "11",
question: "Which of the following is an unicellular organisms?",
options: ["Amoeba", "Earthworm", "Elephant", "Monkey"],
correct: "Amoeba",
},
{
id: "12",
question: "Plasma membrane is made up of which organic molecules ?",
options: ["Carbohydrates", "Vitamin", "Lipids and Protein", "Roughage"],
correct: "Lipids and Protein",
},
{
id: "13",
question: "Chromosomes are located in the ?",
options: ["Golgi bodies", "Nucleus", "Vacuole", "Plastids"],
correct: "Nucleus",
},
{
id: "14",
question: "All the multicellular organisms start their life as a ?",
options: ["Single cell", "Double cell", "Triple cell", "Without a cell"],
correct: "Single cell",
},
{
id: "15",
question: "Who is the father of cell ?",
options: ["Olamilekan Olasehinde", "Robert Hooke", "George Mendel", "George emil palade"],
correct: "George emil palade",
},
{
id: "16",
question: "What cell is the longest in the human body ?",
options: ["Muscle cells", "Nerve cells", "Bone cells", "Gland cells"],
correct: "Nerve cells",
},
{
id: "17",
question: "This tissue includes the blood tissue",
options: ["Connective tissue", "Muscle tissue", "Nerve tissue", "Epithelial tissue"],
correct: "Connective tissue",
},
{
id: "18",
question: "Which of this is/are examples of an organ containing a smooth muscle",
options: ["Iris eye", "Bronchi only", "None of the above ", "All of the above"],
correct: "All of the above",
},
{
id: "19",
question: "This structure of the plant cell is non-living",
options: ["Nucleus", "Mitochondrion", "Cell wall", "Cytoplasm"],
correct: "Cell wall",
},
{
id: "20",
question: "This cell organelle does not contain DNA",
options: ["Nucleus", "Mitochondria", "Lysosomes", "Chloroplast"],
correct: "Lysosomes",
},

{
id: "21",
question: "This jellylike substance inside the plasma membrane in which all cell organelles are floating is",
options: ["Cytoplasm", "Tonoplasm", "Karyoplasm", "Cell sap"],
correct: "Cytoplasm",
},
{
id: "22",
question: "The organelle serving as a primary packaging area for molecules that will be distributed throughout the cell is",
options: ["Vacuole", "Plastids", "Mitochondria", "Golgi apparatus"],
correct: "Golgi apparatus",
},
{
id: "23",
question: "Animal cells are interconnected by",
options: ["Plasma membrane", "Cell wall", "Desmosomes", "Plasmodesmata"],
correct: "Desmosomes",
},
{
id: "24",
question: "The Cell theory is not applicable to",
options: ["Fungi", "Algae", "Virus", "Microbes"],
correct: "Virus",
},
{
id: "25",
question: "What is the function of Structure 5?",
options: ["Carries out photosynthesis", "Gives the plant cell a regular shape", "Site for chemical processes", "Controls the activities of the cell"],
correct: "Gives the plant cell a regular shape",
},
{
id: "26",
question: "What organelle in higher plant cells contains chlorophyll?",
options: ["Centrioles", "Mitochondrion", "Chloroplast", "Vacuole"],
correct: "Chloroplast",
},
{
id: "27",
question: "A cell that holds a lot of water will have large",
options: ["Nucleus", "Mitochondrion", "Vacuole", "Cytoplasm"],
correct: "Vacuole",
},
{
id: "28",
question: "How does a root hair cell increase its surface area to volume ration to absorb water effiently for plants?",
options: ["It has biconcave shape", "It is long and narrow", "It does not have cross walls and protoplasm", "It has lignin on its wall"],
correct: "It is long and narrow",
},
{
id: "29",
question: "Which of the cellular components can only be found in plant cells?",
options: ["Mitochondrion", "Centrioles", "Uncleus", "Cytoplasm"],
correct: "Centrioles"
},

{
  id: "30",
  question: "Which is the suitable stage of green manure crop for incorporation in field?",
  options: ["Pre-flowering stage", "Initial stage", "Maturity stage", "Post-flowering stage"],
  correct: "Post-flowering stage"
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
)

nextBtn.addEventListener(
    "click",changeBtn)

backBtn.addEventListener(
    "click",changeBtn)
//Change next to submit 
  function changeBtn(){
    if(questionCount == quizArray.length-1){
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


