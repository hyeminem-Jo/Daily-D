const canvas = document.getElementById("jsCanvas")
const body = document.querySelector("body")
const ctx = canvas.getContext("2d") 
const colors = document.getElementsByClassName("jsColor")
const mode = document.getElementById("jsMode")
const range = document.getElementById("jsRange")
const saveBtn = document.getElementById("jsSave")

const INITIAL_COLOR = "#2c2c2c"

canvas.width = 450
canvas.height = 450

ctx.fillStyle = "#fff"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 5;

let painting = false
let filling = false

function stopPainting() {
  painting = false
}

function startPainting() {
  painting = true
}

function onMouseMove(event) {
  let x = event.offsetX 
  let y = event.offsetY
  if (!painting) { 
    ctx.beginPath() 
    ctx.moveTo(x, y) 
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

// toggle 버튼 이벤트 
function modeClickHandler() {
  if (!filling) { 
    filling = true
    mode.innerText = "Paint"
  } else { 
    filling = false
    mode.innerText = "Fill"
  }
}

// canvas 누르면 실행
function canvasClickHandler() {
  if (filling) { 
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

body.addEventListener("mouseup", stopPainting) 

Array.from(colors).forEach(color => color.addEventListener("click", colorClickHandler)) 

if (mode) { // toggle 버튼 이벤트
  mode.addEventListener("click", modeClickHandler)
}

if (range) { // 선굵기 조정 input 이벤트 
  range.addEventListener("input", rangeChangeHandler)
}

if (saveBtn) { // 파일 저장 이벤트
  saveBtn.addEventListener("click", saveClickHandler)
}