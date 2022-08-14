var idade = 16;
var nome = "johny";

if(nome == "johny" && idade == 16){
    console.log("O johny pode entrar")
}else {
    console.log("Este não é o johny");
}

if(1 == 1 && 3 > 2 && true){
    console.log("passou")
}

if((1 == 1 && 3 > 3) && true){
    console.log("Pode ir")
}else if (nome === "johny" && idade >= 14){
    console.log("Aqui passa")
}