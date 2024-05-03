const images = ["img01.jpg","img02.jpg","img03.jpg"]
const BG = "background";

var index = Math.floor(Math.random()*images.length);
const chosenImage = images[index];


const bgImage = document.createElement("img");

bgImage.className = "background";
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); //이까지만 하면 사이즈가 안맞는다.

