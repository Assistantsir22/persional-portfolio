var navbar=document.querySelector('.navbar').querySelectorAll('a');
navbar.forEach(sec=>{
    sec.addEventListener("click",function(){
        navbar.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active")
    })
})