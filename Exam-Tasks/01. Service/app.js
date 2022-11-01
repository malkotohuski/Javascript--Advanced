window.addEventListener("load", solve);

function solve() {
    document.querySelector("button[type='submit']").addEventListener("click", creatTask);

    let typeProduct = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");
    let receivedOrders = document.getElementById("received-orders");
    let finishSection = document.getElementById("completed-orders");
    let clearBtn = finishSection.querySelector("button");
    clearBtn.addEventListener("click", clearTask);

    function creatTask(e) {
        e.preventDefault();
        let typeValue = typeProduct.value;
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return
        }
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";

        createOrders(typeValue, descriptionValue, clientNameValue, clientPhoneValue)
    }
    function createOrders(typeValue, descriptionValue, clientNameValue, clientPhoneValue) {
        let div = document.createElement("div");
        div.classList.add("container");

        let productType = document.createElement("h2");
        productType.textContent = `Product type for repair: ${typeValue}`

        let clientInfo = document.createElement("h3");
        clientInfo.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        let problem = document.createElement("h4");
        problem.textContent = `Description of the problem: ${descriptionValue}`

        let startBtn = document.createElement("button");
        startBtn.classList.add("start-btn");
        startBtn.textContent = "Start repair";
        startBtn.addEventListener("click", startRepair);

        let finishBtn = document.createElement("button");
        finishBtn.classList.add("finish-btn");
        finishBtn.setAttribute("disabled", true)
        finishBtn.textContent = "Finish repair";
        finishBtn.addEventListener("click", finishRepair);

        div.appendChild(productType);
        div.appendChild(clientInfo);
        div.appendChild(problem);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        receivedOrders.appendChild(div);

    }

    function startRepair(e) {
        e.target.setAttribute("disabled", true);
        let finishBtn = e.target.parentElement.getElementsByClassName("finish-btn")[0];
        finishBtn.disabled = false;
    }

    function finishRepair(e) {
        let divContainer = e.target.parentElement;
        finishSection.appendChild(divContainer);
        let btns = divContainer.querySelectorAll("button");
        btns[0].remove();
        btns[1].remove();
    }
    function clearTask(e) {
        let containers = finishSection.querySelectorAll(".container");
        Array.from(containers).forEach(container => container.remove());
    }
}