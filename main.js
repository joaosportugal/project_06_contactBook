const submitButton = document.getElementById('submitButton');
const contactName = document.getElementById('contactName');
const contactNumber = document.getElementById('contactNumber');
const errorMessage = document.getElementById('errormessage');
const userName = document.getElementById('userName');
let allNames = [];
let allNumbers = [];

let newContact = ''

userName.innerHTML = prompt('Qual seu nome?');

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    addContact(contactName, contactNumber);


})

function addContact(contactName, contactNumber) {

    if (allNames.includes(contactName.value) || allNumbers.includes(contactNumber.value)) {
        errorMessage.innerHTML = `O contato ${contactName.value} ou o número ${contactNumber.value} já foi adicionado.`
        errorMessage.style.display = 'flex'
    } else {
        errorMessage.style.display = 'none';

        newContact = `<tr>
                <td>${contactName.value}</td>
                <td>${contactNumber.value}</td>
            </tr>`
    
    const contactList = document.getElementById('contactList');
    contactList.innerHTML += newContact;
    
    addToAllNamesArr(allNames);
    addToAllNumbersArr(allNumbers);
    }
}

function addToAllNamesArr(allNames) {
    allNames.push(contactName.value);
}

function addToAllNumbersArr(allNumbers) {
    allNumbers.push(contactNumber.value);
}

