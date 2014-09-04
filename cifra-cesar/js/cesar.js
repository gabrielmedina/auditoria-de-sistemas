/* 
	Cifra de César
*/

/* Cifrar */
function cifrar(alfabeto, texto, valor){
	var cifrado = '';

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

