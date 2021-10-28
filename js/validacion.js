(function(){

    var formulario = document.getElementsByName('formulario')[0],
        elelmentos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if(formulario.nombre.value == 0 || formulario.direccion.value == 0 || formulario.telefono.value == 0 || formulario.correo.value == 0 || formulario.ciudad.value == 0 || formulario.edad.value == 0){
            alert("Campos vacios");
            e.preventDefault();
        }
        else{
            alert('Datos ingresados correctamente');
            e.preventDefault();
        }
    };

    var validar=function(e){
        validarNombre(e);
    }

    formulario.addEventListener("submit", validar);


}())
