//evento mouseover'
var title = document.querySelector(".title");

title.addEventListener("mouseover", e =>{

    title.style.color = "red";
    title.style.fontSize = "40px";
    title.style.background = "black";
});

//evento de mouseout

title.addEventListener("mouseout", e=>{
    title.style.color = "white";
    title.style.background = "blue";
})