```javascript
import axios from 'axios';

let totalRevenueContainer = document.getElementById('totalRevenueContainer');

async function fetchTotalRevenueData() {
    try {
        const response = await axios.get('https://api.example.com/totalRevenue');
        if (response.status === 200) {
            totalRevenue = response.data;
            loadTotalRevenue();
        } else {
            console.error('Error fetching total revenue data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error fetching total revenue data:', error);
    }
}

function loadTotalRevenue() {
    totalRevenueContainer.innerHTML = '';
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let headers = Object.keys(totalRevenue[0]);
    let headerRow = document.createElement('tr');
    headers.forEach(header => {
        let th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    totalRevenue.forEach(rowData => {
        let row = document.createElement('tr');
        headers.forEach(header => {
            let td = document.createElement('td');
            td.textContent = rowData[header];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    totalRevenueContainer.appendChild(table);
}

fetchTotalRevenueData();
```