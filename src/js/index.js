console.clear()
console.log('Hello world')

const index = getElement('index')
const bookmark = getElement('bookmark')
const createNew = getElement('createNew')

const iconHome = getElement('iconHome')
const iconBookmark = getElement('iconBookmark')
const iconCreate = getElement('iconCreate')

const bookmarks = document.querySelectorAll('[data-js="bookmark-icon"]')

// navigation

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
    console.log('Button was clicked')
  })
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
