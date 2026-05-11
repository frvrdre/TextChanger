const btn = document.getElementById("btn");
const text = document.getElementById("text");

// state
let changed = false;

// click
btn.addEventListener("click", () => {

  if (changed === false) {
    text.textContent = "you clicked the button well done!";
    changed = true;
  } else {
    text.textContent = "This project tests my understanding of HTML, CSS, and JavaScript by building a simple interactive button from scratch without using a tutorial. When clicked, it updates the displayed text.";
    changed = false;
  }

});