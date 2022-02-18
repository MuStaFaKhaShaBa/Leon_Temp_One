// Botton To Top
let Botton_toTop= document.querySelector(".to-Top");

let element_secSpan = document.querySelector(".head .menu span:nth-child(2)");

function Active() {
    element_secSpan.style.cssText = `width : 100%; margin-left : 0`;
    element_secSpan.parentElement.nextElementSibling.style.cssText = `display : block`;
}

function notActive() {

    element_secSpan.style.cssText = `width : 70%; margin-left : 30%`;
    element_secSpan.parentElement.nextElementSibling.style.cssText = `display : none`;
}

element_secSpan.parentElement.onclick = () => {
    element_secSpan.parentElement.classList.toggle("active");

    if (element_secSpan.parentElement.classList.contains("active")) {
        Active();
    } else {
        notActive();
    }
}

element_secSpan.parentElement.nextElementSibling.onclick = () => {
    notActive();
}


// Services

let element_Serv = document.querySelectorAll(".special-head h2");

function reach(rule) {
    element_Serv[rule].style.cssText = `transform:translatex(0)`;
    element_Serv[rule].nextElementSibling.style.cssText = `transform:translatex(0)`;
}

function not_Reach(rule) {

    element_Serv[rule].style.cssText = `transform:translatex(-1000px)`;
    element_Serv[rule].nextElementSibling.style.cssText = `transform:translatex(1000px)`;
}

function largeMedia() {
    if (window.scrollY >= 627) {
        reach(0);
    } else{
        not_Reach(0);
    }
    if (window.scrollY >= 1395) {
        reach(1);
    } else{
        not_Reach(1);
    }
    if (window.scrollY >= 2108) {
        reach(2);
    } else{
        not_Reach(2);
    }
    if (window.scrollY >= 3016) {
        reach(3);
    } else{
        not_Reach(3);
    }
}

function mediumMedia() {
    if (window.scrollY >= 880) {
        reach(0);
    }
    else{
        not_Reach(0);
    }
    if (window.scrollY >= 1950) {
        reach(1);
    } else{
        not_Reach(1);
    }
    if (window.scrollY >= 2794) {
        reach(2);
    } else{
        not_Reach(2);
    }
    if (window.scrollY >= 4013) {
        reach(3);
    } else{
        not_Reach(3);
    }
}

function smallMedia() {
    if (window.scrollY >= 1036) {
        reach(0);
    }
    else{
        not_Reach(0);
    }
    if (window.scrollY >= 2206) {
        reach(1);
    } else{
        not_Reach(1);
    }
    if (window.scrollY >= 3932) {
        reach(2);
    }
    else{
        not_Reach(2);
    }
    if (window.scrollY >= 5328) {
        reach(3);
    }
    else{
        not_Reach(3);
    }
}

window.onscroll = () => {
    if (window.matchMedia('(min-width: 1185px)').matches) { // large 
        largeMedia();
    } else if (window.matchMedia('(min-width: 682px)').matches) { // medium 
        mediumMedia()
    } else if (window.matchMedia('(max-width: 681px)').matches) { // Small 
        smallMedia();
    }

    if(window.scrollY >= 749){
        Botton_toTop.style.display =`block`;
    }
    else
    Botton_toTop.style.display =`none`;
}


Botton_toTop.onclick=()=>{
    window.scrollTo(0,0);
}
