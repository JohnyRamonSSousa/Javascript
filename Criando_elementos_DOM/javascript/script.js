//inserir o elemento no body
var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("Colocando o textos");

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

