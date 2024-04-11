}

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-10T23:59:59");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
18 changes: 14 additions & 4 deletions18  
main.js
@@ -1,11 +1,21 @@
const botoes = document.querySelectorAll(".botao");

for (let i=0; i < botoes.length; i++){
botoes[i].onclick = function() {
for (let i = 0; i < botoes.length; i++) {
botoes[i].onclick = function () {

for (let j=0; j <botoes.length; j++){
for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-10T23:59:59");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;