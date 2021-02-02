
var buTTON=document.querySelector(".add");
var clearAll=document.querySelector(".Clear"); 
var GetReturn=document.querySelector(".returns"); 

buTTON.addEventListener("click",function(){

    x=0;
    y=1;
    

    var list1 =document.querySelector(".names").value;
    var list2 =document.querySelector(".numbers").value;
    var list3 =document.querySelector(".emails").value;
    
    var addRow=document.querySelector("#tbl");
    var newRow=addRow.insertRow(1);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);

    var dlt=document.createElement("button");
    dlt.innerHTML="remove";
   

    cell1.innerHTML=list1;
    cell2.innerHTML=list2;
    cell3.innerHTML=list3;
    cell4.append(dlt);

    document.querySelector(".names").value="";
    document.querySelector(".numbers").value="";
    document.querySelector(".emails").value="";

    dlt.addEventListener("click",(x)=>{
        newRow=newRow.remove();
    }); 


    clearAll.addEventListener("click",(x)=>{
        newRow=newRow.remove();
    }); 

   


});


