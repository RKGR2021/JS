window.onload = function(){
    const btn = document.getElementById('btn')
    const nav = document.getElementById('nav')
    btn.addEventListener('click',function(){
        nav.classList.toggle('navigation1')
        btn.classList.toggle('btnactive')
    })
}