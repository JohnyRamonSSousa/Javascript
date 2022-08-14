var teste = 5;

console.log(this);
console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "johny",
    idade: 36,
    evento: "domingo",
    evento2: "não sei",
    falar: function(){
        console.log("Bom dia")
    },
    dizerNome: function(){
        console.log("Tudo bem?"+ " " + this.nome);
    },
    congresso: function(){
        console.log("Que dia vai ser o congresso?" + " " + this.evento )
    },
    assembleia: function(){
        console.log("Que dia vai se a sua assembleia?" + " " + this.evento2)
    },
    nascimento: function(){
        console.log("Que dia você nasceu?" + " " +
        this.idade)
    },
    data: function(){
        this.idade += 2;
    },
    saudacao: function(){
        return "Sr." + this.nome
    }
};

pessoa.dizerNome();
pessoa.congresso();
pessoa.assembleia();
pessoa.nascimento();
pessoa.data();
pessoa.saudacao();

console.log(pessoa.idade);
console.log(pessoa.saudacao());

var sdc = pessoa.saudacao();

console.log("bom dia "+ sdc)