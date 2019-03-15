// SIGN UP
function sign_up(){
  var inputs = document.querySelectorAll('.form_sign_field');
  document.querySelectorAll('.ul_items > li')[0].className=""; 
  document.querySelectorAll('.ul_items > li')[1].className="active"; 
  
  for(var i = 0; i < inputs.length ; i++  ) {
    if(i == 2  ){
    }else{  
    document.querySelectorAll('.form_sign_field')[i].className = "form_sign_field block";
    }
  } 

  setTimeout( function(){
    for(var d = 0; d < inputs.length ; d++  ) {
      document.querySelectorAll('.form_sign_field')[d].className = "form_sign_field block active_inp";  
    }
  },100);

  document.querySelector('.forgot_pw_link').style.opacity = "0";
  document.querySelector('.forgot_pw_link').style.top = "-5px";
  document.querySelector('.signin_btn').innerHTML = "SIGN UP";    
  
  setTimeout(function(){
    document.querySelector('.terms_conditions').style.opacity = "1";
    document.querySelector('.terms_conditions').style.top = "5px";
  },500);

  setTimeout(function(){
    document.querySelector('.forgot_pw_link').className = "forgot_pw_link hidden";
    document.querySelector('.terms_conditions').className = "terms_conditions block";
  },450);
}
// end of sign up


// SIGN IN
function sign_in(){
  var inputs = document.querySelectorAll('.form_sign_field');
  document.querySelectorAll('.ul_items > li')[0].className = "active"; 
  document.querySelectorAll('.ul_items > li')[1].className = ""; 
  
    for(var i = 0; i < inputs.length ; i++  ) {
      switch(i) {
        case 1:
          console.log(inputs[i].name);
        break;
        case 2:
          console.log(inputs[i].name);
        default: 
        document.querySelectorAll('.form_sign_field')[i].className = "form_sign_field block";
      } 
    }  

  setTimeout( function(){
    for(var d = 0; d < inputs.length ; d++  ) {
      switch(d) {
        case 1:
          console.log(inputs[d].name);
        break;
        case 2:
          console.log(inputs[d].name);

        default:
        document.querySelectorAll('.form_sign_field')[d].className = "form_sign_field block";  
        document.querySelectorAll('.form_sign_field')[2].className = "form_sign_field block active_inp";  
      }
    }
  },100);

  document.querySelector('.terms_conditions').style.opacity = "0";
  document.querySelector('.terms_conditions').style.top = "-5px";

  setTimeout(function(){
    document.querySelector('.terms_conditions').className = "terms_conditions hidden"; 
    document.querySelector('.forgot_pw_link').className = "forgot_pw_link block";
  },500);

  setTimeout(function(){
    document.querySelector('.forgot_pw_link').style.opacity = "1";
    document.querySelector('.forgot_pw_link').style.top = "5px";
    
    for(var d = 0; d < inputs.length ; d++  ) {
      switch(d) {
        case 1:
          console.log(inputs[d].name);
        break;
        case 2:
          console.log(inputs[d].name);
        break;
        default:
        document.querySelectorAll('.form_sign_field')[d].className = "form_sign_field";  
      }
    }
  },1500);
  document.querySelector('.signin_btn').innerHTML = "SIGN IN";    
}
// end of sign in

window.onload =function(){
  document.querySelector('.login_form').className = "login_form cent_active";
}


