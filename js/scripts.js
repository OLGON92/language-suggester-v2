//User Interface Logic
function langSuggester(event) {
  event.preventDefault();
  const userFaveDino = document.querySelector("input[name='fav-dino']:checked").value;
  const userFalloutChoice = document.querySelector("input[name='fallout-choice']:checked").value;
  const userExerChoice = document.querySelector("input[name='phys-ed']:checked").value;
  const userStarWarsOrTrek = document.querySelector("input[name='wars-or-trek']:checked").value;
  const userFootyOrEggball = document.querySelector("input[name='footy-or-eggball']:checked").value;
}
