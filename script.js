window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

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


// search actions

const get = (query, dom = document) => [...dom.querySelectorAll(query)];

const searchButton = get("#search-btn")[0];
const searchInput = get(".s-input");

searchInput.forEach(function (sInput) {
    sInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
    
            document.querySelector("#search-btn").click();
        }
    });

    sInput.addEventListener("input", () => {
        const searchQuery = sInput.value;
        searchButton.href = "/search.html?query=" + encodeURIComponent(searchQuery);
    });
});

// menu toggling

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
    noscroll.classList.add('live');
}

function close() {
    menu.style.right = "-100%";
    closebtn.style.right = "-100%";
    openbtn.classList.remove('hide');
    noscroll.classList.remove('live');
}