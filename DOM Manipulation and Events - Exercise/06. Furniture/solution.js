function solve() {

  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate() {

    let currenItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
    let tableBody = document.getElementsByTagName("tbody")[0];

    for (let item of currenItems) {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td>
                              <img src="${item.img}">
                            </td>
                            <td>
                              <p>${item.name}</p>
                            </td>
                            <td>
                              <p>${item.price}</p>
                            </td>
                            <td>
                              <p>${item.decFactor}</p>
                            </td>
                            <td>
                              <input type="checkbox">
                            </td>
                            `;
      tableBody.appendChild(tableRow);
    }

  }

  function buy() {

    let resultArea = document.querySelectorAll("textarea")[1];
    let table = Array.from(document.querySelectorAll("tbody tr"));
    let res = [];

    for (let el of table) {
      if (el.querySelector("input[type=checkbox]:checked")) {
        let tableData = Array.from(el.querySelectorAll("td"));
        let info = {
          name: tableData[1].children[0].textContent,
          price: tableData[2].children[0].textContent,
          decFactor: tableData[3].children[0].textContent
        }
        res.push(info);
      }
    }

    let names = "";
    let totalPrice = 0;
    let decFactor = 0;

    for (let i = 0; i < res.length; i++) {
      let item = res[i];
      let sep = i == res.length - 1 ? "" : ", ";
      names += item.name + sep,
        totalPrice += Number(item.price);
      decFactor += Number(item.decFactor);
    }
    decFactor /= res.length;

    resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`
  }
}