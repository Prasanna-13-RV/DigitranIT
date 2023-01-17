const cursor = document.querySelector('.cursor');
const cardDivImage = document.querySelectorAll('.card-div-image');


cardDivImage.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        cursor.classList.add('cursor-active');
        x = e.pageX;
        y = e.pageY;
        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
    });
    element.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('cursor-active');
    });
});


document.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
});