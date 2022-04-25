const images = [
    "의사생활.jpg",
    "의사생활2.jpg",
    "의사생활3.jpg"
]


const chosenImg = images[Math.floor(Math.random()*images.length)]
const bgImage = document.createElement("img");
bgImage.src = `backgroundimg/${chosenImg}`
document.body.appendChild(bgImage)