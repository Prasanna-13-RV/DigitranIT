const gsapanimation1 = (trig, position) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: trig,
                start: "top 80%",
            },
        })
        .from(trig, {
            duration: 0.8,
            left: position,
            stagger: 1
        });
}

gsapanimation1(".div1-sixth-one", "50%")
gsapanimation1(".div1-sixth-two", "-50%")
gsapanimation1(".div1-sixth-three", "50%")
gsapanimation1(".div1-sixth-four", "-50%")
gsapanimation1(".div1-sixth-five", "50%")
gsapanimation1(".div1-sixth-six", "-50%")


const gsapanimation2 = (trig, position, topPosition) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: trig,
                start: "top 80%",
            },
        })
        .from(trig, {
            duration: 0.3,
            left: position,
            top: topPosition,
            stagger: 1
        });
}
gsapanimation2(".picture-div-one", "-50%", "0%")
gsapanimation2(".picture-div-four", "50%", "0%")
gsapanimation2(".picture-div-three", "50%", "0%")
gsapanimation2(".picture-div-six", "-50%", "0%")
gsapanimation2(".picture-div-two", "0%", "-50%")
gsapanimation2(".picture-div-five", "0%", "50%")

gsapanimation3 = (trig, position) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: trig,
                start: "top 80%",
            },
        })
        .from(trig, {
            duration: 0.3,
            left: position,
            stagger: 1
        });
}

gsapanimation3(".div-forth-one", "-50%")
gsapanimation3(".div-forth-two", "50%")
gsapanimation3(".div-forth-three", "-50%")
gsapanimation3(".div-forth-four", "50%")

gsapanimation4 = (trig, position) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: trig,
                start: "top 100%",
            },
        })
        .from(trig, {
            duration: 0.1,
            rotation : position,
        });
}

gsapanimation4(".div-eight-one", "40deg")
gsapanimation4(".div-eight-two", "40deg")
gsapanimation4(".div-eight-three", "40deg")