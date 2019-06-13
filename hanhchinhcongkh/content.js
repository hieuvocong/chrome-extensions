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
    } else if (action === "copy") {
        const table = document.getElementsByClassName("divTableHoSo")[0];
        table.querySelectorAll("i").forEach(element => element.click());
        let input = document.createElement("input");
        input.setAttribute("value", table.innerHTML);
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.removeChild(input);
    }
});
