document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#set-button").addEventListener("click", () => {
    const userInput = document.querySelector("#user-input").value;
    console.log(userInput);
    if (userInput === "") return;
    const data = {
      userInput: userInput
    };
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, data);
    });
  });
});
