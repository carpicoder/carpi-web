let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let navList = document.querySelector("#nav-list");
let navLinks = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})


closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})


navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})


let miniaturas = document.querySelectorAll(".videito-thumbnail");
miniaturas.forEach((miniatura) => {

    miniatura.addEventListener("click", () => {
        let imagen = miniatura.querySelector(".thumbnail-imagen");
        let imagenId = imagen.dataset.videoId;
        miniatura.innerHTML = `
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/${imagenId}?autoplay=1&muted=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        `;
    });

})



// Suscriptores

// Get subs

const youtubeKey = 'AIzaSyBY8flILT2zht5OXNNhfhdgzlCIg8w2ywU';
const youtubeUser = 'UC53KeIgcYPozO6SqlN6edbw';
const subCount = document.querySelector("#subCount");
const videoCount = document.querySelector("#videoCount");
const viewCount = document.querySelector("#viewCount");

let SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];

function abbreviateNumber(number){

    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        if (data.items) {
            if (subCount) {
                subCount.innerText = `${abbreviateNumber(data.items[0].statistics.subscriberCount)}`
            };
            if (videoCount) {
                videoCount.innerText = `${abbreviateNumber(data.items[0].statistics.videoCount)}`
            };
            if (viewCount) {
                viewCount.innerText = `${abbreviateNumber(data.items[0].statistics.viewCount)}`
            };
        }
    })
}

getSubscribers();