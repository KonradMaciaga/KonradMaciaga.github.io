//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "Lesion in which area leads to eye deviation towards the lesion?",
        optionA: "A. 11 BA",
        optionB: "B. 8 BA",
        optionC: "C. 4 BA",
        optionD: "D. 46 BA",
        correctOption: "optionB"
    },
  
    {
        question: "Which areas are considered as Broca’a area?",
        optionA: "A. 44&45 BA",
        optionB: "B. 5&7 BA",
        optionC: "C. 9&10 BA",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "Which are the functions of 6BA?",
        optionA: "A. decision making",
        optionB: "B. working memory",
        optionC: "C. controlling and planning movements, imaginary of movement",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },
  
    {
        question: "Which are the functions of 9&10 BA?",
        optionA: "A. attention, working memory, planning and task management",
        optionB: "B. controlling and planning movements, imaginary of movement",
        optionC: "C. speech production and articulation ",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "How is called lesion in Broca’s area?",
        optionA: "A. Broca’s aphasia",
        optionB: "B. eye deviation towards the lesion",
        optionC: "C. astereognosis",
        optionD: "D. none of the above",
        correctOption: "optionA"
    },
  
    {
        question: "What is function of Broca’s area?",
        optionA: "A. task management",
        optionB: "B. imaginary of movement",
        optionC: "C. speech production and articulation",
        optionD: "D. processing visual information",
        correctOption: "optionC"
    },
  
    {
        question: "Where we can find primary motor cortex?",
        optionA: "A. 46 BA",
        optionB: "B. 4 BA",
        optionC: "C. 6 BA",
        optionD: "D. 8 BA",
        correctOption: "optionB"
    },
  
    {
        question: "Which BA we can find in orbitofrontal area?",
        optionA: "A. 4 BA",
        optionB: "B. 46 BA",
        optionC: "C. 11 BA",
        optionD: "D. 6 BA",
        correctOption: "optionC"
    },
  
    {
        question: "Where is located 4 BA?",
        optionA: "A.precentral gyrus",
        optionB: "B. orbitofrontal area",
        optionC: "C. middle frontal gyri",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "What is the function of 47 BA?",
        optionA: "A. processing of language",
        optionB: "B. imaginary of movement",
        optionC: "C. speech production and articulation",
        optionD: "D. processing visual information",
        correctOption: "optionA"
    },

    {
        question: "Which BA is considered as primary visual cortex V1?",
        optionA: "A. 17 BA",
        optionB: "B. 20 BA",
        optionC: "C. 18 BA",
        optionD: "D. 9 BA",
        correctOption: "optionA"
    },

    {
        question: "Which BA is considered secondary visual cortex V2?",
        optionA: "A. 21 BA",
        optionB: "B. 16 BA",
        optionC: "C. 18 BA",
        optionD: "D. 46 BA",
        correctOption: "optionC"
    },

    {
        question: "Which BA is considered associative visual cortex V3, V4, V5?",
        optionA: "A. 39 BA",
        optionB: "B. 17 BA",
        optionC: "C. 18 BA",
        optionD: "D. 19 BA",
        correctOption: "optionD"
    },

    {
        question: "What is the lesion in 17 BA?",
        optionA: "A. visual field defects on the opposite side",
        optionB: "B. Broca’s aphasia",
        optionC: "C. astereognosis",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },

    {
        question: "What is the function of 17BA?",
        optionA: "A. visual attention",
        optionB: "B. answers a) and c)",
        optionC: "C. processing and interpreting visual information received from the eyes",
        optionD: "D. non of the above",
        correctOption: "optionB"
    },

    {
        question: "What is the function of 18BA?",
        optionA: "A. further analysis of the received visual information",
        optionB: "B. face association",
        optionC: "C. processing sign language",
        optionD: "D. all of the above",
        correctOption: "optionD"
    },

    {
        question: "What is the function of 19BA?",
        optionA: "A. processing phonological properties of written forms, visual memory",
        optionB: "B. complex processing of visual information",
        optionC: "C. answers a) and b)",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },

    {
        question: "What is V1?",
        optionA: "A. secondary visual",
        optionB: "B. associative visual cortex",
        optionC: "C. primary visual",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },

    {
        question: "What is V2?",
        optionA: "A. associative visual cortex",
        optionB: "B. secondary visual",
        optionC: "C. primary visual",
        optionD: "D. non of the above",
        correctOption: "optionB"
    },

    {
        question: "What is V3, V4, V5?",
        optionA: "A. secondary visual",
        optionB: "B. associative visual cortex",
        optionC: "C. primary visual",
        optionD: "D. non of the above",
        correctOption: "optionB"
    },

    {
        question: "Which areas are considered as primary somatosensory cortex?",
        optionA: "A. 9&10 BA",
        optionB: "B. 43 BA",
        optionC: "C. 3, 1&2 BA",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },
  
    {
        question: "How is called lesion in 5&7 BA?",
        optionA: "A. astereognosis",
        optionB: "B. Broca’s aphasia",
        optionC: "C. eye deviation towards the lesion",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "Which areas are considered as somatosensory association cortex?",
        optionA: "A. 5&7 BA",
        optionB: "B. 3, 1&2 BA",
        optionC: "C. 39 BA",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "What is  the function of 3, 1&2 BA?",
        optionA: "A. localization of touch, vibration, temperature, pain, motor learning, sensory perception",
        optionB: "B. processing visual information",
        optionC: "C. attention, working memory, decision-making",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "What is  the function of 40 BA?",
        optionA: "A. attention, working memory, decision-making",
        optionB: "B. phonological processing, emotional responses",
        optionC: "C. processing visual information",
        optionD: "D. non of the above",
        correctOption: "optionB"
    },
  
    {
        question: "Which areas are considered primary gustatory cortex?",
        optionA: "A. 6 BA",
        optionB: "B. 43 BA",
        optionC: "C. 5&7 BA",
        optionD: "D. non of the above",
        correctOption: "optionB"
    },
  
    {
        question: "What is the function of 39 BA?",
        optionA: "A. language and number processing, spatial cognition",
        optionB: "B. memory retrieval, attention ",
        optionC: "C. answers A) and B)",
        optionD: "D. speech production and articulation",
        correctOption: "optionC"
    },
  
    {
        question: "What is the function of 43 BA?",
        optionA: "A.speech production and articulation",
        optionB: "B.memory retrieval, attention",
        optionC: "C.perception of taste",
        optionD: "D.non of the above",
        correctOption: "optionC"
    },
  
    {
        question: "What is astereognosis?",
        optionA: "A. the inability to identify objects by feel only",
        optionB: "B. lesion in 5&7 BA",
        optionC: "C. eye deviation towards the lesion",
        optionD: "D. answers A) and B)",
        correctOption: "optionD"
    },

    {
        question: "Where is located 39 BA?",
        optionA: "A. postcentral gyrus",
        optionB: "B. supramarginal gyrus",
        optionC: "C. angular gyrus",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },
 
    {
        question: "Which area is considered as Wernicke’s area?",
        optionA: "A. 19 BA",
        optionB: "B. 20 BA",
        optionC: "C. 21 BA",
        optionD: "D. 22 BA",
        correctOption: "optionD"
    },
  
    {
        question: "What are the functions of 21 BA?",
        optionA: "A. semantic memory processing",
        optionB: "B. visual perception",
        optionC: "C. language processing",
        optionD: "D. all of the above",
        correctOption: "optionD"
    },
  
    {
        question: "Where is located 41&42BA?",
        optionA: "A. Heschl gyrus",
        optionB: "B. fusiform gyrus",
        optionC: "C. middle temporal gyrus",
        optionD: "D. non of the above",
        correctOption: "optionA"
    },
  
    {
        question: "What is the function of 41&42 BA?",
        optionA: "A. processing visual information",
        optionB: "B. processing of auditory stimuli",
        optionC: "C. working memory",
        optionD: "D. speech production",
        correctOption: "optionB"
    },
  
    {
        question: "What is the function of 22 BA?",
        optionA: "A. processing sounds and comprehension of speech",
        optionB: "B. speech fluency",
        optionC: "C. answers a) and b)",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },
  
    {
        question: "What is the function of 37BA?",
        optionA: "A. higher-level visual processing ",
        optionB: "B. associating words with visual percepts",
        optionC: "C. face recognition",
        optionD: "D. all of the above",
        correctOption: "optionD"
    },
  
    {
        question: "What is the function of 37BA",
        optionA: "A. language processes",
        optionB: "B. executive functions",
        optionC: "C. diverse high-level verbal functions: semantic processing, lexico-semantic ambiguity processing",
        optionD: "D. all of the above",
        correctOption: "optionD"
    },
  
    {
        question: "Where is located 20 BA?",
        optionA: "A. Heschl gyrus",
        optionB: "B. inferior temporal gyrus",
        optionC: "C. middle temporal gyrus",
        optionD: "D. non of the above",
        correctOption: "optionB"
    },
  
    {
        question: "What is the function of 21 BA?",
        optionA: "A. processing visual information in the field of vision",
        optionB: "B. involved in memory",
        optionC: "C. answers a) and b)",
        optionD: "D. non of the above",
        correctOption: "optionC"
    },

    {
        question: "Where is located 37 BA?",
        optionA: "A. fusiform gyrus",
        optionB: "B. Heschl gyrus",
        optionC: "C. middle temporal gyrus",
        optionD: "D. non of the above",
        correctOption: "optionA"
    }
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
  //function to shuffle and push 20 questions to shuffledQuestions array
//app would be dealing with 20 questions per session
  while (shuffledQuestions.length <= 19) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })

  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++ //adding to player's score
          indexNumber++ //adding 1 to index so has to display next question..
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++ //adds 1 to wrong attempts 
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer() //check if player picked right or wrong option
  unCheckRadioButtons()
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
      if (indexNumber <= 19) {
//displays next question as long as index number isn't greater than 19, remember index number starts from 0, so index 19 is question 20
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()//ends game if index number greater than 19 meaning we're already at the 10th question
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 6) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 7 && playerScore < 14) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 15) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 20) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}