const get = (query, dom = document) => [...dom.querySelectorAll(query)];

const searchbutton = get(".s-btn")[0];
const searchinput = get("s-input")[0];

searchinput.addEventListener("input", () => {
    const searchquery = searchinput.value;
    searchbutton.href = "/search.html?query=" + encodeURIComponent(searchquery);
});