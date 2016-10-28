// Se deben hacer las sieguientes validaciones:
// Los campos nombre y apellido sólo deben permitir caracteres de la  A-Z
// Para los campos nombre y apellido la primera letra debe ser mayúscula
// Validar que el campo email tenga un formato válido. Ej: name@domain.com
// El campo password debe tener al menos 6 caracteres
// El campo password no puede ser igual a "password" ó "123456" ó "098754"
// El valor seleccionado de bicis, debe ser una de las opciones presentadas
// Si algún campo presenta error debe informarse al usuario por medio de un alert.
/* function validateForm(){
	var name = getElemetById('name').value;
	var lastname = getElemetById('lastname').value;
	var input-email = getElemetById('input-email').value;
	var input-password = getElemetById('input-password').value;
	
} */


function validacionForm(){
	var signosyletras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

function nombre(){
 	var nombre = document.getElemetById('name').value;
 	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
 		alert('Debes ingresar tu nombre');
 		return false;
 	} else if (!signosyletras.test(nombre)){
 		alert("Solo letras");
 		return true;
 	} else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
 		alert('La primera letra debe ser Mayuscula, Ej: Emelys')
 	}
 }
 nombre();

 function lastname(){
 	var lastname = document.getElemetById('lastname').value;
 	if(lastname == null || lastname.length == 0 || lastname.length == 0 || /^\s+$/.test(lastname)){
 		alert("Debes ingresar tu apellido");
 		return true;
 	} else if(!signosyletras.test(lastname)){
 		alert("Solo letras");
 		return true;
 	} else if(lastname.charAt(0) != lastname.charAt(0).toUpperCase()) {
 		alert('La primera letra debe ser Mayuscula, Ej: Arellano');
 	}
 } 
apellido();

/*function correoElectronico(){
	var simbolos = 
}*/

}




