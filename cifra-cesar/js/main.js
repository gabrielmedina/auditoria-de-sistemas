/*
	Main
*/

var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


$('#form-cesar').submit(function(event){
	event.preventDefault();
});

$('#cifrar').click(function(){
	var valor = $('#valor').val();
	valor = parseInt(valor);

	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado = $('#resultado');

	resultado.text(cifrar(alfabeto, texto, valor));
});

$('#decifrar').click(function(){
	var valor = $('#valor').val();
	valor = parseInt(valor);

	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado = $('#resultado');

	resultado.text(decifrar(alfabeto, texto, valor));
});
