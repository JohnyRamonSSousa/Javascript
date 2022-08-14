//toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

//trim

var nome = "               johny      ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

//split

console.log(frase.split(" "));

var cursos = "php, html5, css3,node.js";

console.log(cursos.split(", "));

//lastIndexOf

var fraseDois = "Eu quero fazer um teste para ver se voo conseguir realizar essa tarefa.";

console.log(fraseDois.indexOf("quero"));

console.log(fraseDois.lastIndexOf("quero"));
