function mostrarAlerta() {
	alert("Hola! ¿Estas seguro de que tus datos son correctos?");
}
function saludo(){
	alert("¡Bienvenidos a EXPOTRAVEL!");
}
function pregunta(){
	var pais = prompt("¿A que pais te gustaria viajar?");
	if (pais){
		alert("Gracias por responder. " + pais + " es una excelente elección");
	}else{
		alert("Espero que encuentre pronto un destino");
	}
}
function imprimir(){
	<a href="javascript:window.print();">Imprimir</a>
}










