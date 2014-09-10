/*
	Main
*/

$('#form-frequencia').submit(function(event){
	event.preventDefault();
});

$('#analisar').click(function(){
	var texto = $('#texto').val();
	texto = texto.toLowerCase();

	var resultado_frequencia = frequencia(texto);
	var resultado = '';

	for(i in resultado_frequencia){
		resultado += '<li>';
		resultado += '<span class="letra">' + resultado_frequencia[i].letra + '</span> ';
		resultado += '<span class="quantidade">' + resultado_frequencia[i].quantidade + '</span>';
		resultado += '</li>';
	}

	var list = $('#list-frequencia');
	list.html(resultado);
});