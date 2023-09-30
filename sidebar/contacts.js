```javascript
document.getElementById('contactsButton').addEventListener('click', function() {
    fetch('/api/contacts')
    .then(response => response.json())
    .then(data => {
        let contactsContainer = document.getElementById('contactsContainer');
        contactsContainer.innerHTML = '';
        data.forEach(contact => {
            let contactCard = document.createElement('div');
            contactCard.classList.add('card');
            contactCard.innerHTML = `
                <h2 class="text-xl">${contact.name}</h2>
                <p>${contact.email}</p>
                <p>${contact.phone}</p>
            `;
            contactsContainer.appendChild(contactCard);
        });
    })
    .catch(error => console.error('Error:', error));
});
```