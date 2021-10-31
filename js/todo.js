const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")
const toDoBtn = document.querySelector(".btn-todo")

let toDos = [] 

const TODO_KEY = "todos" 

function deleteToDo(event) { 
  const li = event.target.parentElement
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  li.remove()
  saveToDos()
}

function saveToDos() { 
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos))
}

function paintToDo(newToDo) {
  const li = document.createElement("li")
  li.classList.add('todo__item')
  li.id = newToDo.id

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.id = `check ${newToDo.id}`
  checkbox.addEventListener('click', toggleToDo)

  const label = document.createElement("label")
  label.setAttribute('for', `check ${newToDo.id}`)
  label.innerText = newToDo.text
  
  const em = document.createElement('em')

  if (newToDo.completed === true) {
    checkbox.setAttribute('checked', 'checked')
    label.classList.add('completed')
  }

  const button = document.createElement("button")
  button.innerText = "❌"
  button.classList.add('todo__delete')
  button.addEventListener("click", deleteToDo)

  li.appendChild(checkbox)
  li.appendChild(label)
  label.prepend(em)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function toggleToDo(event) {
  const li = event.target.parentElement
  const label = li.querySelector('label')
  label.classList.toggle('completed')

  toDos.forEach(function (toDo) {
    if (toDo.id === Number(li.id)) { 
      if (toDo.completed === true) {
        toDo.completed = false
      } else {
        toDo.completed = true
      }
    }
  })

  saveToDos()
}

function handleToDoSubmit(event) { 
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ""
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    completed: false
  }
  toDos.push(newToDoObj)
  paintToDo(newToDoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit) 

const toDoInputFocus = toDoForm.querySelector('input:first-child')
toDoInputFocus.addEventListener('focus', function() {
  toDoForm.classList.add('focused')
})
toDoInputFocus.addEventListener('blur', function() {
  toDoForm.classList.remove('focused')
  this.setAttribute('placeholder', '오늘의 할일을 입력해보세요 :)')
})

const savedToDos = localStorage.getItem(TODO_KEY) 

if (savedToDos !== null) { 
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}

function clickToDo() { 
  const mainWrap = document.querySelector(".main-wrap")
  const toDoWrap = document.querySelector(".todo")
  const weather = document.getElementById("weather")
  mainWrap.classList.toggle("active")
  toDoWrap.classList.toggle("active")
  this.classList.toggle("active")
  weather.classList.toggle("active")
}

toDoBtn.addEventListener("click", clickToDo) 