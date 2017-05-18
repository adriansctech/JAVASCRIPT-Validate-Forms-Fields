/*Creamos variables que almacenaran los campos del formulario y con 
ellos trabajaremos en las diferentes funciones*/
var userNameField = document.getElementById("registro_usuario");
var passWordField = document.getElementById("registro_password");
var nifField = document.getElementById("registro_nif");
var mailField = document.getElementById("registro_email");
var sexRadio = document.getElementsByName("sex");
var arrayErrors = document.getElementsByTagName("span");
var firstError = null;
window.onload=function () {	
	//Vaciamos valores de errores al cargar la página por si acaso
	for(var i = 0 ; i < arrayErrors.legnth ; i++){
		arrayErrors[i].innerHTML = "";
	}
	/*Llamaremos a la función validateForm para activar los eventos blurs*/
	validateForm();
}

function validateForm(){		
	userNameField.addEventListener("blur",validateUser);	
	passWordField.addEventListener("blur", validatePassword);
	nifField.addEventListener("blur", validateNif);	
	mailField.addEventListener("blur", validateMail);		
	sexRadio[1].addEventListener("blur", validateSex);
	/*Y por ultimo si se ha pulsado el boton y no hay fallos en principio que compruebe
	el ultimo checkbox de las condiciones*/
	document.forms[0].addEventListener("submit", finallyAction);	
}

/*
	En el caso de que hubiera un error al pulsar en el botón de submit deberá mostrar el 
	foco en el primer error, esto lo he solucionado mediante el uso de la variable firstError,
	si está vacía se introduce el input donde ha ocurrido el error, si ya contiene algún valor
	no se modifica, de esta manera se almacena el primer input donde ha ocurrido un error, esta 
	comprobación la ejecutamos en todas las funciones
*/

function validateUser(event){	
	userName = userNameField.value.trim();	
	if (!/^[a-zA-Z\d_]{6,}$/i.test(userName)){			
		arrayErrors[0].innerHTML ="Error en el campo user";
		if(firstError == null){
			firstError = userNameField;					
		}		
	}else{
		arrayErrors[0].innerHTML ="";					
	}	
}

function validatePassword(event){
	userPassword = passWordField.value.trim();	
	if(!/^[a-zA-Z\d_]{8,}$/i.test(userPassword)){		
		arrayErrors[1].innerHTML ="Error en el campo password";
		if(firstError == null){
			firstError = passWordField;				
		}				
	}else{		
		arrayErrors[1].innerHTML ="";		
	}
}

/*ALGO FALLA A VECES AKI*/
function validateNif(event){
	userNif = nifField.value.trim();	
	if(!/^\d{8,8}[A-Z]$/.test(userNif)){		
		arrayErrors[2].innerHTML ="Error en el campo Nif";
		if(firstError == null){
			firstError = nifField;				
		}								
	}else{		
		arrayErrors[2].innerHTML ="";
	}
}

function validateMail(event){
	userMail = mailField.value.trim();	
	if(!/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(userMail)){		
		arrayErrors[3].innerHTML ="Error en el campo mail";	
		if(firstError == null){
			firstError = mailField;				
		}		
	}else{		
		arrayErrors[3].innerHTML ="";	
	}	
}


function validateSex(event){
	if((!sexRadio[0].checked) && (!sexRadio[1].checked)){
		arrayErrors[4].innerHTML ="Debes seleccionar por lo menos una opción";	
		if(firstError == null){
			firstError = sexRadio;				
		}

	}else{
		arrayErrors[4].innerHTML = "";
	}
}

function finallyAction(event){
	/*
		Cuando pulsamos sobre el botón de submit debemos comprobar otra vez 
		que todos los campos sean correctos
	*/
	validateUser();
	validatePassword();
	validateNif();
	validateMail();
	validateSex();
	/*
		Y por último checkeamos el campo de aceprtar las condiciones
	*/

	var acceptConditions = document.getElementById("registro_condiciones");
	if(!acceptConditions.checked){
		event.preventDefault();
		arrayErrors[5].innerHTML ="Debes marcar esta casilla";			
		if(firstError == null){
			firstError = acceptConditions;
		}
	}	
	if(firstError != null){
		firstError.focus();
		firstError = null;
		event.preventDefault();
	}
}

