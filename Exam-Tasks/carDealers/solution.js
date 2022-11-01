window.addEventListener("load", solve);

function solve() {

  document.getElementById("publish").addEventListener("click", createOffer);

  let type = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let orginalPrice = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");
  let tBody = document.getElementById("table-body");

  function createOffer(e) {
    e.preventDefault();
    let typeValue = type.value;
    let modelValue = model.value;
    let yearValue = year.value;
    let fuelValeu = fuel.value;
    let orginalPriceValue = orginalPrice.value;
    let sellingPriceValue = sellingPrice.value;

    if (Number(orginalPrice.value) > Number(sellingPrice.value)) {
      return
    }
    if (!type.value || !model.value || !year.value || !fuel.value || !orginalPrice.value || !sellingPrice.value) {
      return
    }
    type.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    orginalPrice.value = "";
    sellingPrice.value = "";
    addPost(typeValue, modelValue, yearValue, fuelValeu, orginalPriceValue, sellingPriceValue)
  }



  function addPost(typeValue, modelValue, yearValue, fuelValeu, orginalPriceValue, sellingPriceValue) {
    let tr = document.createElement("tr");
    tr.classList.add("row");

    let td1 = document.createElement("td");
    td1.textContent = `${typeValue}`

    let td2 = document.createElement("td");
    td2.textContent = `${modelValue}`;

    let td3 = document.createElement("td");
    td3.textContent = `${yearValue}`;

    let td4 = document.createElement("td");
    td4.textContent = `${fuelValeu}`;

    let td5 = document.createElement("td");
    td5.textContent = `${orginalPriceValue}`;

    let td6 = document.createElement("td");
    td6.textContent = `${sellingPriceValue}`;

    let td7 = document.createElement("td");

    let actionBtn = document.createElement("button");
    actionBtn.classList.add("action-btn");
    actionBtn.setAttribute("edit", true);
    actionBtn.textContent = "Edit";
    actionBtn.addEventListener("click", editBtn);

    let sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn");
    sellBtn.setAttribute("sell", true);
    sellBtn.textContent = "Sell";

    td7.appendChild(actionBtn);
    td7.appendChild(sellBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tBody.appendChild(tr);
  }

  function editBtn(e) {
    debugger
    let currentPost = e.target.parentElement.children
   // let tBody = currentPost.parentNode.children;

    let typeValue = currentPost[0].textContent;
    let modelValue = currentPost[0].textContent;
    let yearValue = currentPost[0].textContent;
    let fuelValeu = currentPost[0].textContent;
    let orginalPriceValue = currentPost[0].textContent;
    let sellingPriceValue = currentPost[0].textContent;

    type.value = typeValue;
    model.value = modelValue
    year.value = yearValue;
    fuel.value = fuelValeu;
    orginalPrice.value = orginalPriceValue;
    sellingPrice.value = sellingPriceValue;
    currentPost.remove();

  }

}
