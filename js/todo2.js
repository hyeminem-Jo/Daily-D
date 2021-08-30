// const toDoForm = document.querySelector('#toDoForm');
// const toDoInput = toDoForm.querySelector('input')
// const toDoList = document.querySelector('#toDoList');

// let toDoArray = [];

// const TODO_KEY = 'toDo';
// const TO_DO_CLASS_NAME = 'to_do_detail';
// const DONE_CLASS_NAME = 'done_to_do';
// const BTN_TP_CLASS_NAME = 'btn_tp';

// function saveToDo() {
//   localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
// }

// function handleToDoSubmit(event) { // 동일 코드 -------------------
//   event.preventDefault();
//   const newToDo = toDoInput.value;
//   toDoInput.value = '';

//   const newToDoObj = {
//     text: newToDo,
//     id: Date.now(),
    isDone: false
//   }

//   toDoArray.push(newToDoObj);
//   drawToDo(newToDoObj);
//   saveToDo();
// }

function drawToDo(toDoObj) {
  const liElement = document.createElement('li');
  liElement.classList.add(TO_DO_CLASS_NAME);
  liElement.id = toDoObj.id;

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.id = `check${toDoObj.id}`;
  checkboxElement.addEventListener('click', toggleCheckToDo);

  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', `check${toDoObj.id}`);

  const spanElement = document.createElement('span');
  spanElement.innerText = toDoObj.text;

  if (toDoObj.isDone === true) {
    checkboxElement.setAttribute('checked', 'checked');
    spanElement.classList.add(DONE_CLASS_NAME);
  }

  const deleteBtnElement = document.createElement('button');
  deleteBtnElement.classList.add(BTN_TP_CLASS_NAME);
  deleteBtnElement.innerText = '❌';
  deleteBtnElement.addEventListener('click', deleteToDo);

  liElement.appendChild(checkboxElement);
  liElement.appendChild(labelElement);
  liElement.appendChild(spanElement);
  liElement.appendChild(deleteBtnElement);

  toDoList.appendChild(liElement);
}

// ---------

function toggleCheckToDo(event) {
  const liElement = event.target.parentElement;
  const spanElement = liElement.querySelector('span');
  spanElement.classList.toggle(DONE_CLASS_NAME);

  toDoArray.forEach(function (toDoItem) {
    if (toDoItem.id === Number(liElement.id)) {
      if (toDoItem.isDone === true) {
        toDoItem.isDone = false;
      } else {
        toDoItem.isDone = true;
      }
    }
  });

  saveToDo();
}

// function deleteToDo(event) { // 동일 코드 -------------------
//   const delLiElement = event.target.parentElement;
//   delLiElement.remove();
//   toDoArray = toDoArray.filter(toDoItem => toDoItem.id !== Number(delLiElement.id));
//   saveToDo();
// }

// toDoForm.addEventListener('submit', handleToDoSubmit);// 동일 코드 ----------

// const savedTodos = localStorage.getItem(TODO_KEY);// 동일 코드 ------------

// if (savedTodos !== null) { // 동일 코드 -------------------
//   const parseToDos = JSON.parse(savedTodos);
//   toDoArray = parseToDos;

//   parseToDos.forEach(drawToDo);
// }