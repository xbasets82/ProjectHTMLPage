document.addEventListener("DOMContentLoaded", () => {
  const Experiences = document.querySelectorAll(".Exp");
  setAllExperienceListeners(Experiences);
});

function setAllExperienceListeners(Experiences) {
  for (i = 0; i < Experiences.length; i++) {
    Experiences[i].addEventListener("click", ShowExperience);
    Experiences[i].addEventListener("mouseover", function(event){RotateArrow(360,this)});
    Experiences[i].addEventListener("mouseout", function(event){RotateArrow(0,this)});   
  }
}
function ShowExperience() {
  const listToShow = this.nextElementSibling;
  listToShow.style.display =
    listToShow.style.display === "block" || listToShow.style.display === ""
      ? (listToShow.style.display = "none")
      : (listToShow.style.display = "block");
}
function RotateArrow(degrees,objeto) {
  const arrow = objeto.querySelector(".Show");
  arrow.style.transition = "all 0.5s";
  arrow.style.transform = `rotate(${degrees}deg)`;
}

