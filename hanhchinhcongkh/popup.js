document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("set-button").addEventListener("click", () => {
        const pageSize = document.getElementById("page-size-input").value;
        if (pageSize === "") return;
        const data = {
            action: "set",
            pageSize: pageSize
        };
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, data);
        });
    });

    document.getElementById("extend-button").addEventListener("click", () => {
        const data = {
            action: "extend"
        };
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, data);
        });
    });
});
