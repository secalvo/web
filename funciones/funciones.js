function mostrarAlerta() {
	alert("Hola! ¿Estas seguro de que tus datos son correctos?");
}
function saludo(){
	alert("¡Bienvenidos a EXPOTRAVEL!");
}
function pregunta(){
	var pais = prompt("¿A que pais te gustaria viajar?");
	if (pais) {
		alert("Gracias por responder. " + pais + " es una excelente elección");
	} else {
		alert("Espero que encuentre pronto un destino");
	}
}
<script>
function confirmacion() {
	var pregunta = confirm("¿Deseas visitar la página principal?")
	if (pregunta){
		alert("Te envio a la pagina principal")
		window.location = "https://secalvo.github.io/web/index.html";
	}
	else{
		alert("De acuerdo, nos quedamos aquí")
	}
}
</script>
<button type="button" onclick="confirmacion()" >Ir a la pagina principal</button>














