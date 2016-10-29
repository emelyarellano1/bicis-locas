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
		var letras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

		function name(){
		 	var name = document.getElemetById('name').value;
		 	if (name == null || name.length == 0 || /^\s+$/.test(name)){
		 		alert('Debes ingresar tu nombre');
		 		return false;
		 	} else if (!letras.test(name)){
		 		alert("Solo letras");
		 		return true;
		 	} else if(name.charAt(0) != name.charAt(0).toUpperCase()){
		 		alert('La primera letra debe ser Mayuscula, Ej: Emelys')
		 	}
		}
		 name();

		function lastname(){
		 	var lastname = document.getElemetById('lastname').value;
		 	if(lastname == null || lastname.length == 0 || lastname.length == 0 || /^\s+$/.test(lastname)){
		 		alert("Debes ingresar tu apellido");
		 		return true;
		 	} else if(!letras.test(lastname)){
		 		alert("Solo letras");
		 		return true;
		 	} else if(lastname.charAt(0) != lastname.charAt(0).toUpperCase()) {
		 		alert('La primera letra debe ser Mayuscula, Ej: Arellano');
		 	}
		 } 
		lastname();

		function correoElectronico(){
			var simbolos = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
			var correoElectronico = document.getElemetById('input-email').value;
			if (correoElectronico === null || correoElectronico.length === 0){
				alert('Ingresa tu correoElectronico');
				return false;
			} else if(simbolos.test(correoElectronico)){
				return true;
			}
	    }
	    correoElectronico();

	    function contrasenia(){
	    	var contrasenia = document.getElemetById('input-Password').value;
	    	if (contrasenia == null || contrasenia.length == 0) {
	    		alert('Ingresa tu contraseñia');
	    		return false;
	    	} else if(contrasenia.length < 6){
	    		alert('Tu contraseña es muy facil');
	    		return false;
	    	}
	    }
	    contrasenia();

	    function modeloBici(){
	    	var selector = document.getElemetsByTagNeme('select');
	    	var modelo = select.value;

	    	return modelo == 'Urbana' || modelo == 'Treking' || modelo == 'Eléctrica' || modelo == 'Estática';
	    }
	    modeloBici();
	}


