//JS PARA ANIMAÇOES

const gra = document.getElementById('igao')
const tst = document.getElementById('oo')

gra.addEventListener("mouseover", () =>{
    tst.classList.add('hob')
})
gra.addEventListener('mouseleave', () =>{
    tst.classList.remove('hob')
})

document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll('.oculto');

  function mostrarSeVisivel() {
    elementos.forEach(el => {
      const rect = el.getBoundingClientRect();
      const estaVisivel = rect.top < window.innerHeight - 100;

      if (estaVisivel) {
        el.classList.add('visivel');
      }
    });
  }

  window.addEventListener('scroll', mostrarSeVisivel);
  mostrarSeVisivel(); // checa no carregamento também
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  let ultimaPos = window.scrollY;

  window.addEventListener("scroll", function () {
    let atualPos = window.scrollY;

    if (atualPos > ultimaPos) {
      // Scroll pra baixo → esconde
      navbar.classList.remove("visivel");
      navbar.classList.add("oculto");
    } else {
      // Scroll pra cima → mostra
      navbar.classList.remove("oculto");
      navbar.classList.add("visivel");
    }

    ultimaPos = atualPos;
  });

  // Começa visível
  navbar.classList.add("visivel");
});
