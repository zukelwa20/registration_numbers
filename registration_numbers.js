var ul = document.getElementById("UL");
var optBtn = document.querySelector(".optBtn");

var idOne = document.getElementById("capetown");
var idTwo = document.getElementById("belville");
var idThree = document.getElementById("paarl");
var idFour = document.getElementById("all");
var Registration = document.getElementsByName("Registration");
var regText = document.getElementById("inpBox").value;


function addFun() {


    var regText = document.getElementById("inpBox").value;
    if (regText.length > 0 && regText !== undefined) {
        var li = document.createElement("li")
        li.textContent = regText;

        ul.appendChild(li);
    }
    document.getElementById("inpBox").value = "";
};


optBtn.addEventListener("change", function(e) {
    var registrationNum = document.querySelectorAll("li");

    for (var i = 0; i < registrationNum.length; i++) {
        var text = registrationNum[i].innerHTML;

        if (e.target.value === "All") {
            registrationNum[i].style.display = "block";
        } else if (text.startsWith(e.target.value)) {
            registrationNum[i].style.display = "block";
        } else {
            registrationNum[i].style.display = "none";
        }
    }
});
