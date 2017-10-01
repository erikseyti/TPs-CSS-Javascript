// JavaScript Document
function exibir()
{
	
	oForm = document.forms[0];
	
	/*oText = oForm.elements["profissoes"];				
	alert(oText.value);
	
	oText1 = oForm.elements[1];				
	alert(oText1.value);
	
	oText2 = oForm.elements[2];				
	alert(oText2.value);
	
	oText3 = oForm.elements["semana"];				
	alert(oText3.value);*/
	
<!--Selecionando a Profissão-->
function getSelectedOptions(oList) 
{
	var sdValues = [];
									
	for(var i = 1; i < oList.options.length; i++)
	 {
		if(oList.options[i].selected == true)
		 {
			sdValues.push(oList.options[i].text);//OS "valores"(nomes - text)
		//alert(sdValues);
		}
	}
	return sdValues;
}
									
oList = oForm.elements["profissoes"];
a = oList.selectedIndex;

var selected_profissoes = oList.options[a].text;
document.writeln("<h1>Profissões</h1><br>"+getSelectedOptions(oList)+"<h1>Mês</h1><br>"+getRadioCheckedValue("Meses")+seleciona_dia()+"<h1>Mídias</h1><br>"+testCheckbox(""));
<!--FINALIZANDO A PROFISSÃO-->


<!--INICIANDO O RADIO BUTTON-->
function getRadioCheckedValue(radio_name)
{
	var oRadio = document.forms[0].elements[radio_name];
	for(var i = 0; i < oRadio.length; i++) 
	{ 
		if(oRadio[i].checked) 
		{
		return oRadio[i].value;
		}
	}
	return '';

				
//document.writeln(getRadioCheckedValue("Meses"));
alert(getRadioCheckedValue("Meses"));
<!--FINALIZANDO O RADIO BUTTON-->
} 

//Iniciando o CheckBox/	
function testCheckbox(oCheckbox)
{
	var checkbox_val = oCheckbox.value;
									
	if(oCheckbox.checked == true) 
	{
	document.writeln(oCheckbox.name);
	} 
}
	oCheckBox1 = oForm.elements["TV"];
	oCheckBox2 = oForm.elements["Revistas"];
	oCheckBox3 = oForm.elements["Radio"];
	oCheckBox4 = oForm.elements["Internet"];
	oCheckBox5 = oForm.elements["Jornal"];

	
	testCheckbox(oCheckBox1);
	testCheckbox(oCheckBox2);
	testCheckbox(oCheckBox3);
	testCheckbox(oCheckBox4);
	testCheckbox(oCheckBox5);
return false
//Finalizando o CheckBox///


function seleciona_dia(selected_option_text)
	{		
	<!--Selecionando oo dia da semana-->
	oSelectOne = oForm.elements["dias_semana"];
	//PEGANDO O INDICE
	index = oSelectOne.selectedIndex;
	//PEGADO O VALOR E O TEXTO SELECIONADO
	var selected_option_text = oSelectOne.options[index].text;
	//var selected_option_value = oSelectOne.options[index].value;
	
	document.writeln("<h1>Dia da Semana</h1><br>"+selected_option_text);
	}
}
