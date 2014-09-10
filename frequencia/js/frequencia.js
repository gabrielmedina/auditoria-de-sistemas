/*
	Análise de Frequencia
*/

// Alfabeto
var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Frequência
function frequencia(texto){
	var resultado = [];
	var letra;
	var quantidade = 0;

	texto = remover_acento(texto);
	texto = remover_pontuacao(texto);

	for(i in alfabeto){
		for(j in texto){
			if(alfabeto[i] == texto[j]){
				quantidade += 1;
			}
			resultado[i] = {'letra': alfabeto[i], 'quantidade': quantidade};
		}
		quantidade = 0;
	}

	return resultado;
}


// Retirar acentuação
function remover_acento(texto){
	str_acento= 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
	str_sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';

	var nova = '';

	for(var i = 0; i < texto.length; i++) {
		if(str_acento.indexOf(texto.charAt(i)) != -1) {
			nova += str_sem_acento.substr(str_acento.search(texto.substr(i,1)),1);
		} else {
			nova += texto.substr(i,1);
		}
	}

	return nova;
}


// Retirar pontuação
function remover_pontuacao(texto){
	for(i in texto){
		texto = 
			texto
				.replace(' ', '')
				.replace('.', '')
				.replace(':', '')
				.replace(';', '')
				.replace(',', '')
				.replace('?', '')
				.replace('!', '')
				.replace('(', '')
				.replace(')', '')
				.replace('{', '')
				.replace('}', '')
				.replace('[', '')
				.replace(']', '')
				.replace('<', '')
				.replace('>', '')
				.replace('°', '')
				.replace('/', '')
				.replace('|', '')
				.replace('–', '')
				.replace('-', '')
				.replace('"', '')
				.replace("'", '')
				.replace('@', '')
				.replace('#', '')
				.replace('$', '')
				.replace('%', '')
				.replace('&', '')
				.replace('*', '')
				.replace('+', '')
				.replace('§', '')
				.replace('=', '')
				.replace('1', '')
				.replace('2', '')
				.replace('3', '')
				.replace('4', '')
				.replace('5', '')
				.replace('6', '')
				.replace('7', '')
				.replace('8', '')
				.replace('9', '');
	}
	return texto;
}