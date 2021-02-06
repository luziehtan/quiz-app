import getByDataJs from '../js/getByDataJs'

export default function darkmode() {
  const toggleSwitch = getByDataJs('lightswitch')

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false)
}
