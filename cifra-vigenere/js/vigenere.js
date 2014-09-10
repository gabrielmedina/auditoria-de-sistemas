/*
	Vernam
*/

// Alfabeto
var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Cifrar palavra
var cifrar_palavra = function(texto, valor){
	var letra = "";

	for(var i = 0; i < texto.length; i++){
		for(var j = 0; j < alfabeto.length; j++){
			if(alfabeto[j] == texto[i]){
				letra += alfabeto[(j + valor)%26];
			}
		}
	}	

	return letra;
}

// Decifrar palavra
var decifrar_palavra = function(texto, valor){
	var letra = "";

	for(var i = 0; i < texto.length; i++){
		for(var j = 0; j < alfabeto.length; j += 1){
			if(texto[i] == alfabeto[j]){
				letra += alfabeto[((j - valor)+26)%26];
			}
		}
	}

	return letra;
}

// Retornar posicao
var retorna_posicao = function(caracter){
	for (var i = 0; i < alfabeto.length; i+=1){
		if (alfabeto[i] == caracter){
			return i;
		} 
	}
}

// Cifrar texto
var cifrar = function(texto, valor){
	var texto_cifrado = "";

	for (var i = 0; i < texto.length; i+=1) {
		texto_cifrado += cifrar_palavra(texto[i], retorna_posicao(valor[i]));
	}

	return texto_cifrado;
}

// Decifrar texto
var decifrar = function(texto, valor){
	var texto_cifrado = "";

	for (var i = 0; i < texto.length; i+=1) {
		texto_cifrado += decifrar_palavra(texto[i], retorna_posicao(valor[i]));
	}

	return texto_cifrado;
}

// Alterar cifrar
var alterar_cifra = function(cifra, texto){
	var nova_cifra = '';
	
	while(nova_cifra.length < texto.length){
		nova_cifra += cifra;
	}

	if(nova_cifra.length > texto.length){
		cifra = '';

		for(var i = 0; i < texto.length; i += 1){
			cifra += nova_cifra[i];
		}

		return cifra;
	}

	return nova_cifra;
}