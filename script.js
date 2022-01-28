function selecionar(){
    console.log("click")
    let opcao = document.querySelector(".opcao");
    opcao.classList.add("marcar");
}
function desselecionar(){
    let opcao = document.querySelector(".opcao");
    opcao.classList.remove("marcar");
    }
