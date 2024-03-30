const inputName = document.querySelectorAll('input')[0]
const inputEmail = document.querySelectorAll('input')[1]
const inputPassword = document.querySelectorAll('input')[2]

const buttonSignUp = document.querySelector("div.form-container button")
const container = document.querySelector(".container")
const loader = document.querySelector("div.loader")

setTimeout(() => {
    loader.style.display = "none"
    container.style.display = "flex"
}, 2000);

buttonSignUp.addEventListener("click", function (event) {
    event.preventDefault()

    const userRegister = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    if(inputName.value == "" || inputEmail.value == "" || inputPassword.value == ""){
        alert("Please enter complete information")
    } else {
        async function postData(urlApi = "", data = {}){
            const config = {
                method : "POST",
                headers :{"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }

            const respon = await fetch(urlApi, config)
            return respon.json()

        }

        const res = postData("https://656708c964fcff8d730f9b4b.mockapi.io/api/login/users", userRegister)
        
        res.then(data => {
            localStorage.setItem("userRegister", JSON.stringify(data))
        })

        swal({
            icon: 'success',
            title: 'Register successful',
        }).then(() => {
            setTimeout(() => {
                window.location.href = "login.html"
            }, 500)
        })
    }
})