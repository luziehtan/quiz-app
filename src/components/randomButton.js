export default function randomButton() {
  const quizCards = document.querySelectorAll('[data-random=quiz-card]')
  const buttonRandom = document.querySelector('[data-js=randomButton]')
  const number = quizCards.length
  const showAll = document.querySelector('[data-name="show-all-questions"]')

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
  allQuestionsButton.className = 'quiz-card__random--buttonall hidden'
  allQuestionsButton.innerHTML = `
  <span class="fas fa-undo-alt undo"></span>
    Show all questions`
  const questions = document.querySelectorAll('[data-random="quiz-card"]')
  allQuestionsButton.addEventListener('click', () => {
    questions.forEach(question => {
      question.classList.remove('hidden')
      allQuestionsButton.classList.add('hidden')
    })
  })
  showAll.append(allQuestionsButton)
}
