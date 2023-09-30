```javascript
import axios from 'axios';

let incomeSources = [];

const incomeSourcesContainer = document.getElementById('incomeSourcesContainer');

const fetchIncomeSourcesData = async () => {
    try {
        const response = await axios.get('https://api.example.com/incomeSources');
        incomeSources = response.data;
        renderIncomeSourcesTable();
    } catch (error) {
        console.error(`Error fetching income sources data: ${error}`);
    }
};

const renderIncomeSourcesTable = () => {
    let tableHTML = '<table class="table-auto w-full"><thead><tr><th class="px-4 py-2">Source</th><th class="px-4 py-2">Amount</th></tr></thead><tbody>';

    incomeSources.forEach(source => {
        tableHTML += `<tr><td class="border px-4 py-2">${source.name}</td><td class="border px-4 py-2">${source.amount}</td></tr>`;
    });

    tableHTML += '</tbody></table>';

    incomeSourcesContainer.innerHTML = tableHTML;
};

fetchIncomeSourcesData();
```