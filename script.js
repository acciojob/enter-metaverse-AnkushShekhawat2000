//your JS code here. If required.
let  para = document.getElementById("status");

const Button = document.getElementById("enter-btn");
Button.addEventListener("click", function()){
	let heading = document.createElement("h1");

	para.innerText ="";
	para.appendChild(heading);
}