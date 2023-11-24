const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.webp", "pic2.jpeg", "pic3.webp", "pic4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage () {
    let randomIndex = Math.floor(Math.random() *  images.length);
    console.log(randomIndex)
    image.src = "images/" + images[randomIndex]

}