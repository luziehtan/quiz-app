import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

export default function formular() {
  const labels = getAllByDataJs('label')

  const form = getByDataJs('formular')
  const textarea = getByDataJs('textarea')

  form.addEventListener('submit', event => {
    event.preventDefault()
    form.reset()
    textarea.focus()
  })

  labels.forEach(label => {
    const textInput = getByDataJs('textarea', label)
    textInput.addEventListener('input', event => {
      const counterContent = getByDataJs('counter', label)
      counterContent.textContent = `${event.currentTarget.value.length}/300`
    })
  })
}
