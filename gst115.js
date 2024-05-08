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
    "question": "What are the primary components of a computer system?",
    "options": ["Monitor, keyboard, mouse", "CPU, RAM, motherboard", "Printer, scanner, modem", "Hard disk, DVD drive, USB port"],
    "correct": "CPU, RAM, motherboard"
  },
  {
    "id": "2",
    "question": "How do input devices contribute to the functioning of a computer?",
    "options": ["By displaying information on the screen", "By processing data into useful information", "By accepting data and commands from users", "By storing data for future retrieval"],
    "correct": "By accepting data and commands from users"
  },
  {
    "id": "3",
    "question": "Can you explain the role of the Central Processing Unit (CPU) in a computer system?",
    "options": ["It connects the computer to the internet", "It processes data and instructions", "It stores data permanently", "It displays images and text on the screen"],
    "correct": "It processes data and instructions"
  },
  {
    "id": "4",
    "question": "What distinguishes application software from operating system software?",
    "options": ["Application software controls hardware operations", "Operating system software performs specific tasks", "Application software enables users to interact with the computer", "Operating system software manages computer resources"],
    "correct": "Application software enables users to interact with the computer"
  },
  {
    "id": "5",
    "question": "How does networking enable communication between computers?",
    "options": ["By converting data into useful information", "By providing a physical connection between devices", "By transmitting data between connected devices", "By processing instructions from users"],
    "correct": "By transmitting data between connected devices"
  },
  {
    "id": "6",
    "question": "Describe the characteristics of a Local Area Network (LAN) and a Wide Area Network (WAN).",
    "options": ["LAN covers a smaller geographical area than WAN", "WAN has higher speed than LAN", "LAN is more expensive to set up than WAN", "WAN is limited to a single location"],
    "correct": "LAN covers a smaller geographical area than WAN"
  },
  {
    "id": "7",
    "question": "What is the purpose of a modem in internet connectivity?",
    "options": ["To convert digital signals into analog signals", "To connect multiple devices to a network", "To process data and instructions", "To display information on the screen"],
    "correct": "To convert digital signals into analog signals"
  },
  {
    "id": "8",
    "question": "How do wired and wireless networks differ in terms of connectivity?",
    "options": ["Wired networks use cables for connection, while wireless networks use radio waves", "Wired networks have slower speed than wireless networks", "Wireless networks are more reliable than wired networks", "Wired networks require less maintenance than wireless networks"],
    "correct": "Wired networks use cables for connection, while wireless networks use radio waves"
  },
  {
    "id": "9",
    "question": "Explain the concept of email and its importance in communication.",
    "options": ["Email is a physical letter sent through postal services", "Email is a text message sent through a mobile phone", "Email is an electronic message sent over the internet", "Email is a voice message sent through telecommunication networks"],
    "correct": "Email is an electronic message sent over the internet"
  },
  {
    "id": "10",
    "question": "How does the internet facilitate file transfer between computers?",
    "options": ["Through search engines", "Through email attachments", "Through file transfer protocol (FTP)", "Through word processing software"],
    "correct": "Through file transfer protocol (FTP)"
  },
  {
    "id": "11",
    "question": "Describe the significance of feedback in effective communication.",
    "options": ["It enables the sender to know if the message was received and understood", "It creates barriers to communication", "It speeds up the communication process", "It is unnecessary in communication"],
    "correct": "It enables the sender to know if the message was received and understood"
  },
  {
    "id": "12",
    "question": "How does the operating system software enable users to interact with the computer?",
    "options": ["By providing a graphical user interface (GUI)", "By processing data and instructions", "By connecting to the internet", "By storing data"],
    "correct": "By providing a graphical user interface (GUI)"
  },
  {
    "id": "13",
    "question": "What are the advantages and disadvantages of using a computer system?",
    "options": ["Advantages: speed and accuracy; Disadvantages: high cost and complexity", "Advantages: simplicity and low cost; Disadvantages: slow speed and low accuracy", "Advantages: flexibility and accessibility; Disadvantages: limited storage capacity", "Advantages: portability and durability; Disadvantages: lack of connectivity"],
    "correct": "Advantages: speed and accuracy; Disadvantages: high cost and complexity"
  },
  {
    "id": "14",
    "question": "Explain the significance of communication devices in ICT.",
    "options": ["They enable communication between computers and users", "They control the operation of the CPU", "They store data permanently", "They display images and text on the screen"],
    "correct": "They enable communication between computers and users"
  },
  {
    "id": "15",
    "question": "How does a scanner function as both an input and output device?",
    "options": ["By accepting data and commands from users", "By displaying images and text on the screen", "By processing data and instructions", "By converting printed documents into digital images"],
    "correct": "By converting printed documents into digital images"
  },
  {
    "id": "16",
    "question": "Can you list some examples of professional application software?",
    "options": ["Video games and social media apps", "Peachtree accounting and SPSS statistical software", "Web browsers and email clients", "Word processing and spreadsheet software"],
    "correct": "Peachtree accounting and SPSS statistical software"
  },
  {
    "id": "17",
    "question": "What are the characteristics of reliable software technology?",
    "options": ["It enables interaction between users and hardware components", "It ensures compatibility with different operating systems", "It has high speed and accuracy in processing data", "It facilitates communication between computers"],
    "correct": "It has high speed and accuracy in processing data"
  },
  {
    "id": "18",
    "question": "How does the internet facilitate communication between users?",
    "options": ["Through search engines", "Through social media platforms", "Through email and instant messaging services", "Through word processing software"],
    "correct":"Through email and instant messaging services"
  },
  {
    "id": "19",
    "question": "What role does networking play in ICT?",
    "options": ["It enables communication between computers and users", "It controls the operation of peripheral devices", "It stores data permanently", "It displays images and text on the screen"],
    "correct": "It enables communication between computers and users"
  },
  {
    "id": "20",
    "question": "How does the internet enable access to a wide range of information?",
    "options": ["Through email attachments", "Through search engines and online databases", "Through word processing software", "Through video conferencing tools"],
    "correct": "Through search engines and online databases"
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
        timeLeft.innerHTML = `${count}s`;
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
    count = 5;
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










