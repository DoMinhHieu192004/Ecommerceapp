const inputName = document.querySelectorAll('input')[0]
const inputPassword = document.querySelectorAll('input')[1]

const button = document.querySelector("div.form-container button")
const container = document.querySelector(".container")
const loader = document.querySelector("div.loader")

container.style.display = 'none'
setTimeout(() => {
    loader.style.display = "none"
    container.style.display = "flex"
}, 2000);

button.addEventListener("click", function (event) {
    event.preventDefault()
    if(inputName.value == "" || inputPassword.value == ""){
        alert("Please enter complete information")
    } else {
    const userRegisterLocalStorage = JSON.parse(localStorage.getItem("userRegister"))

    if(inputName.value == userRegisterLocalStorage.name && inputPassword.value == userRegisterLocalStorage.password){
        swal({
            icon: 'success',
            title: 'Login successful',
        }).then(() => {
            setTimeout(() => {
                window.location.href = "index.html"
            },500)})
    } else{
        swal({
            title: 'Login Fail',
            icon: 'error',
        })
        inputName.value = ""
        inputPassword.value = ""
    }
}
})