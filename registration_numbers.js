var ul = document.getElementById("UL");

function addFun() {

var text = document.getElementById("inpBox").value;
if(text.length>0 && text!==undefined){
var li = document.createElement("li")
li.textContent = text;
ul.appendChild(li);
}
document.getElementById("inpBox").value="";
};
