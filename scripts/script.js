let distance = 0;
let navList = document.querySelectorAll(".nav__link");

let skillProgresses = document.querySelectorAll(".skillList__procent");


window.onload = function(){
    distance = window.scrollY;
    if (distance >= 750){
        skillProgresses.forEach(e => {
            let progress = e.textContent;
            e.previousSibling.style.width = progress;
        });
    }
}
window.onscroll = function(e) {
    distance = window.scrollY;
    // console.log(distance);
    if (distance < 800){
        resetClass(navList, "active");
        navList[0].classList.add("active")
    }
    if (distance >= 750){
        skillProgresses.forEach(e => {
            let progress = e.textContent;
            e.previousSibling.style.width = progress;
            // if(progress[0] >= 9){
            //     e.classList.add("active")
            // }
        });
    }
    if (distance >= 800){
        resetClass(navList, "active");
        navList[1].classList.add("active")
        
    }
    if (distance >= 1930){
        resetClass(navList, "active");
        navList[2].classList.add("active")
    }
    if (distance >= 2650){
        resetClass(navList, "active");
        navList[3].classList.add("active")
    }
};

function resetClass(ndList, className){
    ndList.forEach(element => {
        element.classList.remove(className)
    });
}
function addClass(ndList, className){
    ndList.forEach(element => {
        element.classList.add(className)
    });
}

document.querySelector(".portfolio__nav").addEventListener("click", function(e){
    let activeBox = document.querySelector(".activeBox");

    let workBox =  document.querySelector(".works");
    let allWorks = document.querySelectorAll(".works__item");
    let worksOnly = document.querySelectorAll(".work");
    let studyOnly = document.querySelectorAll(".study");
    

    let arr = document.querySelectorAll(".portfolio__nav-item");
    arr.forEach(element => {
        element.classList.remove("active");
    });
    
    if (e.target === arr[0]){
        activeBox.style.left = '0';
        e.target.classList.add("active");
        resetClass(worksOnly, "none");
        addClass(studyOnly, "none");
        
    }
    else if (e.target === arr[1]){
        activeBox.style.left = "33.333%";
        e.target.classList.add("active");
        resetClass(studyOnly, "none");
        resetClass(worksOnly, "none");
    }
    else if (e.target === arr[2]){
        activeBox.style.left = '66.666%';
        e.target.classList.add("active");
        resetClass(studyOnly, "none");
        addClass(worksOnly, "none");
    }
    let i = 0;
    let valueAll = 0;
    allWorks.forEach(element => {
        valueAll++;
        element.classList.forEach(el => {
            if (el == "none"){
                i++;
            }
        });
    });
    if (valueAll - i <= 3){
        resetClass([workBox], "wrpF");
    }
    else{
        addClass([workBox], "wrpF");
    }
})





let burger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav")
let targetID;
let nav_links = document.querySelectorAll(".nav__link");
nav_links.forEach(function (link) { 
    link.addEventListener("click", function(even){
        even.preventDefault();
        burger.classList.remove("open");
        menu.classList.remove("active");
        targetID = link.getAttribute('href'); 
            document.querySelector(targetID).scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            })
    });
});
burger.addEventListener("click", function(){
    burger.classList.toggle("open");
    menu.classList.toggle("active");
});
















































