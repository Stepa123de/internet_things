function SetRow(element,row,last=false)
{
	var tr = document.createElement('tr');
	tr.className = "tr-table";
	for (var i = 0; i < row.length; ++i)
	{
		var td = document.createElement('td');
		td.className = "td-table";
		if (i == row.length-1 && row[i]!='Price')
		{
			var btn = document.createElement('button');
			btn.className = "btn btn-success btn-pay";
			btn.id = row[0];
			btn.innerHTML = row[i];
			td.append(btn);
		}
		else
		{
			td.innerHTML = row[i];
		}
		tr.append(td);
	}
	if (last == true)  tr.style.background = 'none';
	element.append(tr);
}

function DrawCalandar(date,calendar,mainDate)
{

	mainDate.innerHTML = monthNames[date.getMonth()] +" "+ date.getFullYear();

	var date1 = new Date(date.getFullYear(), date.getMonth()-1, 1);
 	var date2 = new Date(date.getFullYear(), date.getMonth(), 1);

 	var days = Math.round((date2 - date1) / 1000 / 3600 / 24);
 	var tr = document.createElement('tr');
 	tr.className = "tr-calendar";

 	for(const i in weekDays)
	{
		var td = document.createElement('td');
		td.innerHTML = weekDays[i]
		tr.append(td);
	} 
	calendar.append(tr);
	tr = document.createElement('tr');
 	tr.className = "tr-calendar";

	for(var i = 0; i < days; i++)
	{	
		var td = document.createElement('td');
		td.className = "td-calendar";
		td.innerHTML = i+1;
		tr.append(td)
		if((i+1) % 7 == 0 || i == days-1)
		{
			calendar.append(tr);
			tr = document.createElement('tr');
			tr.className = "tr-calendar";
		}
	}
}
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const weekDays = ["Mo","Tu","We","Th","Fr","Sa","Su"];

let calendar = document.getElementById('calendar');
let mainDate = document.getElementById('maindate');

let date = new Date();

DrawCalandar(date,calendar,mainDate);

var element = document.getElementById('table');

//Get colums from sql
const NameCol = ['Electric meter','Description','Resource consumption','Price'];


//Get over data from sql
var row1 = ['00000000','Сосиска большая и сочная Сосиска большая и сочная',"34 kW⋅h",'8.29$']
var row2 = ['00000001','Сосиска большая и сочная Сосиска большая и сочная',"34 kW⋅h",'8.29$']
var row3 = ['00000002','Сосиска большая и сочная Сосиска большая и сочная','34 kW⋅h','8.29$']
var row4 = ['00000003','Сосиска большая и сочная Сосиска большая и сочная','34 kW⋅h','8.29$']
var row5 = ['00000004','Сосиска большая и сочная Сосиска большая и сочная','34 kW⋅h','8.29$']
var row6 = ['For all','Все большие сосиски в одном удобном месте','160 kW⋅h','36.56$']

//add row in table
SetRow(element,NameCol)
SetRow(element,row1)
SetRow(element,row2)
SetRow(element,row3)
SetRow(element,row4)
SetRow(element,row5)
SetRow(element,row6,true)

window.onload = function() {
	// let promise = fetch('http://localhost:3000/api/meters');
	// alert(promise.text());
	// let login = localStorage.getItem('login');
	// if (login == null)
	// {
	// 	document.location = '../html/login.html';
	// }
	document.getElementById('ritgh').onclick = function()
	{
		//del old dates
		calendar.innerHTML = "";

		ndate = new Date(date.getFullYear(), date.getMonth()+1);
		now = new Date();
		if(now >= ndate)
		{
			date=ndate;
			DrawCalandar(date,calendar,mainDate);
			if(now.getMonth() == ndate.getMonth() && now.getFullYear() == ndate.getFullYear())
			{
				document.getElementById('ritgh').innerHTML = "";
			}
		}
		else
		{
			DrawCalandar(date,calendar,mainDate);
		}
	}
	document.getElementById('left').onclick = function()
	{
		//del old dates
		calendar.innerHTML = "";

		ndate = new Date(date.getFullYear(), date.getMonth()-1);
		now = new Date();
		if(now.getMonth() == ndate.getMonth() && now.getFullYear() == ndate.getFullYear())
		{
			document.getElementById('ritgh').innerHTML = "";
		}
		else
		{
			document.getElementById('ritgh').innerHTML = ">";
		}
		date = ndate;
		DrawCalandar(date,calendar,mainDate);
	}

	
}