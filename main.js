const submitButton = document.getElementById('submitButton');
const bodyTable = document.getElementById('bodyTable');
let allContactsArray = [];


submitButton.addEventListener('click', function(e){
    e.preventDefault();

    let contact = getInformation([]);

    saveAndPrintContact(contact);

    document.getElementById('name').value = "";
    document.getElementById('number').value = "";


})

function getInformation(information) {
    const name = document.getElementById('name');
    const number = document.getElementById('number');
    information.push(`${name.value}`, `${number.value}`);
    return information;
}

function saveAndPrintContact(contact) {
    let contactIndex = parseInt(allContactsArray.length - 1);
    const errorMessage = document.getElementById('errormessage');
    switch(true) {
        case allContactsArray == 0:
            allContactsArray.push(contact);
            printContact(contact[0], contact[1]);
            break;
        // nome igual e numero igual:
        case allContactsArray[contactIndex][0] === contact[0] && allContactsArray[contactIndex][1] === contact[1]:
            console.log(`Esse contato já foi adicionado`);
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = `Esse contato já foi adicionado`
            break;
        // nome igual e numero diferente:
        case allContactsArray[contactIndex][0] === contact[0] && allContactsArray[contactIndex][1] !== contact[1]: 
            console.log(`${contact[0]} já foi adicionado com o número ${allContactsArray[contactIndex][1]}`);
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = `${contact[0]} já foi adicionado com o número ${allContactsArray[contactIndex][1]}`;
            break;
        // nome diferente e numero igual:
        case allContactsArray[contactIndex][0] !== contact[0] && allContactsArray[contactIndex][1] === contact[1]: 
            console.log(`${contact[1]} já foi adicionado para o contato ${allContactsArray[contactIndex][0]}`);
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = `${contact[1]} já foi adicionado para o contato ${allContactsArray[contactIndex][0]}`;
        break;
        // nome diferente numero diferente:
        default: 
            allContactsArray.push(contact);
            errorMessage.style.display = 'none';
            printContact(contact[0], contact[1]);
    }
}

function printContact(name, number) {
    const contactList = document.getElementById('bodyTable');
    let printedContact = `<tr class = "contactStyle">
                        <td>${name}</td>
                        <td>${number}</td>
                    </tr>`;
    contactList.innerHTML += printedContact
    return console.log(`O contato ${name} de número ${number} foi adicionado com sucesso!`);
}


