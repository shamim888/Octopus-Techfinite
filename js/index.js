// =======================head-1 section==========================
// const min = document.querySelector(".cross")
// const area = document.querySelector(".place")

// min.addEventListener("click", function(){
//     area.classList.add("hidden")
// })


// =====================Menu Sec===================
const btn = document.querySelector(".mobile-menu-btn")
const menu = document.querySelector(".mobile-menu")

btn.addEventListener("click", function(){
    menu.classList.toggle("hidden")
})

//==============================resize the navbar on scroll=========================
window.onscroll = function() {
    if(window.innerWidth > 1023) {
        scrollFunction()
    }
    else {
      // document.getElementById("sec01").style.display = "none";
      // document.getElementById("sec01").classList.add("hidden");
    }
    };

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    // document.getElementById("navbar").style.padding = "40px";
    // document.getElementById("sec01").style.display = "none";
    // document.getElementById("sec01").classList.add("hidden");
    document.getElementById("sec01").classList.remove("lg:flex");
    document.getElementById("logo").style.width = "100px";
    document.getElementById("spacing").classList.remove("md:space-y-4");
  } else {
    document.getElementById("sec01").classList.add("lg:flex")
    // document.getElementById("sec01").style.display = "flex";
    // document.getElementById("sec01").classList.remove("hidden");
    document.getElementById("logo").style.width = "100%";
    document.getElementById("spacing").classList.add("md:space-y-4");
    // document.getElementById("navbar").style.padding = "62px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}

if(window.innerWidth < 1023) {
  document.getElementById("sec01").style.display = "none";
}

// ======================Sub-menu========================

const menus = document.querySelectorAll(".menus");
// const menuItems = document.getElementsByClassName("menuItems");
const menuLinks = document.querySelectorAll("#sec02 li a");
const subMenus = document.querySelectorAll("ul li ul");


menus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    let subs = menu.querySelector(".menuItems")
    if(subs) {
      subs.classList.add("block");
      subs.classList.remove("hidden");
      menu.style.backgroundColor = "#007acc";
    }
  })

  menu.addEventListener("mouseleave", () => {
    let subs = menu.querySelector(".menuItems")
    if(subs) {
      subs.classList.add("hidden");
      subs.classList.remove("block");
      menu.style.backgroundColor = "";
    }
  })
})

// menus[0].addEventListener('mouseover', function(){
//   menuItems[0].classList.remove("hidden");
// })
// menus[0].addEventListener('mouseleave', function(){
//   menuItems[0].classList.add("hidden");
// })

// subMenus[0].addEventListener('mouseover', function(){
//   menuLinks[0].style.backgroundColor = "#007acc";
// })

// subMenus[0].addEventListener('mouseleave', function(){
//   menuLinks[0].style.backgroundColor = "";
// })

// ==============



// menus[6].addEventListener('mouseover', function(){
//   menuItems[1].classList.remove("hidden");
// })
// menus[6].addEventListener('mouseleave', function(){
//   menuItems[1].classList.add("hidden");
// })

// subMenus[1].addEventListener('mouseover', function(){
//   menuLinks[10].style.backgroundColor = "#007acc";
// })

// subMenus[1].addEventListener('mouseleave', function(){
//   menuLinks[10].style.backgroundColor = "";
// })
