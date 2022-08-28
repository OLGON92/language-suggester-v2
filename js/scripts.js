//User Interface Logic
$(document).ready(function() {
  $("form#lang-suggester").submit(function(event) {
    event.preventDefault();
    const userFaveDino =$("input[name='fav-dino']:checked").val();
    const userFalloutChoice =$("input[name='fallout-choice']:checked").val();
    const userExerChoice =$("input[name='phys-ed']:checked").val();
    const userStarWarsOrTrek =$("input[name='wars-or-trek']:checked").val();
    const userFootyOrEggball =$("input[name='footy-or-eggball']:checked").val();

  let result;
  if (userFaveDino === "t-rex" && userFalloutChoice === "fnv" && userExerChoice === "strength" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "footy") {
    result ="Python";
  } else if (userFaveDino === "raptor" && userFalloutChoice === "fallout-4" && userExerChoice === "cardio" && userStarWarsOrTrek === "star-trek" && userFootyOrEggball === "eggball") {
    result ="C#";
  } else if (userFaveDino === "no-dino-luv" && userFalloutChoice === "no-fallout-luv" && userExerChoice === "no-exercise" && userStarWarsOrTrek === "not-a-star-fan" && userFootyOrEggball === "no-sports") {
    result ="Go";
  } else if (userFaveDino === "t-rex" && userFalloutChoice === "fallout-4" && userExerChoice === "no-exercise" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "eggball") {
    result ="JavaScript";
  } else if (userFaveDino === "raptor" && userFalloutChoice === "fnv" && userExerChoice === "cardio" && userStarWarsOrTrek === "star-wars" && userFootyOrEggball === "eggball") {
    result ="Ruby";
  } else if (userFaveDino === "no-dino-luv" && userFalloutChoice === "fallout-4" && userExerChoice === "strength" && userStarWarsOrTrek === "not-a-star-fan" && userFootyOrEggball === "eggball") {
    result ="Rust";
  } else {
    result= "Swift";
  }

  $("#result").text(result);
    $("#results-here").show();

  });
});
 
