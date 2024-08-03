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
const menu = document.querySelector('#mm');
const noscroll = document.querySelector('html');

openbtn.addEventListener('click', mobilemenu);
closebtn.addEventListener('click', close);

function mobilemenu() {
    menu.style.right = "0%";
    closebtn.style.right = "15px";
    openbtn.classList.add('hide');
    noscroll.classList.add('active');
}

function close() {
    menu.style.right = "-100%";
    closebtn.style.right = "-100%";
    openbtn.classList.remove('hide');
    noscroll.classList.remove('active');
}