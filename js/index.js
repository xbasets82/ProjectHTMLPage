document.addEventListener("DOMContentLoaded", () => {
  const Experiences = document.querySelectorAll(".Exp");
  setAllExperienceListeners(Experiences);
});

function setAllExperienceListeners(Experiences) {
  for (i = 0; i < Experiences.length; i++)
    Experiences[i].addEventListener("click", ShowExperience);
}

function ShowExperience() {
  console.log(this);
  const listToShow = this.nextElementSibling;
  listToShow.style.display =
    listToShow.style.display === "block" || listToShow.style.display === ""
      ? (listToShow.style.display = "none")
      : (listToShow.style.display = "block");
}
