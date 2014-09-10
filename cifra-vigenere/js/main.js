/*
	Main
*/

$('#form-vigenere').submit(function(event){
	event.preventDefault();
});

$('#cifrar').click(function(){
	var chave = $('#chave').val();
	chave = chave.toLowerCase();

	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado = $('#resultado');

	chave = alterar_chave(chave, texto);

	resultado.text(cifrar(texto, chave));
});

$('#decifrar').click(function(){
	var chave = $('#chave').val();
	chave = chave.toLowerCase();

	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado = $('#resultado');

	chave = alterar_chave(chave, texto);

	resultado.text(decifrar(texto, chave));
});