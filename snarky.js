var snarkyProbability = Math.round(Math.random());
var isSnarky = document.getElementById("Snarky");

if (snarkyProbability == 0) {
    isSnarky.innerHTML = "Right now...Mike is NOT snarky.";;
  }
else {
    isSnarky.innerHTML = "OMG!! Mike is SOOOOOO snarky!!";
}
