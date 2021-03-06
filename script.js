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
        question: 'Kdo je nejroztomilej???? z??jina?',
        answers: [
            { text: "Dan??k", correct: false },
            { text: "Tasja", correct: false },
            { text: "Dan??k a Tasja", correct: true },
            { text: "Bocm??nek", correct: false }
        ]
    },
    {
        question: 'Koho miluje malej p????us nejv??ce na sv??t???',
        answers: [
            { text: "Dan??ka a Tasju", correct: true },
            { text: "Dan??ka", correct: false },
            { text: "Tasju", correct: false },
            { text: "??achy", correct: false }
        ]
    },
    {
        question: 'Kdo nem????e ????t bez Tasjy a Dan??ka?',
        answers: [
            { text: "Bocm??nek", correct: false },
            { text: "Brit", correct: false },
            { text: "Anfiska", correct: false },
            { text: "Malej p????us", correct: true }
        ]
    },
    {
        question: 'Kdo zaslou???? dostat po ??op???',
        answers: [
            { text: "Dan??k", correct: false },
            { text: "Bocm??nek", correct: false },
            { text: "Tasja", correct: false },
            { text: "Malej p????us", correct: true }
        ]
    },
    {
        question: 'Kolik je 1+1?',
        answers: [
            { text: "Dan????ek je mil????ek", correct: true },
            { text: "Dan??k je na??e z??jina", correct: true },
            { text: "Dan??k je na??e ??t??stko", correct: true },
            { text: "Dan??k bude m??t br????ku a sest??i??ku", correct: true }
        ]
    },
    

]