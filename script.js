// MENU DO CELULAR

const botaoMenu = document.getElementById("menu-mobile");
const menu = document.querySelector(".nav");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    botaoMenu.classList.toggle("aberto");

    const aberto = menu.classList.contains("ativo");
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});


// FECHAR MENU AO CLICAR EM UM LINK

const linksMenu = document.querySelectorAll(".nav a");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        botaoMenu.classList.remove("aberto");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});


// ANIMAÇÃO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(".secao, .contato");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecer");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    observador.observe(elemento);
});


// EFEITO NO CABEÇALHO AO ROLAR

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(5, 7, 17, 0.97)";
    } else {
        header.style.background = "rgba(5, 7, 17, 0.88)";
    }
});