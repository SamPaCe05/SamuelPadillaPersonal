
const menuBar = document.querySelector(".contenedor__menu-mbl")

const nav = document.querySelector(".navegacion")

function eliminarclase() {
    if (window.innerHeight >= 1024) {

        nav.classList.remove('oculto')
    }
}



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
