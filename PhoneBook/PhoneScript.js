// Selector

const todonameinput = document.querySelector('.todo-name-input')
const todomobileinput = document.querySelector('.todo-mobile-input')
const btn = document.querySelector('.todo-btn')
const todolist = document.querySelector('.todo-list')
const selectbox = document.querySelector('.type-todo')
const filter_option = document.querySelector('.contact-filter')
const selecting = document.querySelector('.select')

// Event Listener

btn.addEventListener('click', additem)
todolist.addEventListener('click', deleitem)
btn.addEventListener('click', validation)
filter_option.addEventListener('click', filtercontacts)

// function

function additem (event) {
  event.preventDefault()
  const contact_todo = document.createElement('div')
  contact_todo.classList.add('todo')
  contact_todo.classList.add(selectbox.options[selectbox.selectedIndex].value)
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
  setTimeout(() => {
    filter_option.classList.add('showing')
  }, 200)
  filter_option.style.display = 'block'
  selecting.style.opacity = '1'

  savelocalcontact({
    name : todonameinput.value,
    number : todomobileinput.value,
    type : selectbox.options[selectbox.selectedIndex].innerText,
  })
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

function deleitem (event) {
  const item = event.target
  if (item.classList[0] === 'del_btn') {
    const parentitem = item.parentElement
    parentitem.classList.add('fall')
    setTimeout(() => {
      parentitem.remove()
    }, 1500)
  }
}

function filtercontacts (event) {
  const contacts = todolist.childNodes;
  contacts.forEach(function(contact) {
    switch (event.target.value) {
      case "2":
        contact.style.display = 'flex'
        break;
        case "1":
          if(contact.classList.contains('1')){
            contact.style.display = 'flex'
          }else{
            contact.style.display = 'none'
          }
          break;
          case "0":
            if(!contact.classList.contains('1')){
              contact.style.display = 'flex'
            }else{
              contact.style.display = 'none'
            }
            break;
      default:
        break;
    }
   })
}

function savelocalcontact(contact) {
  let contacts;
  if(localStorage.getItem('contacts')===null){
    contacts = []
  }else{
    contacts = JSON.parse(localStorage.getItem('contacts'))
  }
  contacts.push(contact)
  localStorage.setItem('contacts',JSON.stringify(contacts))
}
