import navigation from '../components/navigation'
import bookmark from '../components/bookmark'
import formular from '../components/formular'
import quizCardAnswer from '../components/quizCardAnswer'

navigation()
bookmark()
formular()
quizCardAnswer()

// IDEA: randomizer button for random question

const quizCard = document.querySelector('[data-js=quiz-card]')
const buttonRandom = document.querySelector('[data-js=randomButton]')
const number = quizCard.length

buttonRandom.addEventListener('click', () => {
  const questions = document.querySelectorAll('[data-js="quiz-card"]')
  const randomIndex = getRandom(number - 1)
  questions.forEach((question, index) => {
    const isCardSelected = index === randomIndex
    question.classList.toggle('selected', isCardSelected)
    console.log('button clicked')
  })
})

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}
