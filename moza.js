var loc = document.getElementById("jegyhelpgomb").parentElement;
var avgbtn = document.createElement("button");
avgbtn.innerHTML = "Súlyozott átlag";
avgbtn.className = "css3_button blue";
avgbtn.addEventListener("click", avg, false);
loc.appendChild(avgbtn);
function avg()
{
	var values = [];
	values["rgb(34, 30, 31)"] = 1;
	values["rgb(51, 170, 0)"] = 0.5;
	values["rgb(49, 102, 255)"] = 0.5;
	values["rgb(34, 30, 31)"] = 1;
	values["rgb(52, 0, 150)"] = 1;
	values["rgb(153, 51, 0)"] = 1.5;
	values["rgb(255, 17, 0)"] = 2;
	values.push({});
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
