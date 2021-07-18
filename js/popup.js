window.onload = function(){
    const open = document.getElementById('open')
    const close = document.getElementById('close')
    const popup = document.querySelector('.popup')
    open.addEventListener('click' , function(){
        document.body.style.background = 'rgba(0,0,0,0.5)'
        open.style.display = 'none'
        popup.classList.remove('active2')
        popup.classList.add('active')
    })
    close.addEventListener('click' , function(){
        document.body.style.background = 'rgba(0,0,0,0)'
        popup.classList.add('active2')
        popup.classList.remove('active')
        open.style.display = 'block'
    })
}