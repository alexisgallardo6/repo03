function ejecuta(){
	cad=document.f_encripta.cad.value;
	op=document.f_encripta.op.value;
		if(cad.length<5){
			alert("Error,la palabra debe ser de más de 5 caracteres");
			document.f_encripta.cad.style.background="red";
		}
			else{
				abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
				llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abc"
				if(op=="Encriptar"){
					salida="";
					cont=0;
					while(cont<cad.length){
						letra=cad.charAt(cont);
						pos=abc.indexOf(letra);
						salida=salida+llave.charAt(pos);
						cont++;
					}
				}
			if(op=="Desencriptar"){
				salida="";
				cont=0;
				while(cont<cad.length){
					letra=cad.charAt(cont);
					pos=llave.indexOf(letra);
					salida=salida+abc.charAt(pos);
					cont++;
				}
			}
			document.f_encripta.salida.value=salida;
			}

}