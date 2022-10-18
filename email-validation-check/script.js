const emailForm = document.querySelector(".email");
const emailInput = document.querySelector(".email__input");
const emailSpan = document.querySelector(".email__span");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validation = () => {
    const check = document.querySelector(".email__check");
    const x = document.querySelector(".email__x");
    if(emailInput.value !== "") {
        if(emailInput.value.match(emailRegex)) {
            check.classList.remove("hidden");
            x.classList.add("hidden");
            emailSpan.classList.remove("unmatch");
            emailSpan.classList.add("match");
            emailSpan.innerText = "Your Email address is Valid.";

        } else {
            x.classList.remove("hidden");
            check.classList.add("hidden");
            emailSpan.classList.remove("match");
            emailSpan.classList.add("unmatch");
            emailSpan.innerText = "Please Enter Valid Email Address";

        }
    } else {
        emailSpan.innerText = "";
        check.classList.add("hidden");
        x.classList.add("hidden");
        emailSpan.classList.remove("match");
        emailSpan.classList.remove("unmatch");
    }
}

emailInput.addEventListener("input", validation);