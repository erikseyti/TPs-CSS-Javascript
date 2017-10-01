// JavaScript Document
function oi()
{alert("oi");}

/*function arred()
{x=1.5897;
y = Math.floor (x * 10 + .5) / 10;	
	alert(y);
	}*/
function arred(num)
{//alert(num);



var nenhumacasa = Math.round(eval(num));
var umacasa = Math.floor(eval(num)*10 + .5)/10;
var duascasa = Math.floor(eval(num)*100 + .5)/100;
var trescasa = Math.floor(eval(num)*1000 + .5)/1000;


alert(nenhumacasa);
alert(umacasa);
alert(duascasa);
alert(trescasa);

//caixa.value = ("");



}