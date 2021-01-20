window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.opacity = "0.7";
  } else {
    document.getElementById("navbar").style.opacity = "0.95";
  }
}

function validateForm() {
  var x = document.forms["myForm"]["fname","lname","email"].value;
  if (x == "") {
    alert("Not all parts of form is complete");
    return false;
  }
}