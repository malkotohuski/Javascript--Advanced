function solve() {
    document.getElementById("add").addEventListener("click", addList)
    document.getElementById("reset").addEventListener("click", clearInput)

    let text = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let listMails = document.getElementById("list");
    let ulSendList = document.getElementsByClassName('sent-list')[0];
    let deleteeList = document.getElementsByClassName('delete-list')[0];

    function addList(e) {
        e.preventDefault();
        let textValue = text.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if (!textValue || !titleValue || !messageValue) {
            return
        }
        createElement(textValue, titleValue, messageValue)
        clearInput();
    }

    function createElement(textValue, titleValue, messageValue) {
        let li = document.createElement("li");

        let h1 = document.createElement("h4");
        h1.textContent = `Title: ${titleValue}`;

        let h2 = document.createElement("h4");
        h2.textContent = `Recipient Name: ${textValue}`;

        let span = document.createElement("span");
        span.textContent = `${messageValue}`;

        let div = document.createElement("div");
        div.setAttribute("id", "list-action");

        let sendBtn = document.createElement("button");
        sendBtn.setAttribute("type", "id");
        sendBtn.textContent = "Send";
        sendBtn.addEventListener("click", sendText)


        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("type", "id");
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", deleteList);

        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(span);
        li.appendChild(div);
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        listMails.appendChild(li);

        text.value = "";
        title.value = "";
        message.value = "";

        function sendText(e) {

            let li = document.createElement("li");

            let span1 = document.createElement("span");
            span1.textContent = `To: ${textValue}`;

            let span2 = document.createElement("span");
            span2.textContent = `Title: ${titleValue}`;

            let div = document.createElement("div");
            div.classList.add("btn")

            let btnDelete = document.createElement("button");
            btnDelete.setAttribute("type", "class");
            btnDelete.textContent = "Delete";
            btnDelete.addEventListener("click", deleteList)

            let currentMail = e.target.parentNode.parentNode;
            currentMail.remove();
            e.preventDefault();

            li.appendChild(span1);
            li.appendChild(span2);
            li.appendChild(div);
            div.appendChild(btnDelete);
            ulSendList.appendChild(li);

        }
        function deleteList(e) {
            let currentMail = e.target.parentNode.parentNode;
            currentMail.remove();
            e.preventDefault();

            let li = document.createElement("li");

            let span1 = document.createElement("span");
            span1.textContent = `To: ${textValue}`;

            let span2 = document.createElement("span");
            span2.textContent = `Title: ${titleValue}`;

            li.appendChild(span1);
            li.appendChild(span2);
            deleteeList.appendChild(li);

            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);
        }
    }
    function clearInput(e) {

        text.value = "";
        title.value = "";
        message.value = "";
    }

}


solve();