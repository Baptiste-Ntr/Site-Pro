const barre = document.getElementById("barre");
const arrow = document.getElementById("arrow");
var down = false;

window.addEventListener("load", function () {
  barre.style.animation = "barre 1.5s ease";
});

function scrolldown() {
  const test = document.getElementById("container2");
  test.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

const AnimTXT = document.getElementById("animtxt");

new Typewriter(AnimTXT, {
  deleteSpeed: 30,
})
  .changeDelay(100)
  .typeString("Développeur Front-End")
  .pause(1000)
  .deleteChars(10)
  .typeString("<a class='frontend'> Front-End</a>")
  .start();
