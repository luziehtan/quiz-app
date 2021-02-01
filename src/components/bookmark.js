import getAllByDataJs from '../js/getAllByDataJs'

export default function bookmark() {
  const bookmarks = getAllByDataJs('bookmark-icon')
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('fa')
    })
  })
}
