function one(a) {
  document.getElementById("myText").value += a;
}

function modulus() {
  document.getElementById("myText").value += "%";
}
function plus() {
  document.getElementById("myText").value += "+";
}
function minus() {
  document.getElementById("myText").value += "-";
}
function multiply() {
  document.getElementById("myText").value += "*";
}
function divide() {
  document.getElementById("myText").value += "/";
}
function point() {
  document.getElementById("myText").value += ".";
}


function solve() {
  var exp = document.getElementById("myText").value;
  var s = " ";
  s = eval(exp);
  document.getElementById("myText").value = " ";
  document.getElementById("myText").value += s;

}



function double() {
  document.getElementById("myText").value += "00";
}
function clearscr() {
  document.getElementById("myText").value = "";
}
function onescr() {
  var exp = document.getElementById("myText").value;
  exp = exp.substr(0, exp.length - 1);
  var exp = (document.getElementById("myText").value = exp);
}
