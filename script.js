let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let nav = document.querySelector(".navContainer");

function openContent(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
        close.style.display = "none";
        hamburger.style.display = "block";
        // console.log("999")
    }else{
        nav.style.display = "block";
        close.style.display = "block";
        hamburger.style.display = "none";
        // console.log("ddd")
    }
}


hamburger.addEventListener("click", openContent);
close.addEventListener("click", openContent);


let pages = document.querySelectorAll(".pages h4");
let pagesContent = document.querySelectorAll(".pages aside");
// console.log(pages.lastElementChild);
for(let i = 0; i < pages.length; i++){
function open(){
        if(pagesContent[i].style.display = "none"){
            pagesContent[i].style.display = "flex";
            pages[i].style.borderBottom = "4px solid var(--Soft-Red)"
        }else{
            pagesContent[i].style.display = "none";
            pages[i].style.borderBottom = "none"
        }
    }
    pages[i].addEventListener("click", open)
}


function open1(){
    if(pagesContent[0].style.display = "none"){
        pagesContent[0].style.display = "flex";
        pagesContent[1].style.display = "none"
        pagesContent[2].style.display = "none"
    }else{
        pagesContent[0].style.display = "none"
        pagesContent[1].style.display = " flex"
        pagesContent[2].style.display = " flex"
    }
}
// open1();
pages[0].addEventListener("click", open1);



function open3(){
    if(pagesContent[0].style.display = "none"){
        pagesContent[0].style.display = "none";
        pagesContent[1].style.display = "flex"
        pagesContent[2].style.display = "none"
    }else{
        pagesContent[0].style.display = "flex"
        pagesContent[1].style.display = " none"
        pagesContent[2].style.display = " flex"
    }
}
// open1();
pages[2].addEventListener("click", open3);

function open2(){
    if(pagesContent[0].style.display = "none"){
        pagesContent[0].style.display = "none";
        pagesContent[1].style.display = "none"
        pagesContent[2].style.display = "flex"
    }else{
        pagesContent[0].style.display = "flex"
        pagesContent[1].style.display = " none"
        pagesContent[2].style.display = " none"
    }
}
// open1();
pages[1].addEventListener("click", open2);

let li = document.querySelectorAll(".callLi");
let callLiContent = document.querySelectorAll("ul li ul");
for(let i = 0; i < li.length; i++){
    function load(){
        if(callLiContent[i].style.display = "none"){
            callLiContent[i].style.display = "block"
        }else if(callLiContent[i].style.display = "block"){
            callLiContent[i].style.display = "none"
        }else{
            callLiContent[i].style.display = "none"
        }
    }

    li[i].addEventListener("click", load)
}