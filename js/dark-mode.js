window.onload = function () {
  const toggle = document.getElementById('dark')
  toggle.addEventListener('change', function (e) {
    document.body.classList.toggle('dark', e.target.checked)
  })
}
