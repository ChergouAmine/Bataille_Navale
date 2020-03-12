function render(){
  var div=document.querySelector('#connection');
  div.innerHTML= '';
  
  
  let string="Test";
  string;
  let username=document.createElement("input");
  username.setAttribute("type","text");
  username.setAttribute("id","usernameId");
  username.setAttribute("value","Username");
  
  let tab=div.appendChild(username);
  
  let password=document.createElement("input");
  password.setAttribute("type","text");
  password.setAttribute("id","passwordId");
  password.setAttribute("value","Password");
  
  tab=div.appendChild(password);
  
  let submit=document.createElement("input")
  submit.setAttribute("type","button");
  submit.setAttribute("value","Confirmer")
  submit.setAttribute("onclick","check();");
  
  tab=div.appendChild(submit);
  
}

render();