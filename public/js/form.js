function formular(form){
	/*tjekke om der er forbindelse mellem dokumenterne
	alert(form.heleNavn.value);*/

	if(form.heleNavn.value.length == 0) {
		alert("udfyld venligst feltet navn");
		form.heleNavn.focus();
		form.heleNavn.style.backgroundColor = "RGBA(255,0,0,0,5)";
		return false;
	} else {
		form.heleNavn.style.backgroundColor = "transparent";
	}

	if(form.email.value.length == 0) {
		form.email.focus();
		form.email.style.backgroundColor = "RGBA(255,0,0,0,5)";
		return false;
	} else {
		form.email.style.backgroundColor = "transparent";
	}	

	if(form.besked.value.length == 0) {
		alert("udfyld venligst feltet besked");
		form.besked.focus();
		form.besked.style.backgroundColor = "RGBA(255,0,0,0,5)";
		return false;
	} else {
		form.besked.style.backgroundColor = "transparent";
	}
}