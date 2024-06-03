function validateForm() {
  const name = document.getElementById(name).value;
  const mail = document.getElementById(mail).value;
  const phone = document.getElementById(phone).value;
  const travel = document.getElementById(travel).value;
  const count = document.getElementById(count).value;

  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    travel === "" ||
    count === ""
  ) {
    alert("Fields are mandatory");
    return false;
  }
  return true;
}

const standardBtns = document.getElementsByClassName("hotel-card");

for (let i = 0; i < standardBtns.length; i++) {
  standardBtns[i].addEventListener("click", (e) => {
    resetBackgroundColors(); // Reset all button background colors
    standardBtns[i].style.backgroundColor = "rgb(231, 231, 231)"; // Set clicked button's background color
  });
}

function resetBackgroundColors() {
  for (let i = 0; i < standardBtns.length; i++) {
    standardBtns[i].style.backgroundColor = "rgb(230, 255, 117)"; // Reset background color for all buttons
  }
}
