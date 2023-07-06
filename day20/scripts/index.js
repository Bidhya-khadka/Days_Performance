// get element by id
// get element by classnames
// get element by tagname
// get elemet by queryselector   ----select the first one either by specified id,class,or tagname
// get elemet by querySelectorAll    ---select all the specified id,classnames, tag name

// get element by id
const id = document.getElementById("greeting");
id.style.backgroundColor = "red";

// get element by classnames
const cls = document.getElementsByClassName("container");
cls.style.border = "4px solid red";
cls.style.borderWidth = "500px";
cls.style.borderHeight = "500px";

// get element by tagname
const tg = document.getElementsByTagName("p");
tg.style.fontSize = "40px";

//get elemet by queryselector
const qs = document.querySelector("#button");
qs.style.border = "2px solid green";
