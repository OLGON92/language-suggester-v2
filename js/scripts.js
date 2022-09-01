//User Interface Logic

  
function quizQuestions(event) {
  event.preventDefault();
    const userFaveDino =document.querySelector("input[name='fav-dino']:checked").value;
    const userFalloutChoice =document.querySelector("input[name='fallout-choice']:checked").value;
    const userExerChoice =document.querySelector("input[name='phys-ed']:checked").value;
    const userStarWarsOrTrek =document.querySelector("input[name='wars-or-trek']:checked").value;
    const userFootyOrEggball =document.querySelector("input[name='footy-or-eggball']:checked").value;

  if (userFaveDino === "t-rex" && userFalloutChoice === "fnv" && userExerChoice === "strength" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "footy") {
    document.querySelector("span#myLang").innerText ="Python";
  } else if (userFaveDino === "raptor" && userFalloutChoice === "fallout-4" && userExerChoice === "cardio" && userStarWarsOrTrek === "star-trek" && userFootyOrEggball === "eggball") {
    document.querySelector("span#myLang").innerText ="C#";
  } else if (userFaveDino === "no-dino-luv" && userFalloutChoice === "no-fallout-luv" && userExerChoice === "no-exercise" && userStarWarsOrTrek === "not-a-star-fan" && userFootyOrEggball === "no-sports") {
    document.querySelector("span#myLang").innerText ="Go";
  } else if (userFaveDino === "t-rex" && userFalloutChoice === "fallout-4" && userExerChoice === "no-exercise" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "eggball") {
    document.querySelector("span#myLang").innerText ="JavaScript";
  } else if (userFaveDino === "raptor" && userFalloutChoice === "fnv" && userExerChoice === "cardio" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "eggball") {
    document.querySelector("span#myLang").innerText ="Ruby";
  } else if (userFaveDino === "no-dino-luv" && userFalloutChoice === "fallout-4" && userExerChoice === "strength" && userStarWarsOrTrek === "not-a-star-fan" && userFootyOrEggball === "eggball") {
    document.querySelector("span#myLang").innerText ="Rust";
  } else {
    document.querySelector("span#myLang").innerText ="Swift";
  }
}
window.addEventListener("load", function()  { 
  const form = document.getElementById("lang-suggester");
  form.addEventListener("submit", quizQuestions)
});

  


/*window.addEventListener("load", function()  {
  let form = document.querySelector("lang-suggester");
  let resetBtn = document.querySelector("button#reset");
  let resultsHere = document.querySelector("div#resultsHere");*/

  /*resultsHere.removeAttribute("class");
  event.preventDefault();

  form.addEventListener("submit", function()  {
    resetBtn.removeAttribute("class");

    resetBtn.addEventListener("click", function() {
      resultsHere.setAttribute("class", "hidden");
      document.getElementById("span#myLang").value = null;*/