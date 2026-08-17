const promptBox = document.getElementById("prompt");
const generateButton = document.getElementById("generate");
const output = document.getElementById("output");

generateButton.addEventListener("click", () => {
  const request = promptBox.value.trim();

  if (!request) {
    output.textContent = "Please describe the website you want to create.";
    return;
  }

  output.textContent =
    "Website request received:\n\n" +
    request +
    "\n\nAI generation will be connected here.";
});
