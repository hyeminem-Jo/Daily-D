const canvas = document.getElementById("jsCanvas")
const body = document.querySelector("body")
const ctx = canvas.getContext("2d") // 드로잉 context 에 접근
const colors = document.getElementsByClassName("jsColor")
const mode = document.getElementById("jsMode")
const range = document.getElementById("jsRange")
const saveBtn = document.getElementById("jsSave")

const INITIAL_COLOR = "#2c2c2c"

// js - canvas 크기 정의
canvas.width = 450
canvas.height = 450

// 선 스타일, 동작 default 값 -----------------------------------------
ctx.fillStyle = "#fff"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 5;

let painting = false
let filling = false

// Function -----------------------------------------
function stopPainting() {
  painting = false
}

function startPainting() {
  painting = true
}

// 선 그리기 (painting)
function onMouseMove(event) {
  let x = event.offsetX // 마우스 좌표 변수화
  let y = event.offsetY
  if (!painting) { // 아직 안그릴 때(false) 작동 (캔버스에 클릭 안된 상태)
    ctx.beginPath() // 경로 생성
    ctx.moveTo(x, y) // 시작점 좌표 지정
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

// 마우스가 캔버스 밖으로 갔다가 요소 안으로 다시 들어왔을 때 시작점 좌표 재할당
function onMouseEnter(event) {
  x = event.offsetX
  y = event.offsetY
  ctx.moveTo(x, y)
}

// 색 지정 (controls color)
function colorClickHandler(event) {
  const color = event.target.style.backgroundColor
  ctx.strokeStyle = color
  ctx.fillStyle = color
}

// toggle(paint / fill) 버튼 이벤트 
function modeClickHandler() {
  if (!filling) { // filling = false 상태일 때 실행 (초기값)
    filling = true
    mode.innerText = "Paint"
  } else { // filling = true 상태일 때 실행
    filling = false
    mode.innerText = "Fill"
  }
}

// canvas 누르면 실행 (filling) 
function canvasClickHandler() {
  if (filling) { // filling 활성화 (= true) 상태일 때 실행
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}

// 선 굵기 조정 input
function rangeChangeHandler(event) {
  const size = event.target.value
  ctx.lineWidth = size
}

// context menual (우클릭)기능 막기
function CM_Handler(event) {
  event.preventDefault()
}

// canvas 의 데이터를 image 로 얻고 download
function saveClickHandler() {
  const image = canvas.toDataURL()
  const link = document.createElement("a")
  link.href = image
  link.download = "PaintJS[🎨]"
  link.click()
}

// AddEventListener -----------------------------------------
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mousedown", startPainting)
  canvas.addEventListener("mouseenter", onMouseEnter)
  canvas.addEventListener("click", canvasClickHandler)
  canvas.addEventListener("contextmenu", CM_Handler)
}

// 선을 canvas 바깥까지 그리 상태에서 클릭을 뗀 상태에 캔버스 안에 다시 들어와도 선이 그려지는 오류
// 해결 : mouseup 이벤트를 canvas 에 국한시키지 않고 body 전체에 적용
// 클릭을 떼면 canvas 내에서 뿐만이 아닌, 아예 painting 이 멈춤
body.addEventListener("mouseup", stopPainting) 

Array.from(colors).forEach(color => color.addEventListener("click", colorClickHandler)) // colors[] array 생성 >> 각 item 에 클릭 이벤트 처리

if (mode) { // toggle 버튼 이벤트 >> FILL mode / PAINT mode 
  mode.addEventListener("click", modeClickHandler)
}

if (range) { // 선굵기 조정 input 이벤트 
  range.addEventListener("input", rangeChangeHandler)
}

if (saveBtn) { // 파일 저장 이벤트
  saveBtn.addEventListener("click", saveClickHandler)
}