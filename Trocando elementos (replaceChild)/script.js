// criar um elemento

var el = document.createElement("h3");

el.classList = "Testenado-Classe";

var texto = document.createTextNode("Este é o texto")

el.appendChild(texto);

console.log(el);

//selecionar o element que quero selecionar
var title = document.querySelector("#title");

console.log(title);

//selecionar o pai do el
var pai = title.parentNode;

//trocar os elementos
pai.replaceChild(el, title);