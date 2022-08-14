let pessoa = {
    nome : "johny",
    idade: 36,
    falar: function(){
        console.log("Bom dia");
    },
    soma: function(a, b){
        return a + b;
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.falar();

var soma = pessoa.soma(4, 9);

console.log(soma)