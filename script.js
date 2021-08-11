const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let countRightAnswers = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    countRightAnswers = 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    if ( selectedButton.dataset = correct) {
        countRightAnswers++
    }
    document.getElementById('right-answers').innerHTML = countRightAnswers + " points"
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

const questions = [
    {
        question: 'Kdo je nejroztomilejší zájina?',
        answers: [
            { text: "Daník", correct: false },
            { text: "Tasja", correct: false },
            { text: "Daník a Tasja", correct: true },
            { text: "Bocmánek", correct: false }
        ]
    },
    {
        question: 'Koho miluje malej píčus nejvíce na světě?',
        answers: [
            { text: "Daníka a Tasju", correct: true },
            { text: "Daníka", correct: false },
            { text: "Tasju", correct: false },
            { text: "Šachy", correct: false }
        ]
    },
    {
        question: 'Kdo nemůže žít bez Tasjy a Daníka?',
        answers: [
            { text: "Bocmánek", correct: false },
            { text: "Brit", correct: false },
            { text: "Anfiska", correct: false },
            { text: "Malej píčus", correct: true }
        ]
    },
    {
        question: 'Kdo zaslouží dostat po žopě?',
        answers: [
            { text: "Daník", correct: false },
            { text: "Bocmánek", correct: false },
            { text: "Tasja", correct: false },
            { text: "Malej píčus", correct: true }
        ]
    },
    {
        question: 'Kolik je 1+1?',
        answers: [
            { text: "Daníček je miláček", correct: true },
            { text: "Daník je naše zájina", correct: true },
            { text: "Daník je naše štístko", correct: true },
            { text: "Daník bude mít brášku a sestřičku", correct: true }
        ]
    },
    

]