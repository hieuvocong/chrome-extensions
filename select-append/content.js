function appendSelect(element, value) {
  const option = document.createElement("option");
  option.innerText = value;
  option.value = value;
  element.appendChild(option);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const userInput = request.userInput;
  const elements = document.querySelectorAll("select");
  elements.forEach(element => {
    appendSelect(element, userInput);
  });
});
