

var passwordLength = document.getElementById("password-length"),
uppercase = document.getElementById("uppercaseletter"),
lowercase = document.getElementById("lowercaseletter"),
number = document.getElementById("includenumber"),
symbol = document.getElementById("includesymbol"),
checkbox = document.querySelectorAll(".select-box"),
submit = document.querySelector("#generate-password-btn"),
display = document.querySelector("#show-text"),
copy = document.querySelector(".copy-pass-btn");
display.innerHTML = "";

var obj = {
  uppercaseletter : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercaseletter : "abcdefghijklmnopqrstuvwxyz",
  includenumber : "1234567890",
  includesymbol : "!@~#$%^&*(){}_<>?"
}

function passwordGenerator(){
  var password = "";
  var passLength = passwordLength.value;
  var checkboxSelected = "";


  checkbox.forEach(function(val){
    if(val.checked){
      checkboxSelected += obj[val.id];
    }
    console.log(checkboxSelected);
  })

  if(checkboxSelected){
    for(let i=0;i < passLength; i++) {
      password += checkboxSelected[Math.floor(Math.random() * checkboxSelected.length)]
    }
  }

  console.log(password);
  display.innerHTML = password;
  copy.addEventListener("click",function(){
    navigator.clipboard.writeText(display.innerHTML);
    alert("password copied sucessfully");
  })
}


submit.addEventListener("click",function (e) {
   e.preventDefault();
   passwordGenerator();
})

