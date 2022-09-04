//User Interface Logic

  

function quizAnswers()  {
  const userFaveDino = document.querySelector("input[name='fav-dino']:checked").value;
  const userFalloutChoice = document.querySelector("input[name='fallout-choice']:checked").value;
  const userExerChoice = document.querySelector("input[name='phys-ed']:checked").value;
  const userStarWarsOrTrek = document.querySelector("input[name='wars-or-trek']:checked").value;
  const userFootyOrEggball = document.querySelector("input[name='footy-or-eggball']:checked").value;
    let result;
  if (userFaveDino === "t-rex" && userFalloutChoice === "fnv" && userExerChoice === "strength" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "footy") {
    result = "Python";
  } else if (userFaveDino === "raptor" && userFalloutChoice === "fallout-4" && userExerChoice === "cardio" && userStarWarsOrTrek === "star-trek" && userFootyOrEggball === "eggball") {
    result = "C#";
  } else if (userFaveDino === "no-dino-luv" && userFalloutChoice === "no-fallout-luv" && userExerChoice === "no-exercise" && userStarWarsOrTrek === "not-a-star-fan" && userFootyOrEggball === "no-sports") {
    result = "Go";
  } else if (userFaveDino === "t-rex" && userFalloutChoice === "fallout-4" && userExerChoice === "no-exercise" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "eggball") {
    result = "JavaScript";
  } else if (userFaveDino === "raptor" && userFalloutChoice === "fnv" && userExerChoice === "cardio" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "eggball") {
    result = "Ruby";
  } else if (userFaveDino === "no-dino-luv" && userFalloutChoice === "fallout-4" && userExerChoice === "strength" && userStarWarsOrTrek === "not-a-star-fan" && userFootyOrEggball === "eggball") {
    result = "Rust";
  } else {
    result = "Swift";
  }
  document.getElementById("suggestedLang").outerText = result;
  event.preventDefault();
}
function handleRadio(event) {
  quizAnswers();

}

window.addEventListener("load", function() {
  document.getElementById("lang-suggester").addEventListener("submit", handleRadio);
  let form = document.getElementById("suggestedLang");
  let submitBtn = document.getElementById("submitBtn");
  let resetBtn = document.getElementById("resetBtn");
  

  submitBtn.removeAttribute("hidden");

  form.addEventListener("submit", function() {
    submitBtn.setAttribute("click","hidden");
    resetBtn.removeAttribute("class");
  });

});


  