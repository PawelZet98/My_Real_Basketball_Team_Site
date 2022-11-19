function odliczanie()
{
	var dzisiaj = new Date();
	
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();
	var godzina = dzisiaj.getHours();
	
	if(godzina<10)godzina = "0"+godzina;
	
	var minuta = dzisiaj.getMinutes();
	if (minuta<10) minuta="0"+minuta;
	
	var sekunda = dzisiaj.getSeconds();
	if(sekunda<10) sekunda="0" +sekunda;
	
	document.getElementById("zegar").innerHTML =
	dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;
	
	setTimeout("odliczanie()",1000);
}

var numer = Math.floor(Math.random()*5)+1;
var timer1=0
var timer2=0

function schowaj()
{
$("#slider").fadeOut(500);	
}


function zmienslajd()
{
	numer++; if (numer>5) numer=1;
	
	var plik="<img src=\"akademia/slajd"+ numer+ ".jpg\"/>";
	
	document.getElementById("slider").innerHTML = plik;
	$("#slider").fadeIn(500)
	
	timer1=setTimeout("zmienslajd()", 5000);
	timer2=setTimeout("schowaj()", 4500);
}

function ustawslajd(nrslajdu)
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	numer=nrslajdu-1;
	
	schowaj();
	setTimeout("zmienslajd()", 500)
	
}

function zeroWiodace(i)
{
	if(i<10) 
	{
		return "0"+i;
	}
	else 
	{
		return i;
	}
}

function zegarDoMeczu()
{
	const current = new Date();
	const mecz = new Date(2020,11,18,18)
	var difference = mecz.getTime() - current.getTime();
	var sec = difference/1000;
	var min = sec/60
	var hour = min/60;
	var days = hour/24;
	var secT = Math.floor(sec%60);
	var minT = Math.floor(min%60);
	var hourT = Math.floor(hour%24);
	var daysT = Math.floor(days);
	
	if(difference>0)
	{
		document.getElementById("odliczanie").innerHTML = zeroWiodace(daysT)+" DNI "+zeroWiodace(hourT)+":"+zeroWiodace(minT)+":"+zeroWiodace(secT);
	}
	else
	{
		document.getElementById("odliczanie").innerHTML = "Mecz się już odbył";
	}
	setInterval(zegarDoMeczu, 1000);
}





