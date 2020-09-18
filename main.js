const sounds = document.querySelectorAll(".sound");
const visual = document.querySelector(".visual");
const pads = document.querySelectorAll(".pads div");
const app = document.querySelector(".app");

let color = ["#883c3c", "#71883c", "#3c8877", "#3c3d88", "#883c7e", "#883c3c"];

pads.forEach((pad, index) => {
  pad.addEventListener("click", function () {
    sounds[index].currentTime = 0;
    sounds[index].play();
    createBubbles(index);
    let randomNumber = Math.floor(Math.random() * 2);
    let anotherColor = ["#0a0a0a", "#fff"];
    document.querySelector("html").style.backgroundColor =
      anotherColor[randomNumber];
    if (randomNumber === 0) {
      app.style.color = "#fff";
      app.style.transition = "1s ease";
    } else {
      app.style.color = "#111";
      app.style.transition = "1s ease";
    }
  });

  let createBubbles = (index) => {
    let bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.animation = "jump 1.5s ease-in-out forwards";
    bubble.style.backgroundColor = color[index];

    bubble.addEventListener("animationend", function () {
      visual.removeChild(bubble);
    });
  };
});
