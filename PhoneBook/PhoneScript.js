// Selector

const todonameinput = document.querySelector('.todo-name-input')
const todomobileinput = document.querySelector('.todo-mobile-input')
const btn = document.querySelector('.todo-btn')
const todolist = document.querySelector('.todo-list')
const selectbox = document.querySelector('.type-todo')


// Event Listener

btn.addEventListener('click', additem)
todolist.addEventListener('click' , deleitem)
btn.addEventListener('click', validation)


// function

function additem (event) {
  event.preventDefault()
  const contact_todo = document.createElement('div')
  contact_todo.classList.add('todo')
  const newitem = document.createElement('li')
  const name = document.createElement('span')
  const number = document.createElement('span')
  const typenumber = document.createElement('span')
  name.innerText = todonameinput.value
  number.innerText = todomobileinput.value
  typenumber.innerText = selectbox.options[selectbox.selectedIndex].innerText
  newitem.appendChild(name)
  newitem.appendChild(number)
  newitem.appendChild(typenumber)
  newitem.classList.add('todo-item')
  contact_todo.appendChild(newitem)
  todolist.appendChild(contact_todo)
  const del_btn = document.createElement('button')
  del_btn.innerHTML = '<i class = "fas fa-trash"></i>'
  del_btn.classList.add('del_btn')
  contact_todo.appendChild(del_btn)

}

// validation
function validation () {
  if (
    todonameinput.value.trim() === '' &&
    todomobileinput.value.trim() === ''
  ) {
    todonameinput.style.border = '3px solid red'
    todomobileinput.style.border = '3px solid red'
    todolist.style.display = 'none'
    return false
  } else if (todonameinput.value.trim() === '') {
    todonameinput.style.border = '3px solid red'
    return false
  } else if (todomobileinput.value.trim() === '') {
    todomobileinput.style.border = '3px solid red'
    return false
  } else {
    return true
  }
}

function deleitem(event) {
  const item = event.target
  if(item.classList[0]==='del_btn'){
    const parentitem = item.parentElement;
    parentitem.classList.add('fall')
    setTimeout(()=>{
      parentitem.remove()
    },1500)
    
    
  }
  
}

