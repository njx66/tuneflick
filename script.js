var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const header = document.querySelector('#header');

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
            header.style.top = "-80px"
    } else {
            header.style.top = "0"
    }
    lastScrollTop = scrollTop;
});

const openbtn = document.querySelector('#bars');
const closebtn = document.querySelector('#times');
const animate = document.querySelector('#mm');
const mask = document.querySelector('#mask');
const filter = document.querySelector('#content-wrapper');
const body = document.querySelector('body');

openbtn.addEventListener('click', mobilemenu);
closebtn.addEventListener('click', close);
mask.addEventListener('click', close);


function mobilemenu() {
    animate.style.right = "0%",
    openbtn.style.display = "none",
    closebtn.style.right = "15px",
    mask.style.display = "block",
    filter.style.filter = "blur(1px)",
    filter.style.overflow = "hidden",
    body.classList.add('fixed')
}

function close() {
    animate.style.right = "-100%",
    closebtn.style.right = "-100%";
    openbtn.style.display = "block";
    mask.style.display = "none",
    filter.style.filter = "none",
    filter.style.overflow = "hidden",
    body.classList.remove('fixed')
}