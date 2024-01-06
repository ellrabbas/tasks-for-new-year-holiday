function getExternalApi() {
    fetch('https://randomuser.me/api/?results=25')
        .then(data => {
            return data.json();
        })
        .then(users => {
            let user = users.results;
            let container = document.querySelector(".container");
            let table = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");


            table.classList.add("table");
            table.classList.add("table-dark");
            table.classList.add("p-3");
            table.classList.add("table-hover");

            container.appendChild(table);
            table.appendChild(thead);
            table.appendChild(tbody);

            let thRow = document.createElement("tr");
            thead.appendChild(thRow);
            thRow.classList.add("text-center");

            let picTitle = document.createElement("th");
            picTitle.innerText = "Pictures";
            picTitle.setAttribute("scope", "col");
            thRow.appendChild(picTitle);

            let fnTitle = document.createElement("th");
            fnTitle.innerText = "Firstname";
            fnTitle.setAttribute("scope", "col");
            thRow.appendChild(fnTitle);


            let lnTitle = document.createElement("th");
            lnTitle.innerText = "Lastname";
            lnTitle.setAttribute("scope", "col");
            thRow.appendChild(lnTitle);


            let ageTitle = document.createElement("th");
            ageTitle.innerText = "Age";
            ageTitle.setAttribute("scope", "col");
            thRow.appendChild(ageTitle);


            let emailTitle = document.createElement("th");
            emailTitle.innerText = "Email";
            emailTitle.setAttribute("scope", "col");
            thRow.appendChild(emailTitle);


            let addressTitle = document.createElement("th");
            addressTitle.innerText = "Address";
            addressTitle.setAttribute("scope", "col");
            thRow.appendChild(addressTitle);


            let phoneTitle = document.createElement("th");
            phoneTitle.innerText = "Phone";
            phoneTitle.setAttribute("scope", "col");
            thRow.appendChild(phoneTitle);


            let birthTitle = document.createElement("th");
            birthTitle.innerText = "Birthdate";
            birthTitle.setAttribute("scope", "col");
            thRow.appendChild(birthTitle);

            user.map(element => {
                let tr = document.createElement("tr");
                let img = document.createElement("img");
                img.classList.add("rounded-circle");
                tbody.appendChild(tr);
                tr.classList.add("align-middle");
                tr.classList.add("text-center");

                let picture = document.createElement("td");
                picture.appendChild(img);
                img.setAttribute("src", element.picture.medium);
                tr.appendChild(picture);


                let firstName = document.createElement("td");
                firstName.innerHTML = element.name.first;
                tr.appendChild(firstName);


                let lastName = document.createElement("td");
                lastName.innerHTML = element.name.last;
                tr.appendChild(lastName);


                let age = document.createElement("td");
                age.innerHTML = element.dob.age;
                tr.appendChild(age);


                let email = document.createElement("td");
                email.innerHTML = element.email;
                tr.appendChild(email);


                let address = document.createElement("td");
                address.innerHTML = `${element.location.street.name}, ${element.location.country}`;
                tr.appendChild(address);


                let phone = document.createElement("td");
                phone.innerHTML = element.phone;
                tr.appendChild(phone);


                let birthDate = document.createElement("td");
                birthDate.innerHTML = turnDate(element.dob.date);
                tr.appendChild(birthDate);
            });

        })
        .catch(err => {
            console.log(`Error message: ${err}`);
        })
};

function turnDate(d) {
    let birth = new Date(d);
    return birth.toLocaleDateString();
}

getExternalApi();
