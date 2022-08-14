//selecionar o element

var title = document.querySelector('#title');

//innerHTML

title.innerHTML = "Testando o texto";

//textContent => mais utilizado, recomendado e performático.


var subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = "Testando o textContent";