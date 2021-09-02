const fomulario = document.getElementById ('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	curso: /[ 1ro\ 2do\ 3ro\ 4to\ 5to\ 6to\ primero\ segundo\ tercero\ cuarto\ quinto\ sexto]{3,7}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	usuario: false,
	nombre: false,
	curso: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch(e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "curso":
			validarCampo(expresiones.curso, e.target, 'curso');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo}.formulario__input-error`).classList.remove,('formulario__input-error-activo ');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
		classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario );
	input.addEventListener('blur', validarFormulario );
});

fomulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos')
	if (campo.usuario && campos.nombre && campos.curso && campos.correo && terminos.check ) {
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remoce('formulario__grupo-correcto');
		}); 
		
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		}
});
