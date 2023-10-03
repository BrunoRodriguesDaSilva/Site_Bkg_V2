const side_Bar = document.getElementById("side__bar");

function abrirMenu() {
    side_Bar.style.right = "0px";
}

function fecharMenu() {
    side_Bar.style.right = "-100px";
}

export function inicializarMenu() {
    const botaoFecharMenu = document.getElementById("fechar__menu");
    const botaoAbrirMenu = document.getElementById("abrir__menu");
    
    botaoFecharMenu.addEventListener("click", fecharMenu);
    botaoAbrirMenu.addEventListener("click", abrirMenu);
}


