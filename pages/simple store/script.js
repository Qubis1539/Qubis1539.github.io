let sliderItems = document.querySelectorAll(".slider__item");
let mainIMG = document.querySelector('.slider__main');

let val = document.querySelector(".counter__value");
let count = 1;

function removeClass(list, classN) { 
    list.forEach((e) =>{
        e.classList.remove(classN)
    })
}

sliderItems.forEach((item) => {
    item.addEventListener("click", function(){
        mainIMG.src = item.src;
        removeClass(sliderItems, "slider-active");
        item.classList.add("slider-active");
    })
})


document.querySelector(".counter__add").addEventListener("click", function(){
    count += 1;
    val.innerHTML = count
})
document.querySelector(".counter__remove").addEventListener("click", function(){
    if(count - 1 >= 0){
        count -= 1;
        val.innerHTML = count   
    }
    
})

const menu = document.querySelector('.nav-mobile'),
menuItem = document.querySelectorAll('.link'), 
hamburger = document.querySelector('.nav__burger');
let main = document.querySelector("main");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("nav__burger-active");
    menu.classList.toggle('menu-active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove("nav__burger-active");
        menu.classList.remove('menu-active');
    })
})

main.addEventListener('click', () => {
    hamburger.classList.remove("nav__burger-active");
    menu.classList.remove('menu-active');
});

let quickBuyLink = document.querySelector(".quickBuy");
let quickBuyForm = document.querySelector(".cardForm");
let closeQuickBuy = document.querySelector(".exit");


quickBuyLink.addEventListener("click", function(event){
    
    quickBuyForm.classList.add("cardForm-active");
    event.preventDefault();
})


closeQuickBuy.addEventListener("click", function(){
    quickBuyForm.classList.remove("cardForm-active");
})
