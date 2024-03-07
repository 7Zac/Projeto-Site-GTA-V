const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataforma");

botao.addEventListener ("click", () => {
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
    elementoPlataformas.classList.toggle("ativo");
} 
);