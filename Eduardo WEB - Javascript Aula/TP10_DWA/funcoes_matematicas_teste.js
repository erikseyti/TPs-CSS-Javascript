function calculos (x){

    x.parseInt = document.getElementById('numero_arr').value;
	form1.lervalores.value = x;
	
	y1 = Math.floor(x * 1 + 0.5);
	y2 = Math.floor(x * 10 + 0.5)/10;
	y3 = Math.floor(x * 100 + 0.5) / 100;
	y4 = Math.floor(x * 1000 + 0.5) / 1000;
	
	
roundToInteger(y1);

//
//roundToThousandths(y4);


return ;
}

function roundToInteger(n1)
{
	
	form1.lervalores.value = n1;
    roundToTenths(y2);
    function roundToTenths(n2){

        form1.lervalores.value = n2;
        roundToHundredths(y3);
        function roundToHundredths(n3){

            form1.lervalores.value = n3;
            roundToThousandths(y4);
            function roundToThousandths(n4){

                form1.lervalores.value = n4;
                return;

            }
        }
    }
}









