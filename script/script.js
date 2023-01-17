const cardContent = document.querySelector('.card-content');
const readMore = document.querySelector(".read-more");
const cardOne = document.querySelector(".cardone");
const cardImage = document.querySelector(".card-image")


readMore.addEventListener("click" , () => {
    cardOne.classList.toggle("rotate")
    cardImage.classList.toggle("image-remove")
    cardContent.classList.toggle("content-display")
});
