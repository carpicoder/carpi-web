document.addEventListener("DOMContentLoaded", function(event) { window.onload = function() { window.requestAnimationFrame(function() {

const isMobile = window.innerWidth <= 768; 
const docStyle = getComputedStyle(document.documentElement);

// LOADER
gsap.to(".loader-bar", {
    scaleX: 0,
    stagger: {
        amount: .1,
        from: "center"
    },
})
gsap.to(".loader", {
    display: "none",
    delay: 1
})

const heroTitle = document.querySelector(".quien-soy-title");
const heroTitleText = new SplitType(heroTitle, {
    types: "chars, words",
    charClass: "title-letter"
})
gsap.set(heroTitleText.chars, {
    opacity: 0,
    translateY: 100,
});
gsap.to(heroTitleText.chars, {
    opacity: 1,
    translateY: 0,
    ease: "back.out(2)",
    stagger: .009,
    delay: .5
});

heroTitleText.chars.forEach((letra) => {
    letra.addEventListener("mouseenter", () => {
        gsap.to(letra, {
            translateY: Math.floor(Math.random() * 101) - 110,
            rotateZ: Math.floor(Math.random() * 101) - 50,
            translateX: Math.floor(Math.random() * 61) - 30,
            duration: .5,
            ease: "back.out",
        })
        gsap.to(letra, {
            color: "#" + Math.floor(Math.random()*16777215).toString(16),
            duration: .1,
            ease: "back.out",
        })
    })
    letra.addEventListener("mouseleave", () => {
        gsap.to(letra, {
            translateY: 0,
            rotateZ: 0,
            color: docStyle.getPropertyValue("--clr-secondary"),
            translateX: 0,
            delay: 0.5,
            duration: .7,
            ease: "back.out(4)",
        })
        gsap.to(letra, {
            color: docStyle.getPropertyValue("--clr-black"),
            delay: Math.random() * (3 - 1.5) + 1.5,
            duration: .5,
            ease: "back.out",
        })
    })
})



const heroText = document.querySelector(".quien-soy-text");
const heroTextText = new SplitType(heroText, {
    types: "chars, words, lines",
    charClass: "title-letter"
})
gsap.set(heroTextText.lines, {
    opacity: 0,
    translateY: 100,
});
gsap.to(heroTextText.lines, {
    opacity: 1,
    translateY: 0,
    stagger: .05,
    delay: .5
});


gsap.from(".main-header", {
    scaleX: 0,
    ease: "back.out(1)",
    delay: .25,
})

gsap.from(".nav-item", {
    translateX: 200,
    translateY: -100,
    opacity: 0,
    delay: .75,
    ease: "back.out(1)",
    stagger: {
        amount: .1,
    }
})

const logo = document.querySelector(".logo");
const logoText = new SplitType(logo, {
    types: "chars, words",
    charClass: "logo-letter"
})
gsap.set(logoText.chars, {
    opacity: 0,
    translateY: -100,
});
gsap.to(logoText.chars, {
    opacity: 1,
    translateY: 0,
    stagger: .01,
    ease: "back.out(3)",
    delay: 1,
});

logoText.chars.forEach((letra) => {
    letra.addEventListener("mouseenter", () => {
        gsap.to(letra, {
            translateY: -10,
            duration: .5,
            ease: "back.out",
            color: docStyle.getPropertyValue("--clr-secondary")
        })
    })
    letra.addEventListener("mouseleave", () => {
        gsap.to(letra, {
            translateY: 0,
            delay: .3,
            ease: "back.out(5)",
        })
    })
    if (letra.textContent !== ".") {
        letra.addEventListener("mouseleave", () => {
            gsap.to(letra, {
                color: docStyle.getPropertyValue("--clr-black"),
                delay: .75,
            })
        })
    }
})

gsap.from(".info-canal-stat", {
    translateY: 100,
    opacity: 0,
    delay: 1,
    ease: "back.out(2)",
    stagger: {
        amount: .5,
    }
})

const quienSoyFondo = document.querySelector(".quien-soy-foto-fondo");
gsap.set(quienSoyFondo, {
    scale: .9,
})
gsap.from(quienSoyFondo, 1, {
    scaleX: 0,
    delay: 1.25,
    ease: "back.out(4)",
})

const quienSoyFoto = document.querySelector(".quien-soy-foto-foto");
const quienSoyFotoFoto = document.querySelector(".quien-soy-foto-foto-foto");
gsap.from(quienSoyFoto, .4, {
    scale: 0,
    opacity: 0,
    delay: 1.25,
    ease: "back.out(1.5)",
});

let rotateDegree;

quienSoyFoto && quienSoyFoto.addEventListener("mouseenter", () => {
    rotateDegree = Math.random() * 20 - 10;

    gsap.set(quienSoyFotoFoto, { attr: { src: "./img/carpi-foto-a-2.png" }, duration: 2 });

    gsap.to(quienSoyFoto, .4, {
        scale: 1.2,
        rotate: rotateDegree,
        ease: "back.out(4)",
    })
});
quienSoyFoto && quienSoyFoto.addEventListener("mouseleave", () => {

    gsap.set(quienSoyFotoFoto, { attr: { src: "./img/carpi-foto-a.png" }, duration: .5 });

    gsap.to(quienSoyFoto, .4, {
        scale: 1,
        rotate: 0,
        ease: "back.out",
    })
});

quienSoyFoto && quienSoyFoto.addEventListener("mouseenter", () => {
    gsap.to(quienSoyFondo, .5, {
        scale: 0.7,
        rotate: (rotateDegree + 180) * -1,
        delay: .1,
        borderRadius: "3rem",
        ease: "back.out(4)",
    })
});
quienSoyFoto && quienSoyFoto.addEventListener("mouseleave", () => {
    gsap.to(quienSoyFondo, .4, {
        scale: .9,
        rotate: 0,
        delay: .2,
        borderRadius: "1rem",
        ease: "back.out(4)",
    })
});




const sectionTitles = document.querySelectorAll(".section-title");
sectionTitles.forEach((char, i) => {

    const text = new SplitType(char, {
        types: "chars, words",
        charClass: "title-letter"
    })

    gsap.set(text.chars, {
        fontWeight: 100,
        opacity: 0,
        translateX: 100,
    }); // Establecer valores iniciales

    gsap.to(text.chars, {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        duration: 0.5,
        fontWeight: 900,
        stagger: .05,
        scrollTrigger: {
          trigger: char.parentNode.parentNode.parentNode,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: (isMobile || char.classList.contains("videitos-title")) ? false : true,
        }
      });
      

      text.chars.forEach((letra) => {
          letra.addEventListener("mouseenter", () => {
              gsap.to(letra, {
                  translateY: Math.floor(Math.random() * 101) - 110,
                  rotateZ: Math.floor(Math.random() * 101) - 50,
                  translateX: Math.floor(Math.random() * 61) - 30,
                  duration: .5,
                  ease: "expo.out",
              })
          })
          letra.addEventListener("mouseleave", () => {
              gsap.to(letra, {
                  translateY: 0,
                  rotateZ: 0,
                  translateX: 0,
                  delay: .3,
                  ease: "back.out(3)",
              })
          })
      })

})


const allSections = document.querySelectorAll(".section");

allSections.forEach((section) => {
    gsap.set(section, { backgroundColor: docStyle.getPropertyValue("--clr-white") })

    let bgColor;
    if (section.id === "youtube") {
        bgColor = docStyle.getPropertyValue("--clr-black");
    } else if (section.id === "discord") {
        bgColor = docStyle.getPropertyValue("--clr-discord");
    } else if (section.classList.contains("section-dark")) {
        bgColor = docStyle.getPropertyValue("--clr-black");
    } else {
        bgColor = docStyle.getPropertyValue("--clr-white");
    }

    gsap.to(section, {
        backgroundColor: bgColor,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        }
      });
})


const footerTitle = document.querySelector(".footer-title");

const footerTitleText = new SplitType(footerTitle, {
    types: "chars, words",
    charClass: "title-letter"
})
gsap.set(footerTitleText.chars, {
    fontWeight: 100,
    opacity: 0,
    translateX: 100
}); // Establecer valores iniciales
gsap.to(footerTitleText.chars, {
    opacity: 1,
    translateY: 0,
    translateX: 0,
    duration: 0.5,
    fontWeight: 900,
    stagger: .03,
    scrollTrigger: {
      trigger: footerTitle,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: false,
    }
});


gsap.to(".body", {
    backgroundColor: docStyle.getPropertyValue("--clr-black"),
    duration: 10,
    scrollTrigger: {
        trigger: "#apoya-mi-contenido",
        start: "top bottom",
        end: "top bottom-=200",
        scrub: true,
    }
});


const classes = document.querySelectorAll(".class");
const indiceItems = document.querySelectorAll(".indice-item");
classes.forEach((clase) => {

    gsap.to(clase, {
        scrollTrigger: {
            trigger: clase,
            start: "top 20%",
            end: "bottom 20%",
            scrub: true,
            onEnter: () => {
                // Agregar la clase cuando se entra en el trigger
                const claseId = clase.id;
                indiceItems.forEach(indiceItem => {
                    indiceItem.classList.remove("active");

                    const itemClase = indiceItem.dataset.clase;
                    if (claseId === itemClase) indiceItem.classList.add("active");
                })
            },
            onLeaveBack: () => {
                // Agregar la clase cuando se entra en el trigger
                const claseId = clase.id;
                indiceItems.forEach(indiceItem => {
                    indiceItem.classList.remove("active");

                    const itemClase = indiceItem.dataset.clase;
                    if (claseId === itemClase) indiceItem.classList.add("active");
                })
            },
        }
    })

})


let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-1, 1); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});


const allLinks = document.querySelectorAll('a:not([href^="#"])');
allLinks.forEach((link) => {

    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetUrl = link.getAttribute("href");

        gsap.to(".loader", {
            display: "flex"
        })
        // LOADER
        gsap.to(".loader-bar", {
            scaleX: 1,
            stagger: {
                amount: .1,
                from: "center"
            },
        })

        setTimeout(function() {
            window.location.href = targetUrl;
        }, 500); 
    })

})

         
})}})