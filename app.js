let x = document.getElementById("name")
let y = document.getElementById("password")

let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    console.log("Your name is - ", x.value + " " + "your password is - ", y.value)
})
