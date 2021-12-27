const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
}

const handle = () => {
  h1.style.color = "blue";
};

// const sum = (a, b) => a + b;

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copy");
}

function handleWindowOffline() {
  alert("offline");
}
function handleWindowOnline() {
  alert("online");
}

h1.onclick = handle;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
