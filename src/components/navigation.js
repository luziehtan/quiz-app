import getByDataJs from '../js/getByDataJs'

export default function navigation() {
  const index = getByDataJs('index')
  const bookmark = getByDataJs('bookmark')
  const createNew = getByDataJs('createNew')

  const iconHome = getByDataJs('iconHome')
  const iconBookmark = getByDataJs('iconBookmark')
  const iconCreate = getByDataJs('iconCreate')

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
}
