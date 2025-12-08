let btns = document.querySelectorAll("button")
btns.forEach(btn =>{
    btn.addEventListener("click", toggleList)
})

function toggleList(e){
    e.target.parentNode.nextElementSibling.classList.toggle("hidden")
}