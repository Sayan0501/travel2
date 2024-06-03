function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const dest = document.getElementById("dest").value;
  
  if (name === "" || phone === "" || dest === ""){
    alert("Fields are mandatory");
    return false;
  }
  return true;
}


jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
});