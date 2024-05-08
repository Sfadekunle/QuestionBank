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

const quizArray =
[
{
"id": "0",
"question": "He noted that it was the_______ performance ever.",
"options": [
"worse",
"worst",
"most worst",
"more worse"
],
"correct": "worst"
},
{
"id": "1",
"question": "Without a/an _______there is no public speaker.",
    "options": [
"audience",
"paper",
"auditorium",
"chamber"
],
"correct": "audience"
},
{
"id": "2",
"question": "_______ can improve one's confidence level during a speech delivery.",
    "options": [
"eye contact",
"nose contact",
"a little wine",
"drug"
],
"correct": "eye contact"
},
{
"id": "3",
"question": "Back-tracking and rereading in reading simply refers to ______ ",
    "options": [
"regression",
"progression",
"coherence",
"flashback"
],
"correct": "regression"
},
{
"id": "4",
"question": "________is not a quality of a good paragraph",
    "options": [
"unity",
"cohesion",
"completeness",
"topicality"
],
"correct": "topicality"
},
{
"id": "5",
"question": "Structural wholeness refers to _______ in a good paragraph.",
    "options": [
"completeness",
"cohesion",
"topic sentence",
"coherence"
],
"correct": "cohesion"
},
{
"id": "6",
"question": "The thesis statement is found in the______",
    "options": [
"essays",
"letters",
"applications",
"queries"
],
"correct": "essays"
},
{
"id": "7",
"question": "Letter writing can be grouped into _____",
    "options": [
"three",
"two",
"five",
"six"

],
"correct": "three"
},
{
"id": "8",
"question": "The addresse's address does not feature in _________ letter. ",
    "options": [
"formal",
"semi-formal",
"informal",
"all"
],
"correct": "informal"
},
{
"id": "9",
"question": "Salutation is a conventional and polite way of starting ______ ",
    "options": [
"a letter",
"an application",
"an article",
"an enquiry"
],
"correct": "a letter"
},
{
"id": "10",
"question": "_______is not a complimentary close in a letter.",
    "options": [
"Yours faithfully",
"Yours sincerely",
"Your son",
"His Royal Highness"
],
"correct": "His Royal Highness"
},
  {
    "id": "12",
    "question": " What options provide the best meaning for the idiomatic expression to the capitalised word? Mrs Aje doesn't know yet but she has TWO STRINGS TO HER BOW, she can still appeal to the chairman. This means Mrs. Aje has more than one means to achieve her objective.",
    "options": ["Mrs. Aje has more than one means to achieve her objective.", "Mrs. Aje has a strong motivation to achieve her objective.", "Mrs. Aje has two ideas.", "Mrs. Aje can shoot two strings from her bow."],
    "correct": "Mrs. Aje has more than one means to achieve her objective."
  },
  {
    "id": "13",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? I want to GO ON RECORD in favour of the President Buhari's re-election. This means state emphatically.",
    "options": ["state emphatically", "embrace a position publicly", "write this down", "set a record for this purpose"],
    "correct": "state emphatically"
  },
  {
    "id": "14",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? His visits to his home town are FEW AND FAR BETWEEN. This means very infrequent.",
    "options": ["very infrequent", "very often", "quite often", "very frequent"],
    "correct": "very infrequent"
  },
  {
    "id": "15",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? The children saw a DOG-EARED book on their father's table. This means The book is worn and well-thumbed.",
    "options": ["The book is worn and well-thumbed", "The book is about dogs", "The pages of the book have been eaten by dogs", "The pages of the book look like a dog's ear"],
    "correct": "The book is worn and well-thumbed"
  },
  {
    "id": "16",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? The two runners finished the race in a DEAD-HEAT. This means Together.",
    "options": ["Together", "at the same time", "in serious pain", "serious anger"],
    "correct": "Together"
  },
  {
    "id": "17",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? Once the prisoner gets out of prison, he swore he would GO STRAIGHT. This means be law-abiding.",
    "options": ["go home straight", "be mendacious", "be law-abiding", "be crooked"],
    "correct": "be law-abiding"
  },
  {
    "id": "18",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? It was an excellent party. The only FLY IN THE OINTMENT was Adewale spilling red wine over the host's new carpet. This means problem.",
    "options": ["minor incident", "cause for concern", "issue", "problem"],
    "correct": "problem"
  },
  {
    "id": "19",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? Mary is ALL AT SEA about getting married. This means Mary is confused.",
    "options": ["Mary is confused", "Mary husband lives by the sea", "Mary will get married by the side of the sea", "Mary is happy"],
    "correct": "Mary is confused"
  },
  {
    "id": "20",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? Shade is always at SIXES AND SEVENS when she is home by herself. This means Shade is always disorderly.",
    "options": ["Shade likes six and seven", "Shade is always well-behaved", "Shade is always disorderly", "Shade likes counting"],
    "correct": "Shade is always disorderly"
  },
  {
    "id": "21",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? If Dayo would not act HIGH AND MIGHTY, he would have many friends. This means Dayo wants people to think he is proud and powerful.",
    "options": ["Dayo is tall", "Dayo acts proud and powerful", "Dayo wants people to think he is proud and powerful", "Dayo thinks he is proud and powerful"],
    "correct": "Dayo wants people to think he is proud and powerful"
  },
  {
    "id": "22",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? I hope that the facts will BEAR OUT your story. This means Prove that you are right.",
    "options": ["Prove that you are right", "Prove that you have a story to tell", "Prove that you have a wonderful story", "prove the bears and stories go together"],
    "correct": "Prove that you are right"
  },
  {
    "id": "23",
    "question": "What options provide the best meaning for the idiomatic expression to the capitalised word? The pedestrian have to walk CHEEK BY JOWL along the narrow streets. This means walk close together.",
    "options": ["walk with their cheeks", "walk in front of one another", "walk in a straight line", "walk close together"],
    "correct": "walk close together"
  },

  {
    "id": "24",
    "question": "Features of language include the following except?",
    "options": ["creativity", "reflexibility", "displacement", "predictability"],
    "correct": "predictability"
  },
  {
    "id": "25",
    "question": "Coherence, as a feature of a good paragraph, implies that the ideas in the paragraphs should be?",
    "options": ["different", "related", "many", "complex"],
    "correct": "related"
  },
  {
    "id": "26",
    "question": "The following are the best method to develop effective study habits except?",
    "options": ["regular class attendance", "creating time for study", "regular class avoidance", "note review"],
    "correct": "regular class avoidance"
  },
  {
    "id": "27",
    "question": "In order to write a well-arranged paper, it is advisable to draft",
    "options": ["questions", "topics", "many copies", "an outline"],
    "correct": "an outline"
  },
  {
    "id": "28",
    "question": "To avoid plagiarism, all sources must be properly?",
    "options": ["referenced", "left out", "copied", "counted"],
    "correct": "referenced"
  },
  {
    "id": "29",
    "question": "One specific use of language is for purposeful?",
    "options": ["communication", "association", "contradiction", "invitation"],
    "correct": "communication"
  },
  {
    "id": "30",
    "question": "When a sender of a message uses words that are too difficult for the receiver to understand, this is called?",
    "options": ["linguistics", "semantic", "grammatical", "channel"],
    "correct": "semantic"
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


