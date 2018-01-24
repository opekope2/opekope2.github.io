var loc = document.getElementById("jegyhelpgomb").parentElement;
var avgbtn = document.createElement("button");
avgbtn.innerHTML = "Súlyozott átlag";
avgbtn.className = "css3_button blue";
avgbtn.addEventListener("click", avg, false);
loc.appendChild(avgbtn);
function avg()
{
	var avgwin = window.open("", "Átlag", "width=400,height=300");
	avgwin.document.write("Az átlag itt jelenik meg");
	alert("atlag");
}
