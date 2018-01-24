var loc = document.getElementById("jegyhelpgomb").parentElement;
var avgbtn = document.createElement("button");
avgbtn.innerHTML = "Súlyozott átlag";
avgbtn.className = "css3_button blue";
avgbtn.addEventListener("click", disp, false);
loc.appendChild(avgbtn);
function disp()
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
	var statistics = document.getElementById("statistics");
	for (var i = 0, row; row = statistics.rows[i]; i++)
	{
		for (var j = 1, col; col = row.cells[j]; j++)
		{
			var grades = [];
			for (var k = 0, child; child = col.childNodes[k]; k++)
			{
				grades.push({ grade: child.innerText, multiplier: values[child.style.color] });
   			}
			var div = "";
			div += "<div style='border-style: solid; max-width: 400px;'>";
			div += "<h6 style='text-align: center;'>" + row.cells[0] + "</h6>";
			div += "<table border='0'>";
			div += "<tr><td>Matematikai átlag:</td><td>" + avg(grades).normal + "</td></tr>";
			div += "<tr><td>Súlyozott átlag:</td><td>" + avg(grades).weighted + "</td></tr>";
			div += "</table>";
			div += "</div>";
			avgwin.document.write(div);
   		}
	}
}
function avg(arr)
{
	var all = 0;
	var nums = 0;
	for(var v = 0; v < arr.length; v++)
	{
		all += arr[v].grade;
		nums += arr[v].multiplier;
	}
	var ret = { normal: Number(all)/arr.length, weighted: Number(all) / Number(nums) };
	return ret;
}
