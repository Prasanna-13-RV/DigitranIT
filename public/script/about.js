const weProvideDiv1 = document.querySelectorAll('.we-provide-div1');
const weProvideDiv2 = document.querySelectorAll('.we-provide-div2');
const weProvideDiv3 = document.querySelectorAll('.we-provide-div3');

const weProvideMaindiv1 = document.querySelectorAll('.we-provide-maindiv1');
const weProvideMaindiv2 = document.querySelectorAll('.we-provide-maindiv2');
const weProvideMaindiv3 = document.querySelectorAll('.we-provide-maindiv3');

const flipWeProvideDiv1 = document.querySelectorAll('.flip-we-provide-div1');
const flipWeProvideDiv2 = document.querySelectorAll('.flip-we-provide-div2');
const flipWeProvideDiv3 = document.querySelectorAll('.flip-we-provide-div3');

const flipButton1 = document.querySelectorAll('.flip-button1');
const flipButton2 = document.querySelectorAll('.flip-button2');
const flipButton3 = document.querySelectorAll('.flip-button3');



const flipcard = (button, weProvideMaindiv, flipWeProvideDiv) => {
    button.forEach(element => {
        element.addEventListener("click", () => {
            weProvideMaindiv.forEach(e => {
                e.classList.toggle('we-provide-maindiv-active');
            });
            flipWeProvideDiv.forEach(e => {
                e.classList.toggle('flip-button-active');
            });
        })
    });
}

flipcard(weProvideDiv1, weProvideMaindiv1, flipWeProvideDiv1);
flipcard(weProvideDiv2, weProvideMaindiv2, flipWeProvideDiv2);
flipcard(weProvideDiv3, weProvideMaindiv3, flipWeProvideDiv3);