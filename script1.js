// JavaScript source code
//subject grades saved in database
 localStorage.setItem('6969s1q','18')
 localStorage.setItem('6969s1m','19')
 localStorage.setItem('6969s1p','50')
 localStorage.setItem('6969s1f','87')

 localStorage.setItem('6969s2q','15')
 localStorage.setItem('6969s2m','17')
 localStorage.setItem('6969s2p','50')
 localStorage.setItem('6969s2f','82')

 localStorage.setItem('6969s3q','10')
 localStorage.setItem('6969s3m','11')
 localStorage.setItem('6969s3p','57')
 localStorage.setItem('6969s3f','79')

var submit = false;

//This function checks the validation of the data in the register form
function f1(){
       
       var name = document.getElementById('fname').value;
       
       var name2 = document.getElementById('lname').value;
       
       var pswrd = document.getElementById('pswrd').value;
       
       var pswrd2 = document.getElementById('vpswrd').value;
       
       var setnum = document.getElementById('setnum').value;
       
       var email = document.getElementById('email').value;

       if(name == "" || name == null){
 
       alert("The name field is empty")      
       submit = false;
       }

       else if(name2 == "" || name2 == null){
       
       alert("The last name field is empty")
       submit = false;
       }

       else if(pswrd == "" || pswrd == null ){
       
       alert("The password field is empty")
       submit = false;;
       }
        
       else if(pswrd2 == "" || pswrd2 == null && pswrd2.length  < 8 ){
       
       alert("The password verify field is empty" )
       submit = false;;
       }

       else if( pswrd2.length  < 8 ){
       
       alert("The password must be more than 8 digits or characters" )
       submit = false;;
       }

       else if (pswrd != pswrd2){
       
       alert("Password doesn't match ")
       submit = false;;
	   }

       else if(email == "" || email == null){
       
       alert("The email field is empty")
       submit = false;;
       }

       else if (setnum == "" || setnum == null){
       
       alert("Set number field is empty")
       submit = false;;
	   }
       
       else{
       submit = true;
	}
}
//This function store the user data after the user press the submit button in the register form
function f2(){
   
   if(submit == true)
   {
   localStorage.setItem(document.getElementById('setnum').value, document.getElementById('setnum').value);
    
   localStorage.setItem(document.getElementById('setnum').value +"p",document.getElementById('pswrd').value);
    
   localStorage.setItem(document.getElementById('setnum').value +"n",document.getElementById('fname').value);    

   localStorage.setItem(document.getElementById('setnum').value +"ln",document.getElementById('lname').value);

        window.open('login.html'); 

   }
}
//This function checks if the set number and password are correct or not in login form
function f3(){
     
     var admin_un = "youth team";

     var admin_pw = "youth team23"

     var x = localStorage.getItem(document.getElementById('userid').value);
     
     var y = localStorage.getItem(document.getElementById('userid').value+"p");



     if(x == document.getElementById('userid').value && y == document.getElementById('pswrd3').value ){


     
     var z = localStorage.getItem(document.getElementById('userid').value+"ln");
   
     var lgn = localStorage.getItem(document.getElementById('userid').value +"n");
     
     document.getElementById("mymy").innerHTML = lgn+" "+z ;

     window.open('Home page.html'); 
     }

     else if(document.getElementById('userid').value == admin_un && document.getElementById('pswrd3').value == admin_pw){
          window.open('admin page.html');

	 }
         
     else{
     
     alert("the username or password is not found");
         
     var nlogn = "Hello,login";
     document.getElementById("mymy").innerHTML = nlogn  ;
     }
}
function f4(){

if(hp == true){
     var z = localStorage.getItem(document.getElementById('userid').value+"ln");
   
     var lgn = localStorage.getItem(document.getElementById('userid').value +"n");
     
     document.getElementById("mymy").innerHTML = lgn+" "+z ;

}

}
//This function checks if the set number and password are correct or not to display the subjects grads
function f5(){

            var n1 = window.prompt("Enter setnumber");
            var p1 = window.prompt("Enter password");
            
            var zb =n1+"p";
            
            var n2 = localStorage.getItem(n1);
            var p2 = localStorage.getItem(zb);
            var n3 = localStorage.getItem(n1+"n");
            
            var s1q = localStorage.getItem(n1+"s1q");
            var s1m = localStorage.getItem(n1+"s1m");
            var s1p = localStorage.getItem(n1+"s1p");
            var s1f = localStorage.getItem(n1+"s1f");

        if(n1 == n2 && p1 == p2){

        document.getElementById("f5").innerHTML = n1;
        document.getElementById("nm").innerHTML = n3;

        document.getElementById("s1q").innerHTML = s1q;
        document.getElementById("s1m").innerHTML = s1m;
        document.getElementById("s1p").innerHTML = s1p;
        document.getElementById("s1f").innerHTML = s1f;
        }
                                        
    
     else{
     
     alert("username or password is not found");
     
     }
}
function f6(){
       
       var name = document.getElementById('fname').value;
       
       var name2 = document.getElementById('lname').value;
       
       var pswrd = document.getElementById('pswrd').value;
       
       var pswrd2 = document.getElementById('vpswrd').value;
       
       var setnum = document.getElementById('setnum').value;
       
       var email = document.getElementById('email').value;

       var adr = document.getElementById('adr').value;

       if(name == "" || name == null){
 
       alert("Full name field is empty")      
       }

       else if(name2 == "" || name2 == null){
       
       alert("High school field is empty")
       }

       else if(pswrd == "" || pswrd == null ){
       
       alert("Phone number field is empty")
       }
        
       else if(adr == "" || adr == null){
       
       alert("The adress field is empty" )
       submit = false;;
       }

       else if(email == "" || email == null){
       
       alert("The email field is empty")
       }

       else if (setnum == "" || setnum == null){
       
       alert("ID field is empty")
	   }
       }