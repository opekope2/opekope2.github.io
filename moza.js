var loc = document.getElementById("jegyhelpgomb").parentElement;
var avgbtn = document.createElement("button");
avgbtn.value = "Súlyozott átlag";
avgbtn.className = "css3_button blue";
avgbtn.onclick = avg;
loc.appendChild(avgbtn);
function avg()
{
	var avgwin = null;
	alert("atlag");
}