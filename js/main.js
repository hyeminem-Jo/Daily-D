// buttons
const $btnToDo = document.querySelector("#btn-todo");
const $btnPaint = document.querySelector("#btn-paint");
const $btnCalculate = document.querySelector("#btn-calculate");

// buttons Image
const $btnToDoImg = document.querySelector("#btn-todo img");
const $btnPaintImg = document.querySelector("#btn-paint img");
const $btnCalculateImg = document.querySelector("#btn-calculate img");

// function
const $toDo = document.querySelector(".todo");
const $paint = document.querySelector(".paint");
const $calculate = document.querySelector(".calculator");

// 할 일 목록 기능
$btnToDo.addEventListener("click", () => {
  // 기능 활성화
  $toDo.classList.remove("hidden");
  $paint.classList.add("hidden");
  $calculate.classList.add("hidden");
  // 버튼 이미지 활성화
  $btnToDoImg.classList.remove("opacity");
  $btnPaintImg.classList.add("opacity");
  $btnCalculateImg.classList.add("opacity");
});

// 그림일기 기능
$btnPaint.addEventListener("click", () => {
  // 기능 활성화
  $paint.classList.remove("hidden");
  $toDo.classList.add("hidden");
  $calculate.classList.add("hidden");
  // 버튼 이미지 활성화
  $btnPaintImg.classList.remove("opacity");
  $btnToDoImg.classList.add("opacity");
  $btnCalculateImg.classList.add("opacity");
});

// 계산기 기능
$btnCalculate.addEventListener("click", () => {
  // 기능 활성화
  $calculate.classList.remove("hidden");
  $paint.classList.add("hidden");
  $toDo.classList.add("hidden");
  // 버튼 이미지 활성화
  $btnCalculateImg.classList.remove("opacity");
  $btnPaintImg.classList.add("opacity");
  $btnToDoImg.classList.add("opacity");
});
