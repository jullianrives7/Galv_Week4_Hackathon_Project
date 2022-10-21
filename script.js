const home = document.querySelector("#home");
const pixelArtLink = document.querySelector("#pixel-art-project");
const ajaxTvShowLink = document.querySelector("#ajax-tv-show-project");
const stoplightEventLink = document.querySelector("#stoplight-event-project");
const musicPortfolioLink = document.querySelector("#music-portfolio-project");
const virtualDrumMachineLink = document.querySelector(
  "#virtual-drum-machine-project"
);
const githubLink = document.querySelector("#github-link");
const iframe = document.querySelector("#iframe");

home.addEventListener("click", function () {
  console.log("Home Link Clicked");
  window.location = "index.html";
});

pixelArtLink.addEventListener("click", function () {
  console.log("Pixel Art Link Clicked");
  window.location = "pixelArt.html";
});

ajaxTvShowLink.addEventListener("click", function () {
  console.log("AJAX Project Link Clicked");
  window.location = "ajaxTvShowFinder.html";
});

stoplightEventLink.addEventListener("click", function () {
  console.log("Stoplight Project Link Clicked");
  window.location = "stoplightEventExercise.html";
});

musicPortfolioLink.addEventListener("click", function () {
  console.log("Music Portfolio Project Link Clicked");
  window.location = "musicPortfolioSite.html";
});

virtualDrumMachineLink.addEventListener("click", function () {
  console.log("Drum Machine Project Link Clicked");
  window.location = "virtualDrumMachine.html";
});

githubLink.addEventListener("click", function () {
  console.log("Github Link Clicked");
  window.open("https://github.com/jullianrives7/");
});
