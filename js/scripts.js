
const menuBar = document.querySelector(".contenedor__menu-mbl")
const nav = document.querySelector(".navegacion")

function eliminarclase() {
    if (window.innerWidth >= 1024) {
        console.log("aoskask")
        nav.classList.remove('oculto')
    }
}

window.addEventListener('resize', eliminarclase())
window.addEventListener('load', eliminarclase())

function barra() {
    if (window.innerWidth > 1024) {
        menuBar.addEventListener('click', () => {
            menuBar.classList.add('oculto');
            nav.classList.add('navegacion--activa')
            nav.classList.remove('oculto')
        })
        const links = document.querySelectorAll('.navegacion a');
        links.forEach(link => {
            link.addEventListener('click', e => {
                menuBar.classList.remove('oculto')
                nav.classList.add('oculto')
                nav.classList.remove('navegacion--activa')
            })
        })
    }
}
window.addEventListener('click', barra());




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
