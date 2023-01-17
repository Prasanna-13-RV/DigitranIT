function sendMail(params) {
    var myname = {
        to_name : document.querySelector(".fullName").value,
        message = document.querySelector(".textarea").value,
    };

    emailjs.send("gmail", "template_9i78zcn", myname)
    .then(function(res){
        console.log("success" , res.status);
    })
}