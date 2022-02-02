//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
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
    //function to shuffle and push 5 questions to shuffledQuestions array
  //app would be dealing with 5 questions per session
    while (shuffledQuestions.length <= 4) {
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
        if (indexNumber <= 4) {
  //displays next question as long as index number isn't greater than 4, remember index number starts from 0, so index 4 is question 5
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 4 meaning we're already at the 10th question
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
    if (playerScore <= 1) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 2 && playerScore < 4) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 5) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100
  
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