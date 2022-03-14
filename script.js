//Arrays containing the male and female names.
var man=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
var woman=["Akosua","Adwoa","Abenaa","Akua","yaa","Afua","Ama"];

//prevents the form from refreshing when submit button is clicked.
function onFormSubmit(){
    event.preventDefault()
}

/**
 * This functions gets values from the form and matches the
 * the values within the arrays and selects the appropriate
 * names depending on the user input
 **/ 
function showName(){
//Getting form values
    var gender=document.getElementById("gender").value;
    var day=document.getElementById("day").value;

//Conditional statements
    if(gender=="male" && day==0){
       document.getElementById("demo").innerHTML=man[0];
    }
      else if(gender=="female" && day==0){
      document.getElementById("demo").innerHTML=woman[0];   
    }
      else if(gender=="male" && day==1){
      document.getElementById("demo").innerHTML=man[1];   
    }
      else if(gender=="female" && day==1){
      document.getElementById("demo").innerHTML=woman[1];   
    }
      else if(gender=="male" && day==2){
      document.getElementById("demo").innerHTML=man[2];   
    }
      else if(gender=="female" && day==2){
      document.getElementById("demo").innerHTML=woman[2];   
    }
      else if(gender=="male" && day==3){
      document.getElementById("demo").innerHTML=man[3];   
    }
      else if(gender=="female" && day==3){
      document.getElementById("demo").innerHTML=woman[3];   
    }
      else if(gender=="male" && day==4){
      document.getElementById("demo").innerHTML=man[4];   
    }
      else if(gender=="female" && day==4){
      document.getElementById("demo").innerHTML=woman[4];   
    } 
      else if(gender=="male" && day==5){
      document.getElementById("demo").innerHTML=man[5];   
    }
      else if(gender=="female" && day==5){
      document.getElementById("demo").innerHTML=woman[5];   
    } 
      else if(gender=="male" && day==6){
      document.getElementById("demo").innerHTML=man[6];   
    }
      else if(gender=="female" && day==6){
      document.getElementById("demo").innerHTML=woman[6];   
    }
}
