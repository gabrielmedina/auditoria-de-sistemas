/*
	Main
*/

var valor = 'limao';
var texto = 'atacarbasesul';

valor = alterar_cifra(valor, texto);

var cifrado = cifrar(texto, valor);
console.log(cifrado);

var decifrar = decifrar(cifrado, valor);
console.log(decifrar);