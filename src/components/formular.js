import getByDataJs from './getByDataJs'
import getAllByDataJs from './getAllByDataJs'

export default function formular() {
  const labels = getAllByDataJs('label')

  const form = getByDataJs('formular')
  const textarea = getByDataJs('textarea')
  const counter = getByDataJs('counter')
  const buttonSubmit = getByDataJs('button')

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
