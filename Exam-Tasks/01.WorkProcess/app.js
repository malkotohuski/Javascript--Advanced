function solve() {
    document.getElementById("add-worker").addEventListener("click", addWorkers);
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let email = document.getElementById("email");
    let birth = document.getElementById("birth");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");
    let tbody = document.getElementById("tbody");
    let budjet = document.querySelector("sum");


    function addWorkers(e) {
        e.preventDefault();
        let firstNameValue = firstName.value;
        let lastNameValeu = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let positionValue = position.value;
        let salaryValue = salary.value;

        if (!firstName.value || !lastName.value || !email.value || !birth.value || !position.value || !salary.value) {
            return
        }
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";

        createTable(firstNameValue, lastNameValeu, emailValue, birthValue, positionValue, salaryValue)

        function createTable(firstNameValue, lastNameValeu, emailValue, birthValue, positionValue, salaryValue) {

            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
            td1.textContent = `${firstNameValue}`;

            let td2 = document.createElement("tr");
            td2.textContent = `${lastNameValeu}`;

            let td3 = document.createElement("td");
            td3.textContent = `${emailValue}`;

            let td4 = document.createElement("td");
            td4.textContent = `${birthValue}`;

            let td5 = document.createElement("td");
            td5.textContent = `${positionValue}`;

            let td6 = document.createElement("td");
            td5.textContent = `${positionValue}`;

            let td7 = document.createElement("td");
            td7.textContent = `${salaryValue}`;

            let firedBtn = document.createElement("button");
            firedBtn.classList.add("fired");
            firedBtn.textContent = "Fired";
            firedBtn.addEventListener("click", fired);

            let editBtn = document.createElement("button");
            editBtn.classList.add("edit");
            editBtn.textContent = "Edit";
            editBtn.addEventListener("click", edit, firstName, lastName, email, birth, position, salary);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(firedBtn);
            tr.appendChild(editBtn);
            tbody.appendChild(tr);
        }
        function fired(e) {


        }
        function edit(e, fName, lName, mail, data, positionName, money) {
            e.preventDefault();
            e.target.parentNode.parentNode.remove();

            

            let currentSalary = Number(budjet.textContent);
            budjet.textContent = (currentSalary - Number(money)).toFixed(2);
        }

    }

}
solve()