/* open and close menu */

const iconMenu = document.getElementById("openMenu");
const menu = document.querySelector(".menu");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".link");
// ---------------------------------------------------------
const closeResrv = document.getElementById("closeResrv");
const reservation = document.getElementById("reservation");
const resvBtn = document.querySelectorAll(".resvBtn");

// add class active to reservation
closeResrv.onclick = () => {
    reservation.classList.remove("active");
};

resvBtn.forEach((btn) => {
    btn.onclick = () => {
        reservation.classList.add("active");
    };
});

// ------------------------------------------------

iconMenu.onclick = () => {
    iconMenu.classList.toggle("fa-times");
    menu.classList.toggle("active");
};

// Add class active to link

let isClicking = false;

links.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault(); // empêche le saut instantané
        isClicking = true;

        links.forEach((l) => l.classList.remove("active"));
        li.classList.add("active");

        // récupérer l'id depuis le href du <a>
        const targetId = li.querySelector("a").getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            isClicking = false;
        }, 600);
    });
});

// SCROLL
window.addEventListener("scroll", () => {
    if (isClicking) return;

    let current = null;

    if (window.scrollY === 0 || top === 0) {
        current = "home";
    }

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.id;
        }
    });

    links.forEach((li) => {
        li.classList.remove("active");

        const hrefId = li.querySelector("a").getAttribute("href").substring(1);
        if (hrefId === current) {
            li.classList.add("active");
        }
    });
});

// add class to menu on scroll

const header = document.getElementById("header");

window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 200) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

// swiper

var swiper = new Swiper(".home-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
    slides.forEach((slides, i) => {
        slides.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    // currentIndex++;

    // if (currentIndex > slides.length - 1) {
    //     currentIndex = 0;
    // }

    currentIndex = (currentIndex + 1) % slides.length;

    showSlide(currentIndex);
}

function prevSlide() {
    // currentIndex--;

    // if (currentIndex < 0) {
    //     currentIndex = slides.length - 1;
    // }

    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

dots.forEach((dots, index) => {
    dots.addEventListener("click", () => currentSlide(index));
});

// Auto Slider
// setInterval(function () {
//     nextSlide();
// }, 3000);

// ==================================================================

const tabMenus = document.getElementsByClassName("tab-menu");
const boxs = document.getElementsByClassName("boxs");

function opentab(tabname, event) {
    for (let menu of tabMenus) {
        menu.classList.remove("active");
    }
    for (let box of boxs) {
        box.classList.remove("active");
    }
    event.currentTarget.classList.add("active");

    document.getElementById(tabname).classList.add("active");
}
