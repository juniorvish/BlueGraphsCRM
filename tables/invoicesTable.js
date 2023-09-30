```javascript
import axios from 'axios';

let invoicesTableSchema = {
    invoiceId: '',
    customerId: '',
    amount: '',
    dueDate: '',
    status: ''
};

let invoicesTableData = [];

async function fetchInvoicesTableData() {
    try {
        const response = await axios.get('https://api.example.com/invoices');
        invoicesTableData = response.data;
        loadInvoicesTable();
    } catch (error) {
        console.error(error);
    }
}

function loadInvoicesTable() {
    const invoicesTableContainer = document.getElementById('invoicesTableContainer');
    invoicesTableContainer.innerHTML = '';

    invoicesTableData.forEach(invoice => {
        let row = document.createElement('tr');

        for (let key in invoicesTableSchema) {
            let cell = document.createElement('td');
            cell.textContent = invoice[key];
            row.appendChild(cell);
        }

        invoicesTableContainer.appendChild(row);
    });
}

fetchInvoicesTableData();
```