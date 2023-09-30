```javascript
import { agedPayables } from '../shared/data.js';

export function fetchAgedPayablesData() {
    fetch('https://api.example.com/agedPayables')
        .then(response => response.json())
        .then(data => {
            agedPayables = data;
            loadAgedPayables();
        })
        .catch(error => console.error('Error:', error));
}

export function loadAgedPayables() {
    const agedPayablesContainer = document.getElementById('agedPayablesContainer');
    agedPayablesContainer.innerHTML = '';

    agedPayables.forEach(payable => {
        const row = document.createElement('tr');

        const invoiceNumberCell = document.createElement('td');
        invoiceNumberCell.textContent = payable.invoiceNumber;
        row.appendChild(invoiceNumberCell);

        const dueDateCell = document.createElement('td');
        dueDateCell.textContent = payable.dueDate;
        row.appendChild(dueDateCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = payable.amount;
        row.appendChild(amountCell);

        agedPayablesContainer.appendChild(row);
    });
}
```