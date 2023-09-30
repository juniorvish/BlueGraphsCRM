```javascript
document.getElementById('customersButton').addEventListener('click', function() {
    fetch('/BlueGraphsCRM/tables/incomeSources.js')
    .then(response => response.json())
    .then(data => {
        let customersContainer = document.getElementById('incomeSourcesContainer');
        customersContainer.innerHTML = '';
        data.forEach(customer => {
            let customerDiv = document.createElement('div');
            customerDiv.classList.add('customer');
            customerDiv.innerHTML = `
                <h2 class="text-blue-500">${customer.name}</h2>
                <p>${customer.address}</p>
                <p>${customer.contact}</p>
            `;
            customersContainer.appendChild(customerDiv);
        });
    })
    .catch(error => console.error('Error:', error));
});
```