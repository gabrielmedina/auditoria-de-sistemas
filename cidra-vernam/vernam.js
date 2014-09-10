var troca_palavra = function(texto, valor){
	var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

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

var retorna_posicao = function(caracter){
	var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];	

	for (var i = 0; i < alfabeto.length; i+=1){
		if (alfabeto[i] == caracter){
			return i;
		} 
	}

}

var cifrar = function(texto, valor){

	var texto_cifrado = "";

	for (var i = 0; i < texto.length; i+=1) {
		for (var j = 0; j < valor.length; j+=1) {
			texto_cifrado += troca_palavra(texto[i], retorna_posicao(valor[j]));
		}
		
		i = i + j;
	}

	return texto_cifrado;
}

var valor = 'LIMAO';
var texto = 'ATACARBASESUL';

console.log(cifrar(texto, valor));
