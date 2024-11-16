const container = document.querySelector("#container");
const redParagraph = document.createElement("p");
const blueTitle = document.createElement("h3");
const pinkDiv = document.createElement("div");
const divTitle = document.createElement("h1");
const divParagraph = document.createElement("p");
const btn = document.querySelector("#btn");
const betterBtn = document.querySelector("#better-btn");

redParagraph.style.color = "red";
redParagraph.textContent = "Hey, I'm red!";

blueTitle.style.color = "blue";
blueTitle.textContent = "I'm a blue H3!";

pinkDiv.style.cssText = "border, 1px solid black; backgroundColor, pink";

divTitle.textContent = "I'm in a div";
divParagraph.textContent = "ME TOO!";

pinkDiv.appendChild(divTitle);
pinkDiv.appendChild(divParagraph);

container.appendChild(redParagraph);
container.appendChild(blueTitle);
container.appendChild(pinkDiv);

btn.onclick = () => alert("Hello World");
betterBtn.addEventListener("click", (e) => {
  alert("Hello World");
  e.target.style.background = "blue";
});