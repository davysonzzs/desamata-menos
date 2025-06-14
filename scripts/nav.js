//EVENTOS NAVE

const cio = document.getElementById('cio')
const fos = document.getElementById('fos')
const deo = document.getElementById('deo')
const reo = document.getElementById('res')

cio.addEventListener('click', () => {
    const des = document.getElementById('incio')
    des.scrollIntoView({
        behavior: 'smooth'
    })
})
fos.addEventListener('click', () =>{
    const das = document.getElementById('infos')
    das.scrollIntoView({
        behavior: 'smooth'
    })
})

deo.addEventListener('click', () =>{
    const dos = document.getElementById('video')
    dos.scrollIntoView({
        behavior: 'smooth'
    })
})

reo.addEventListener('click', () =>{
    const dus = document.getElementById('final')
    dus.scrollIntoView({
        behavior: 'smooth'
    })
})