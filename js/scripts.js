
const menuCel = document.querySelector(".contenedor__menu-mbl")
const navegacion = document.querySelector(".navegacion")
const links = document.querySelectorAll(".nav-item a")

// links.forEach(e => {
//     console.log(e.innerHTML);
// })

menuCel.addEventListener('click', e => {
    menuCel.classList.add('oculto')
    navegacion.classList.remove('oculto')
    navegacion.classList.add('navegacion--activa')
})


if (window.innerWidth < 1024) {
    links.forEach(link => {
        link.addEventListener('click', e => {

            navegacion.classList.add("oculto")
            navegacion.classList.remove("navegacion--activa")
            menuCel.classList.remove("oculto")
        })

    })
}
function aux() {
    if (window.innerWidth <= 1023 && navegacion.classList.contains("navegacion--activa") == false) {
        menuCel.classList.remove('oculto')
    }
}
function cargar() {
    if (window.innerWidth >= 1024) {
        navegacion.classList.remove("navegacion--activa")
    }
}
window.addEventListener('resize', cargar)
window.addEventListener('load', cargar)

window.addEventListener('resize', aux)
window.addEventListener('load', aux)

// const menuBar = document.querySelector(".contenedor__menu-mbl")
// const nav = document.querySelector(".navegacion")

// function eliminarclase() {
//     if (window.innerWidth >= 1024) {
//         console.log("aoskask")
//         nav.classList.remove('oculto')
//     }
// }

// window.addEventListener('resize', eliminarclase())
// window.addEventListener('load', eliminarclase())

// function barra() {
//     if (window.innerWidth > 1024) {
//         menuBar.addEventListener('click', () => {

//             menuBar.classList.add('oculto');
//             nav.classList.add('navegacion--activa')
//             nav.classList.remove('oculto')

//         })

//         const links = document.querySelectorAll('.navegacion a');
//         links.forEach(link => {
//             link.addEventListener('click', e => {
//                 menuBar.classList.remove('oculto')
//                 nav.classList.add('oculto')
//                 nav.classList.remove('navegacion--activa')
//             })

//         })
//     }
// }
// window.addEventListener('click', barra());



// !footer comandos


document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'i') {
        e.preventDefault()
        window.location.href = 'https://www.instagram.com/sampcd/'
    } else if (e.ctrlKey && e.key === 'x') {
        e.preventDefault()
        window.location.href = 'https://x.com/Samuel38647306'
    } else if (e.ctrlKey && e.key === 'f') {
        e.preventDefault()
        window.location.href = 'https://www.facebook.com/samuel.padillacedeno'
    }
})



// !idiomas
const cambios = document.querySelectorAll("[data-section]")

const leer = async idm => {
    const json = await fetch(`./json/${idm}.json`)
    const datos = await json.json()
    cambios.forEach(lan => {
        const section = lan.dataset.section
        const value = lan.dataset.value

        //   lan.textContent = datos[section][value] || ''

        lan.innerHTML = datos[section][value]
    })
}


const toggle = document.getElementById('toggle')
let idioma;
toggle.addEventListener('click', e => {
    if (toggle.checked) {
        idioma = 'en';
        leer(idioma)
    } else {
        idioma = 'es';
        leer(idioma)

    }
})


