const images = ["background-01.jpg", "background-02.jpg", "background-03.jpg", "background-04.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img") // html element 생성
const bgCover = document.createElement("div") 

bgImage.src = `img/${chosenImage}`
bgImage.classList.add("bg-image")
bgCover.classList.add("bg-cover")

document.body.appendChild(bgImage)
document.body.appendChild(bgCover)

