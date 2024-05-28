let form = document.getElementById("contactForm")
console.log(form)

let modal = document.getElementById('modal')
let closeBtn = document.getElementsByClassName('close')[0]
console.log(closeBtn)

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () =>{
    console.log('click close')
    modal.style.display = 'none'
})

