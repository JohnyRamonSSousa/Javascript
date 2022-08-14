var btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener("click", function() {

    console.log("Click");
  
});

var title = document.querySelector(".title");

title.addEventListener("click", function(){

    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
});



var title = document.querySelector(".title");

title.addEventListener("dblclick", e => {
    console.log("click duplço")
});