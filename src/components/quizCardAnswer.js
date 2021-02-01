import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function quizCardAnswer() {
  const cards = getAllByDataJs('quiz-card')

  function toggleText(button, answer) {
    if (button.innerText === 'HIDE ANSWER') {
      button.innerText = 'Show Answer'
      answer.style.display = 'none'
    } else {
      button.innerText = 'Hide Answer'
      answer.style.display = 'block'
    }
  }

  cards.forEach(card => {
    const answer = getByDataJs('quiz-card-answer', card)
    const button = getByDataJs('quiz-card-button', card)

    button.addEventListener('click', () => {
      toggleText(button, answer)
    })
  })
}
