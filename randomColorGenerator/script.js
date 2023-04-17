const colorContainerDiv = document.getElementById("color-container");

const generateRandomColor = () => {
  const hex = "0123456789ABCDEF";

  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += hex.charAt(Math.random() * hex.length);
  }

  return color;
};

const divCount = 30;

for (let count = 0; count < divCount; count++) {
  const divEle = document.createElement("div");
  divEle.classList.add("color-div");

  const color = generateRandomColor();
  divEle.style.background = color;
  divEle.setAttribute("bg", color);
  divEle.innerText = color;

  colorContainerDiv.append(divEle);
}
