function validate () {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const usererr = document.getElementById('usererr')
  const passerr = document.getElementById('passerr')

  if (username.value.trim() === '' && password.value.trim() === '') {
    username.style.border = '3px solid red'
    usererr.style.visibility = 'visible'
    password.style.border = '3px solid red'
    passerr.style.visibility = 'visible'
    return false
  } else if (username.value.trim() === '') {
    username.style.border = '3px solid red'
    usererr.style.visibility = 'visible'
    return false
  } else if (password.value.trim() === '') {
    password.style.border = '3px solid red'
    passerr.style.visibility = 'visible'
    return false
  } else {
    return true
  }
}
