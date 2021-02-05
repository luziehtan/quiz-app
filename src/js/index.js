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
  const randomIndex = getRandom(number - 1)
  quizCards.forEach((question, index) => {
    const isCardSelected = index === randomIndex
    question.classList.toggle('selected', isCardSelected)
    console.log('button clicked')
  })
})

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}
