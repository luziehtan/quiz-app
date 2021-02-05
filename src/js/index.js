import navigation from '../components/navigation'
import bookmark from '../components/bookmark'
import formular from '../components/formular'
import quizCardAnswer from '../components/quizCardAnswer'

navigation()
bookmark()
formular()
quizCardAnswer()

// IDEA: randomizer button for random question

const quizCards = document.querySelectorAll('[data-random=quiz-card]')
const buttonRandom = document.querySelector('[data-js=randomButton]')
const number = quizCards.length

buttonRandom.addEventListener('click', () => {
  const questions = document.querySelectorAll('[data-random="quiz-card"]')
  const randomIndex = getRandom(number - 1)
  questions.forEach((question, index) => {
    const isCardSelected = index !== randomIndex
    question.classList.toggle('hidden', isCardSelected)
  })
  allQuestionsButton.classList.remove('hidden')
})

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}

const allQuestionsButton = document.createElement('button')
allQuestionsButton.className = 'quiz-card__random--buttonall'
allQuestionsButton.textContent = 'Show all questions'
const questions = document.querySelectorAll('[data-random="quiz-card"]')
allQuestionsButton.addEventListener('click', () => {
  questions.forEach(question => {
    question.classList.remove('hidden')
    allQuestionsButton.classList.add('hidden')
  })
})
document.body.append(allQuestionsButton)
