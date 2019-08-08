const links = document.querySelectorAll("header nav a");
let contentLocation = document.querySelector(".content-container");
const errorContainer = document.querySelector(".error");
let url = "http://localhost:8888/imm2019/mtm1526/final/hot-topics/";


function handleClick(ev) {
    // preventing the default behaviour of the link tag
    ev.preventDefault();

    let clickedLink = ev.target;

    //fetch url value
    url = clickedLink.href;
    loadContent(url);
    console.log(clickedLink.href);
}

for (let link of links) {
    link.addEventListener("click", handleClick);
}


function loadContent(urlValue) {
    //here is when you want to use your fetch mthd
    //fetch content requested
    fetch(url)
        .then(function (responseFile) {
            if (responseFile.statusText === "OK") {
                return responseFile.text();
                //or convert the retrieved file to a json file and then send to next function
            }
            throw new Error(responseFile.statusText)
        })
        .then(function (data) { // data is the json file that was returned fom previous function
            console.log(data);
            contentLocation.innerHTML = data;
        })
        .catch(function (err) {
            console.log(`${err.name}: ${err.message}`);
        });
}
loadContent(url);
