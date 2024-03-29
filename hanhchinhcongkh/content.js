function appendSelect(element, value) {
    const option = document.createElement("option");
    option.innerText = value;
    option.value = value;
    element.appendChild(option);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const action = request.action;
    if (action === "set") {
        const pageSize = request.pageSize;
        const elements = document.querySelectorAll("select");
        elements.forEach(element => {
            appendSelect(element, pageSize);
        });
    } else if (action === "extend") {
        const table = document.getElementsByClassName("divTableHoSo")[0];
        table.querySelectorAll("i").forEach(element => element.click());
    }
});
