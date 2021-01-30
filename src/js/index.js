console.clear()
console.log('Hello world')

// navigation const

const index = getElement('index')
const bookmark = getElement('bookmark')
const createNew = getElement('createNew')

const iconHome = getElement('iconHome')
const iconBookmark = getElement('iconBookmark')
const iconCreate = getElement('iconCreate')

// bookmark toggle const

const bookmarks = document.querySelectorAll('[data-js="bookmark-icon"]')

// formular const

const labels = document.querySelectorAll('[data-js="label"]')

const form = getElement('formular')
const textarea = getElement('textarea')
const counter = getElement('counter')
const buttonSubmit = getElement('button')

// quiz-card const

const answers = document.querySelectorAll('[data-js="quiz-card-answer"]')

const buttonQuiz = document.querySelector('[data-js="quiz-card-button"]')
const answer = document.querySelector('[data-js="quiz-card-answer"]')

let shown = false

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

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

// formular

form.addEventListener('submit', event => {
  event.preventDefault()
  form.reset()
  textarea.focus()
})

// counter

labels.forEach(label => {
  const textInput = label.querySelector('[data-js="textarea"]')
  textInput.addEventListener('input', event => {
    const counterContent = label.querySelector('[data-js="counter"]')
    counterContent.textContent = `${event.currentTarget.value.length}/300`
  })
})

// quiz card answer toggle

function toggleText() {
  if (shown) {
    buttonQuiz.innerText = 'Show Answer'
    answer.style.display = 'none'
  } else {
    buttonQuiz.innerText = 'Hide Answer'
    answer.style.display = 'block'
  }

  shown = !shown
}

buttonQuiz.addEventListener('click', () => {
  toggleText()
})
