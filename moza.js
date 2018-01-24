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
	
	var statistics = docuemnt.getElementById("statistics");
	for (var i = 0, row; row = statistics.rows[i]; i++)
	{
		var grades = [];
		for (var j = 0, col; col = row.cells[j]; j++)
		{
			for (var k = 0, child; child = col.childNodes[k]; k++)
			{
				//grades.push({grade:5,value:2});
   			}
   		}
	}
}
