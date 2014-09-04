// análise de frequência

var comparador = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
var texto = 'g5Bt5 t54yvtz3v4A5 wrG t53 7Bv r9 6v995r9 9v 9z4Ar3 58xB2y59r9. dBzA5 t54yvtz3v4A5, 7Bv 9v 9z4Ar3 yB3z2uv9. Vy r99z3 7Bv r9 v96zxr9 9v3 x8r59 v8xBv3 uv9uv4y59r3v4Av r trsvtr 6r8r 5 tvB, v47Br4A5 r9 tyvzr9 r9 srzEr3 6r8r r Av88r, 9Br 3rv. cv54r8u5 Ur mz4tz.';

var vetor = frequencia(comparador, texto);

// for(i in vetor){
// 	console.log(vetor[i].letra + ' ---- ' + 	vetor[i].contador + '\n');
// }

texto = decodificar('r', 'a', texto);
texto = decodificar('v', 'e', texto);
texto = decodificar('9', 'o', texto);
texto = decodificar('3', 'm', texto);

console.log(texto);


// frequência
function frequencia(comparador, texto){
	var resultado = [];
	var letra;
	var contador = 0;

	for(i in comparador){
		for(j in texto){
			if(comparador[i] == texto[j]){
				contador += 1;
			}
			resultado[i] = {'letra': comparador[i], 'contador': contador};
		}
		contador = 0;
	}
	return resultado;
}

// decodificar
function decodificar(letra, nova_letra, texto){
	for(i in texto){
		texto = texto.replace(letra, nova_letra);
	}

	return texto;
}