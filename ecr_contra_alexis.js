function mostrar(){
	document.f_contra.c_pass.type="text";
}

function ocultar(){
	document.f_contra.c_pass.type="password";
}

function enviar(){
	intentos=document.f_contra.intentos.value;
	intentos=parseInt(intentos);
	c_cta=document.f_contra.c_cta.value;
	c_pass=document.f_contra.c_pass.value;
	if(c_cta.length==0){
		alert("Error, se debe introducir una cuenta");
		document.f_contra.c_cta.style.background="red";
	}
	else{
		if(c_pass.length==0){
			alert("Error, se debe indicar una contraseña");
			document.f_contra.c_pass.style.background="red";
		}
		else{
			intentos++;
			document.f_contra.intentos.value=intentos;
			if ((c_cta=="rherrera")&&(c_pass=="pasale")){
				certificado1();
			}
			else{
				alert("Acceso denegado");
				if(intentos==3){
					alert("Se han agotado los intentos");
					document.f_contra.c_cta.disabled="true";
					document.f_contra.c_cta.style.background="gray";
					document.f_contra.c_pass.disabled="true";
					document.f_contra.c_pass.style.background="gray";
				}
			}
		}

	}
}

function campos_azules(){
	document.f_contra.c_cta.style.background="blue";
	document.f_contra.c_pass.style.background="blue";
}
	
function certificado1(){
	c_cta=document.f_contra.c_cta.value;
	c_pass=document.f_contra.c_pass.value;
	if((c_cta.length<5)&&(c_pass.length<5)){
			alert("Error,la cuenta no existe");
			document.f_encripta.cad.style.background="red";
		}
		else{
			abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
			llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abc"
		if(c_cta=="rherrera"){
			enc_cta="";
			cont=0;
				while(cont<c_cta.length){
					letra=c_cta.charAt(cont);
					pos=abc.indexOf(letra);
					enc_cta=enc_cta+llave.charAt(pos);
					cont++;
				}
			}
			if(c_pass=="pasale"){
			enc_pass=""
			cont=0;
				while(cont<c_pass.length){
					letra=c_pass.charAt(cont);
					pos=abc.indexOf(letra);
					enc_pass=enc_pass+llave.charAt(pos);
					cont++;
				}
			}	
		if ((enc_cta=="ukhuuhud")&&(enc_pass=="sdvdoh")){
				location.href="prog06_colores.html";
			}
		else{
			alert("Contraseña incorrecta");
		}
	}
}