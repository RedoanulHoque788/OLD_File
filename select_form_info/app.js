

/*Select Bangladesh*/


document.querySelector(".SelectCountry").addEventListener("change",function(){
	var selectCountry=document.querySelector("#Country").value;
	if(selectCountry=="bd"){
		document.querySelector(".SelectDivision").style.display="block";
	}
});

document.querySelector(".SelectDivision").addEventListener("change",function(){
	var selectDIVISION=document.querySelector("#Division").value;
	if(selectDIVISION=="dh"){
		document.querySelector(".dhk_District").style.display="block";
		document.querySelector(".ctg_District").style.display="none";
		document.querySelector(".Cox_inner").style.display="none";
		document.querySelector(".MyLocation").style.display="none";
	}else if(selectDIVISION=="ctg"){
		document.querySelector(".ctg_District").style.display="block";
		document.querySelector(".dhk_District").style.display="none";
		document.querySelector(".Cox_inner").style.display="none";
		document.querySelector(".MyLocation").style.display="none";
		
	}
});

document.querySelector(".ctg_District").addEventListener("change",function(){
	var selectAREA=document.querySelector("#DISTRICT").value;
	if(selectAREA=="cox"){
		document.querySelector(".Cox_inner").style.display="block";
		
	}
});

document.querySelector(".Cox_inner").addEventListener("change",function(){
	var selectPLACE=document.querySelector("#locations").value;
	if(selectPLACE=="Ramu"){
		document.querySelector(".MyLocation").style.display="block";
	}
});

document.querySelector(".MyLocation").addEventListener("change",function(){
	var selectHOME=document.querySelector("#setALERT").value;
	if(selectHOME=="GhP"){
		alert("This is a Village");
	}else if(selectHOME=="KonPara"){
		alert("This is also a Village");
	}else if(selectHOME=="ChairmanPara"){
		alert("This is Another Village");
	}
});


document.querySelector("#clickRESET").addEventListener("click",function(){
	
	alert("Your data has been  Sent..!");

	
});















