var obj = {
    nome: "johny",
    idade: 36,
    profissao: "estudante",  //forma completa de acessar o objeto
    estaTrabalhando: false,
};

console.log(obj.nome); //forma de pegar por item
console.log(obj.idade);
console.log(obj.profissao);
console.log(typeof obj.estaTrabalhando);

console.log("O menu nome é" + obj.nome);

obj.nome = "erika"; //mudando a propriedade do objeto


console.log(obj.nome);

console.log(obj);

obj.graduacao = true; //criando objeto


console.log(obj)