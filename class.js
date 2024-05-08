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
question: "The main difference between human cheek cells and onion peel cells is",
options: ["Presence of cell wall in onion peel cells", "Presence of mitochondria in onion peel cells", "Absence of endoplasmic reticulum in cheek cells", "Absence of the plasma membrane in cheek cells"],
correct: "Presence of cell wall in onion peel cells",
},
{
  "id": "1",
  "question": "Which of the following plants is an example of a cryptogam with vascular tissues?",
  "options": ["Equisetum", "Cedrus", "Marchantia", "Ginkgo"],
  "correct": "Equisetum"
},
{
  "id": "2",
  "question": "Which of the following plants does not have independent and free-living male and female gametophytes?",
  "options": ["Funaria", "Pteris", "Cedrus", "Polytrichum"],
  "correct": "Cedrus"
},
{
  "id": "3",
  "question": "Algae are further classified into different classes based on which of the following characteristics?",
  "options": ["Types of pigments", "Composition of cell wall", "Thallus organization", "Food reserve"],
  "correct": "Types of pigments"
},
{
  "id": "4",
  "question": "Which of the following differentiates conifers from grasses?",
  "options": ["A sence of pollen tubes", "Lack of xylem tracheids", "Seeds are produced from ovules", "Endosperm formation without fertilization"],
  "correct": "Endosperm formation without fertilization"
},
{
  "id": "5",
  "question": "Plant diversification is a result of",
  "options": ["Seed dispersal", "Suddenly appeared", "A rupt mutations", "A long period of evolutionary changes"],
  "correct": "A long period of evolutionary changes"
},
{
  "id": "6",
  "question": "Domination of angiosperms on land due to",
  "options": ["Domestication", "Self-pollination", "A large number of seeds", "Adaptability in diverse habitats"],
  "correct": "Adaptability in diverse habitats"
},
{
  "id": "7",
  "question": "A quality of angiosperms without any exception is",
  "options": ["Autotrophic nutrition", "Secondary growth", "Double fertilization", "Presence of vessels"],
  "correct": "Double fertilization"
},
{
  "id": "8",
  "question": "Which of the following is a characteristic of bryophytes?",
  "options": ["They possess chloroplasts", "They have archegonia", "The plant body is thalloid", "All of the above"],
  "correct": "All of the above"
},
{
  "id": "9",
  "question": "Which of the following characteristics differentiates bryophytes from algae?",
  "options": ["They lack vascular tissue", "The plant body is thalloid", "They have chloroplasts", "They possess archegonia"],
  "correct": "They possess archegonia"
},
{
  "id": "10",
  "question": "Which of the following differentiates pteridophytes from bryophytes and thallophytes?",
  "options": ["Alternation of generation", "Archegonia", "Motile antherozoids", "Vascular tissues"],
  "correct": "Vascular tissues"
},
{
  "id": "11",
  "question": "Who has discovered virus?",
  "options": ["Diener", "Pasteur", "Ivanowsky", "Iyengar"],
  "correct": "Ivanowsky"
},
{
  "id": "12",
  "question": "Which disease is caused by virus?",
  "options": ["Polio", "Cold", "T. B", "Diphtheria"],
  "correct": "Polio"
},
{
  "id": "13",
  "question": "Which is the main branch of biology?",
  "options": ["Botany", "Zoology", "Biochemistry", "A and B"],
  "correct": "A and B"
},
{
  "id": "14",
  "question": "The first formed life is known as?",
  "options": ["Protista", "Monera", "Plant kingdom", "Fungi"],
  "correct": "Plant kingdom"
},
{
  "id": "15",
  "question": "The study of living object is called?",
  "options": ["Biology", "Chemistry", "Physics", "A and B"],
  "correct": "Biology"
},
{
  "id": "16",
  "question": "Which of the following group is called amphibians of plant kingdom?",
  "options": ["Bryophytes", "Thallophytes", "Pteridophytes", "Gymnosperms"],
  "correct": "Bryophytes"
},
{
  "id": "17",
  "question": "Which of the following plants does not belong to dicot category?",
  "options": ["Apple", "Cardamom", "Ginger", "Palms"],
  "correct": "Apple"
},
{
  "id": "18",
  "question": "Plasmolysis in a plant cell is defined as?",
  "options": ["Shrinkage of nucleoplasm", "Shrinkage of cytoplasm in hypertonic medium", "More than one of the above", "One of the above"],
  "correct": "Shrinkage of cytoplasm in hypertonic medium"
},
{
  "id": "19",
  "question": "Which of the following part of a flower is not a reproductive organ?",
  "options": ["Stigma", "Style", "Anther", "Sepals"],
  "correct": "Sepals"
},
{
  "id": "20",
  "question": "Plants are divided into how many groups?",
  "options": ["7", "6", "5", "4"],
  "correct": "5"
},
{
  "id": "21",
  "question": "Which of the following is an example of green algae?",
  "options": ["Fucus", "Sargassum", "Laminaria", "Chlamydomonas"],
  "correct": "Chlamydomonas"
},
{
  "id": "22",
  "question": "Double fertilization is a characteristic of?",
  "options": ["Bryophytes", "Angiosperms", "Monocot", "Gymnosperms"],
  "correct": "Angiosperms"
},
{
  "id": "23",
  "question": "The largest flower in the world is?",
  "options": ["Rafflesia", "Passiflora", "Bird of paradise", "None of the above"],
  "correct": "Rafflesia"
},
{
  "id": "24",
  "question": "Which of the following is not true about Bryophyta?",
  "options": ["Flowers are present", "Spores are homospores", "Main plant body is haploid", "None of the above"],
  "correct": "Flowers are present"
},
{
  "id": "25",
  "question": "Which of the following is not a characteristic of dicotyledonous plants?",
  "options": ["Tap root", "Reticulated venation", "Two cotyledons", "Fibrous"],
  "correct": "Fibrous"
},
{
  "id": "26",
  "question": "Amarbel (Cuscuta) is an example of?",
  "options": ["Autotrophs", "Parasite", "Saprotroph", "Host"],
  "correct": "Parasite"
},
{
  "id": "27",
  "question": "Which is a unisexual flower?",
  "options": ["Papaya", "Mustard", "Hibiscus", "Sunflowers"],
  "correct": "Papaya"
},
{
  "id": "28",
  "question": "Which is a monocot plant?",
  "options": ["Carrot", "Daisy", "Garlic", "Rose"],
  "correct": "Garlic"
},
{
  "id": "29",
  "question": "The essential organs in a flower for reproduction are?",
  "options": ["The sepal and stamen", "The stamen and pistil", "The sepal and petal", "The petal and pistil"],
  "correct": "The stamen and pistil"
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




