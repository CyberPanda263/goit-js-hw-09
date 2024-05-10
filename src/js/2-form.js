const form = document.querySelector(".feedback-form");
const email = document.querySelector("input")
const massage = document.querySelector("textarea")
const formData = { email: "", message: "" };
const setFields = JSON.parse(localStorage.getItem("feedback-form-state"));

if(setFields != null) {
    email.value = setFields.email;
    massage.value = setFields.message;
}

form.addEventListener("input", event => {
    if (event.target.nodeName === "INPUT") {
        formData.email = event.target.value;
      }
    if(event.target.nodeName === "TEXTAREA") {
        formData.message = event.target.value;
    }
    if(formData.email != "" && formData.message != "") {
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
})

form.addEventListener("submit", event => {
    event.preventDefault();
    if(email.value.length === 0 || massage.value.length === 0) {
        window.alert("Fill please all fields");
    }
    if(email.value != "" && massage.value != "") {
        console.log(formData);
        form.reset();
        formData.email = "";
        formData.message = "";
        localStorage.removeItem("feedback-form-state");
    }
})