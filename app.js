/*================ CUSTOM CURSOR JS ================*/
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;");
})


window.addEventListener("load", function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
});


/*================ TOGGLE MENU JS ================*/
const tbox = document.getElementById("t-box");
const toogle = document.getElementById("toggle");
const mlist = document.getElementById("mob-list");

tbox.onclick = ()=>{
    toogle.classList.toggle('active');
    mlist.classList.toggle('active');
}


/*================ SCROLL TO TOP BTN JS ================*/
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        scrollBtn.style.display = 'block';
    }
    else {
        scrollBtn.style.display = 'none';
    }
})

scrollBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})


/*================ POP UP JS ================*/
const popup = document.querySelector('.popup');
const popClose = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    }, 10000);
}

// Close pop-up
popClose.addEventListener('click', () => {
    popup.style.display = "none"
})


/*================ HEADER JS ================*/
const header = document.getElementById("head");

const navList = document.getElementById("nav-list");
const logo = document.getElementById("logo");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
        header.style.background = "white";
        logo.src = "IMAGE/logo.png";
        navList.classList.add("active");
    }
    else {
        header.style.background = "transparent";
        navList.classList.remove('active');
        logo.src = "IMAGE/logo3.png";
    }
});


/*================ TESTIMONIAL ================*/
var slide = document.getElementById('slide');
var up = document.getElementById('up');
var down = document.getElementById('down');

let x = 0;

up.onclick = ()=>{
    if(x > -900){
        x = x - 300;
        slide.style.top = x + "px";
    }

}

down.onclick = ()=>{
    if(x < 0){
        x = x + 300;
        slide.style.top = x + "px";
    }
}




    