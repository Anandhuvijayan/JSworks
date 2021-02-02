
    function validation(){
        // alert("hhh");
        f = 1;
        document.getElementById("errname").style.display = "none";
        document.getElementById("numloc").style.display = "none";
        document.getElementById("errmail").style.display = "none";
        document.getElementById("errpho").style.display = "none";
        document.getElementById("errpass").style.display = "none";
        password = document.getElementById("pass").value;
        phone = document.getElementById("pnum").value;
        email = document.getElementById("email").value;
        name = document.getElementById("txtname").value;
        num1 = document.getElementById("num").value;

        if(name==""){
            f=0;
            document.getElementById("errname").style.display = "block";
            document.getElementById("errname").innerHTML = "Please provide name";
        }else{
            chk =  checkcharacter(name);
            if(chk == 0){
                f=0;
                document.getElementById("errname").style.display = "block";
                document.getElementById("errname").innerHTML = "Please provide valid name";
            }

        }
        
       
        if(num1==""){
            f=0;
            document.getElementById("numloc").style.display = "block";
            document.getElementById("numloc").innerHTML = "Please provide number";
        }else{
            chk1 =  checknumber(num1);
            if(chk1 == 0){
                f=0;
                document.getElementById("numloc").style.display = "block";
                document.getElementById("numloc").innerHTML = "Please provide valid number";

        }
        }
       
        if(email==""){
            f=0;
            document.getElementById("errmail").style.display = "block";
            document.getElementById("errmail").innerHTML = "Please provide email";
        }else{
            chk2 =  checkmail(email);
            if(chk2 == 0){
                f=0;
                document.getElementById("errmail").style.display = "block";
                document.getElementById("errmail").innerHTML = "Please provide valid email";

        }
        }
      
        if(phone==""){
            f=0;
            document.getElementById("errpho").style.display = "block";
            document.getElementById("errpho").innerHTML = "Please provide phone number";
        }else{
            chk4 =  checkphone(phone);
            if(chk4 == 0){
                f=0;
                document.getElementById("errpho").style.display = "block";
                document.getElementById("errpho").innerHTML = "Please provide valid phone number";

        }
        }
        
        if(password==""){
            f=0;
            document.getElementById("errpass").style.display = "block";
            document.getElementById("errpass").innerHTML = "Please provide password";
          
        }else{
            chk3 =  checkpass(password);
            if(chk3 == 0){
                f=0;
                document.getElementById("errpass").style.display = "block";
                document.getElementById("errpass").innerHTML = "Please provide valid password";     
        }
        }
        if(f == 1){
            return true;
        }else{
            return false;
        } 
        }
        
    function checkcharacter(name){
        var regex = /^[a-zA-Z]+$/;
        if(regex.test(name) == false){
            return 0;
        }else{
            return 1;
        }    
    }

function checknumber(number){  
     
    if (isNaN(number) || number<0){  
     return 0;  
    }else{  
     return 1;  
    }
    }
function checkmail(email){ 
         
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  

  return 0;
}
  else{
 return 1;
  } 
    } 

    function checkphone(phone){
        var phoneno = /^\d{10}$/;
        if(phone.match(phoneno)){
            return 1;
        }else{
            return 0;
        }    
    }

function checkpass(password) 
{
 
if(password.length<8){  
return 0; 
}else{
    return 1;
}
}

