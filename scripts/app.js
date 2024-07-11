//Define o comportamento das interações com barra de navegação
const navButton = document.querySelector(".nav__button");
const navLinks = document.querySelector(".nav__links");
const clickOut = document.querySelectorAll("section");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("ativo");
    navLinks.classList.toggle("ativo");
})
clickOut.forEach((section) => {
    section.addEventListener("click", () => {
        navButton.classList.remove("ativo");
        navLinks.classList.remove("ativo");
    })
})

//Envia o e-mail do usuário para a planilha.
document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = document.querySelector('#email').value;

    if (!regex.test(email)) {
        alert('Você deve digitar um e-mail válido.');
        return
    }

    fetch('https://api.sheetmonkey.io/form/fMQ24qrsnpG39y4Ad11scz',  {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    })

    const ctaButton = document.querySelector("#ctabutton");
    ctaButton.textContent = 'Cadastro realizado com sucesso!';
})

//Traduz a página para o inglês
const tradutor = document.querySelector('.tradutor')

tradutor.addEventListener('click', ()=> {
    traduzirPagina()
})

function pegaTextos () {
    const textos = document.querySelectorAll('.trad');
    textos.forEach((texto) => {
        console.log(texto.innerHTML)
    } )
    return Array.from(textos).map(textos => textos.innerText);
}

function pegaElementosParaTraduzir () {
    return document.querySelectorAll('.trad');
}

const textosOriginais = pegaElementosParaTraduzir()
const textosTraduzidos = [
    'Home',
    'Products',
    'About',
    'Stage',
    'Contact',
    'Traduzir'
]

function traduzirPagina() {
    const elementos = pegaElementosParaTraduzir ();
    elementos.forEach((elemento, index) => {
        if (elemento.innerText === textosOriginais[index]) {
            elemento.innerText = textosTraduzidos[index];
        }
    });
}