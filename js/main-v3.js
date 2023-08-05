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

