const barre = document.getElementById("barre");

window.addEventListener("load", function () {
  barre.style.animation = "barre 1.5s ease";
});

function scrolldown() {
  const test = document.getElementById("test");
  test.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
