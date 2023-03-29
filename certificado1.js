function encripta(cadena){
	abc=  "abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ";
	llave="defghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZabc";
	cont==0;
	salida="";
	while (cont<cadena.legnth){
		letra=cadena.charAt(cont);
		pos=abc.IndexOF(letra);
		salida=salida+llave.chartAt(pos);
		cont++;
	}
	return(salida);
}
