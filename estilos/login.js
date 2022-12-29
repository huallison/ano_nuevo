var loginOpen = document.querySelector(".login.close")
var login = document.querySelector(".login.open")

login.addEventListener("click", function(){
    login.classList.remove("open")
    login.classList.add("close")
    loginOpen.classList.remove("close")
    loginOpen.classList.add("fun")
})
