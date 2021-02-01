// navigation const

const index = getByDataJs('index')
const bookmark = getByDataJs('bookmark')
const createNew = getByDataJs('createNew')

const iconHome = getByDataJs('iconHome')
const iconBookmark = getByDataJs('iconBookmark')
const iconCreate = getByDataJs('iconCreate')

// bookmark toggle const

const bookmarks = getAllByDataJs('bookmark-icon')

// formular const

const labels = getAllByDataJs('label')

const form = getByDataJs('formular')
const textarea = getByDataJs('textarea')
const counter = getByDataJs('counter')
const buttonSubmit = getByDataJs('button')

// quiz-card const

const cards = getAllByDataJs('quiz-card')

// NAVIGATION

iconHome.addEventListener('click', () => {
  index.hidden = false
  bookmark.hidden = true
  createNew.hidden = true

  iconHome.classList.add('active')
  iconBookmark.classList.remove('active')
  iconCreate.classList.remove('active')
})

iconBookmark.addEventListener('click', () => {
  index.hidden = true
  bookmark.hidden = false
  createNew.hidden = true

  iconHome.classList.remove('active')
  iconBookmark.classList.add('active')
  iconCreate.classList.remove('active')
})

iconCreate.addEventListener('click', () => {
  index.hidden = true
  bookmark.hidden = true
  createNew.hidden = false

  iconHome.classList.remove('active')
  iconBookmark.classList.remove('active')
  iconCreate.classList.add('active')
})

// bookmark toggle

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('fa')
  })
})

// formular

form.addEventListener('submit', event => {
  event.preventDefault()
  form.reset()
  textarea.focus()
})

// counter

labels.forEach(label => {
  const textInput = getByDataJs('textarea', label)
  textInput.addEventListener('input', event => {
    const counterContent = getByDataJs('counter', label)
    counterContent.textContent = `${event.currentTarget.value.length}/300`
  })
})

// quiz card answer toggle -- does open but not close

function toggleText(button, answer) {
  if (button.innerText === 'Hide Answer') {
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

// general function

function getByDataJs(dataJsName, target = document) {
  return target.querySelector(`[data-js="${dataJsName}"]`)
}

function getAllByDataJs(dataJsName, target = document) {
  return target.querySelectorAll(`[data-js="${dataJsName}"]`)
}
