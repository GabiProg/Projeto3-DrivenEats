/*function selecionarSobremesa(nome){
    console.log(nome)
    let opcaoclickada = document.querySelector("." + nome);
    opcaoclickada.classList.add("marcar");
}*/
let sobremesa = null;
let valorSobremesa = null;
let bebida = null;
let valorBebida = null;
let comida = null;
let valorComida = null;

function selecionarSobremesa(nomeClass, nomeSite, precoSobremesa) {
    console.log(nomeClass)
    const marcar = document.querySelector(".ultimo .marcar");
    if(marcar !== null) {
        marcar.classList.remove("marcar");
    }
    sobremesa = nomeSite;
    valorSobremesa = precoSobremesa;
    console.log(precoSobremesa) 
    const nome = document.querySelector("." + nomeClass); 
    nome.classList.add("marcar");
    if(bebida !== null && comida !== null && sobremesa !== null){
        const fechamento = document.querySelector(".selector")
        fechamento.classList.add("fechamento");
    }
}

function selecionarBebida(nomeClass, nomeSite, precoBebida) {
    console.log(nomeClass)
    const marcar = document.querySelector(".meio .marcar");
    if(marcar !== null) {
        marcar.classList.remove("marcar");
    }
    bebida = nomeSite;
    valorBebida = precoBebida;
    console.log(precoBebida)
    const nome = document.querySelector("." + nomeClass); 
    nome.classList.add("marcar");
    if(bebida !== null && comida !== null && sobremesa !== null){
        const fechamento = document.querySelector(".selector")
        fechamento.classList.add("fechamento");
    }
}

function selecionarComida(nomeClass, nomeSite, precoComida) {
    console.log(nomeClass)
    const marcar = document.querySelector(".comeco .marcar");

    if(marcar !== null) {
        marcar.classList.remove("marcar");
    }
    comida = nomeSite;
    valorComida = precoComida;
    console.log(precoComida)
    const nome = document.querySelector("." + nomeClass); 
    nome.classList.add("marcar");
    if(bebida !== null && comida !== null && sobremesa !== null){
        
        document.querySelector(".selector").classList.add("fechamento");
    }
}

function soma(bebida, comida, sobremesa) {
    let soma = parseInt(bebida + comida + sobremesa);
    return soma;
} 
function enviar(){
    let soma = parseInt(bebida + comida + sobremesa);
    return soma;
    alert ("Total" + soma)
}

