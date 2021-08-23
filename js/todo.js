const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")
const toDoBtn = document.querySelector(".btn-todo")

let toDos = []

function deleteToDo(event) {
  const li = event.target.parentElement
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  li.remove()
  saveToDos()
}

function saveToDos() {
  localStorage.setItem('todos' ,JSON.stringify(toDos))
}

function paintToDo(newToDo) {
  const li = document.createElement("li")
  li.id = newToDo.id
  const span = document.createElement("span")
  span.innerText = newToDo.text
  const button = document.createElement("button")
  button.innerText = "❌"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}


function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = ""
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  }
  toDos.push(newToDoObj)
  paintToDo(newToDoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem('todos')

if(savedToDos !== null) {
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






// const toDoForm = document.getElementById("todo-form")
// const toDoInput = toDoForm.querySelector("input") // value 값을 얻어내기 위한 input  요소 변수 생성
// const toDoList = document.getElementById("todo-list")

// const TODOS_KEY = "todos"

// let toDos = [] //  새로고침 할 때마다 배열이 비는 것을 방지하기 위해, 이전의 배열을 같이 담은 상태로 업데이트 할 수 있도록 let 을 이용

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) // key / value 값
//   // 로컬저장소에 string 데이터로 저장
// }

// function deleteToDo(event) { // button 의 삭제 기능
//   const li = event.target.parentElement; // 클릭된 버튼을 제거하는 것이 아닌 클릭된 버튼을 감싸고 있는 li 태그 자체를 삭제해야하기 때문에 부모 요소까지 접근해 변수에 넣는다.
//   li.remove(); // 삭제하기
//   // toDos = toDos.filter(toDo => toDo.id !== li.id) 
//   // '걸러진 li id 를 제외한' 나머지 id 값들만 추출되어 새롭게 배열에 재할당
//   // 하지만 저렇게 적으면 작동이 안되는데, 그 이유는 li.id 와 toDo.id 의 타입 (type) 이 다르기 때문이다.
//   // console.log(typeof li.id) // string
//   // li.id 는 string 타입이고, toDos.id 는 number 타입이다
//   toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) 
//   saveToDos() // 삭제 후 saveToDos 를 한번 더 호출해서 이후의 값을 저장해야 함
// }

// function paintToDo(newToDo) { // html 화면 출력 기능
//   const li = document.createElement("li") // li 생성
//   li.id = newToDo.id // li 에 id 를 부과해준다
//   const span = document.createElement("span") //  span 생성
//   span.innerText = newToDo.text
//   // span 안에 [인수가 된 새로운 입력값(value)] 이 텍스트로 들어감 
//   // 저장되는 데이터를 객체 형식으로 했기 때문에, newToDo 로만 입력하면 [object Object]로 뜸
//   const button = document.createElement("button") //  삭제를 위한 button 생성
//   button.innerText = "❌"; 
//   button.addEventListener("click", deleteToDo) // 삭제 기능을 가진 function 생성
//   li.appendChild(span) // li 안에 자식으로 span 삽입
//   li.appendChild(button) // li 안에 자식으로 button 삽입
//   toDoList.appendChild(li) // li 안의 자식들이 다 삽입된 상태로 마지막에 html에 추가
// }

// function handleToDoSubmit(event) { // submit 을 눌렀을 때 기능
//   event.preventDefault() // form 의 submit 기본 이벤트 기능 막기
//   const newToDo = toDoInput.value; // input 의 현재 value 를 새로운 변수에 복사
//   toDoInput.value = "" // todo 를 입력하고 엔터를 치면서 입력 값이 새로운 변수에 저장된 채 입력칸이 새로 비워지는 동작
//   const newToDoObj = { // 저장되는 배열아이템을 객체 데이터 형식으로 바꾸기
//     text: newToDo,
//     id: Date.now()
//   }
//   toDos.push(newToDoObj) // paintToDo(newToDo)를 실행하기 전 배열에 데이터 삽입
//   paintToDo(newToDoObj) // 
//   saveToDos() // push 된 toDos 배열아이템을 localStorage 에 저장
// }

// toDoForm.addEventListener("submit", handleToDoSubmit)

// const savedToDos = localStorage.getItem(TODOS_KEY)

// if(savedToDos !== null) { 
//   // 아이템이 하나라도 생긴다면 object 형식으로 꺼낸 뒤 저장된 배열 객체들을 
//   // 이전에 저장된 아이템을 포함시켜 업데이트 한 뒤 화면에 출력
//   const parsedToDos = JSON.parse(savedToDos) // ex) ["a","b","c" ..]
//   toDos = parsedToDos // 배열 업데이트: [이전에 저장됐던 데이터들을 담은 변수]를 다시 담아 복원 
//   parsedToDos.forEach(paintToDo) 
//   // 배열 아이템을 paintToDo 함수에 차례로 인자로 넣음 ex) paintToDo(a), paintToDo(b) .. 
// }

// function sexyFilter() {
//   return true
// }

// [1, 2, 3, 4].filter(sexyFilter) // 1, 2, 3, 4 에 차례로 sexyFilter 가 적용되어 호출
