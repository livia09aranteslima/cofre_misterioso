const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");
const novamente = document.getElementById("novamente");
const espace = document.getElementById("espace");
const recado = document.getElementById("recado");

let tentativa = 0;
let vitoria = 0;
let cofrePremiado = 0;

cofre1.addEventListener("click", function(){
    recado.textContent = "Você abriu o cofre 1!"
});

cofre2.addEventListener("click", function(){
    recado.textContent = "Você abriu o cofre 2!"
});

cofre3.addEventListener("click", function(){
    recado.textContent = "Você abriu o cofre 3!"
});

function sortearCofre() {
  return Math.floor(Math.random() * 3) + 1;
}

function alternarCofres(desabilitar) {
  cofre1.disabled = desabilitar;
  cofre2.disabled = desabilitar;
  cofre3.disabled = desabilitar;
}

function escolherCofre(numeroCofre) {
  let mensagem = `Você abriu o cofre ${numeroCofre}! `;

  tentativa++;

  if (numeroCofre === cofrePremiado) {
    vitoria++;
    mensagem += "Parabéns, você encontrou o prêmio! 🎉";
  } else {
    mensagem += `O cofre está vazio! O prêmio estava no cofre ${cofrePremiado}. ❌`;
  }

  recado.textContent = mensagem;

  if (tentativasPlacar) tentativasPlacar.textContent = tentativa;
  if (vitoriasPlacar) vitoriasPlacar.textContent = vitoria;

  alternarCofres(true);
  recado.textContent = mensagem;

  tentativasPlacar.textContent = tentativa++;
  vitoriasPlacar.textContent = vitoria++;

  alternarCofres(true);
}

function novaRodada() {
  cofrePremiado = sortearCofre(); 
  recado.textContent = "Escolha um cofre para tentar a sorte!"; 
  alternarCofres(false); 
}

cofre1.addEventListener("click", function() {
  escolherCofre(1);
});

cofre2.addEventListener("click", function() {
  escolherCofre(2);
});

cofre3.addEventListener("click", function() {
  escolherCofre(3);
});

novamente.addEventListener("click", novaRodada);

novaRodada();
