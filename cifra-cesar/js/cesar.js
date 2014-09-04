/*
	Cifra de César
*/

/* Cifrar */
function cifrar(alfabeto, texto, valor){
	var cifrado = '';
	texto = remover_acento(texto);

	for(var i = 0; i < texto.length; i += 1){
		switch(texto[i]){
			case ' ':
				cifrado += ' ';
				break;
			case ',':
				cifrado += ',';
				break;
			case '.':
				cifrado += '.';
				break;
			default:
				for(var j = 0; j < alfabeto.length; j += 1){
					if(texto[i] == alfabeto[j]){
						cifrado += alfabeto[(j + valor)%26];
					}
				}
		}
	}

	return cifrado;
}

/* Decifrar */
function decifrar(alfabeto, texto, valor){
	var decifrado = '';
	texto = remover_acento(texto);

	for(var i = 0; i < texto.length; i += 1){
		switch(texto[i]){
			case ' ':
				decifrado += ' ';
				break;
			case ',':
				decifrado += ',';
				break;
			case '.':
				decifrado += '.';
				break;
			default:
				for(var j = 0; j < alfabeto.length; j += 1){
					if(texto[i] == alfabeto[j]){
						if((j - valor) < 0){
							decifrado += alfabeto[26 + (j - valor)];
						} else {
							decifrado += alfabeto[j - valor];
						}
					}
				}
		}
	}

	return decifrado;
}


/* Retirar acentuação */
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
