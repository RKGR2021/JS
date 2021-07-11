window.onload = function(){
    let userlist = document.querySelector('.name-list')
    let listinput = document.querySelector('.list-input')
    let btn = document.querySelector('.adduserbtn');
    listinput.value = ""
    btn.addEventListener('click',function(){
        const newuser = document.createElement('li')
        const name = document.createTextNode(listinput.value)
        newuser.appendChild(name) 
        userlist.appendChild(newuser)
        listinput.value = ""
    })

}