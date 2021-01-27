console.clear()
console.log('Hello world')

const index = document.querySelector('[data-js=index]')
const bookmark = document.querySelector('[data-js=bookmark]')
const createNew = document.querySelector('[data-js=createNew]')

const iconHome = document.querySelector('[data-js=iconHome]')
const iconBookmark = document.querySelector('[data-js=iconBookmark]')
const iconCreate = document.querySelector('[data-js=iconCreate]')

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
