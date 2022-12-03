let burger = document.querySelector(".hamburger")


let navMenu = document.querySelector("#nav_menu")
let links = document.querySelectorAll(".nav_link")

let activeLinks = document.querySelectorAll(".main_link")
let mainLinkId = 0


burger.addEventListener("click", function() {
    navMenu.classList.toggle("nav-hide");
    burger.classList.toggle("hamburger_active")
})

// links.forEach(function(item) {   
//     item.addEventListener("click", function() {
//         navMenu.classList.add("nav-hide");
//         burger.classList.remove("hamburger_active")
//     })
// })

activeLinks.forEach((item, id) => {
    item.addEventListener("click", () => {
        activeLinks[mainLinkId].classList.remove("active");
        item.classList.add("active");
        mainLinkId = id
    })
})