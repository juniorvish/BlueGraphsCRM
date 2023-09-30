```javascript
import { fetchPnlPastSixMonthsData } from '../scripts.js';

let pnlPastSixMonths = [];

const pnlPastSixMonthsContainer = document.getElementById('pnlPastSixMonthsContainer');

const loadPnlPastSixMonths = async () => {
    pnlPastSixMonths = await fetchPnlPastSixMonthsData();
    renderPnlPastSixMonths();
}

const renderPnlPastSixMonths = () => {
    let html = '';
    pnlPastSixMonths.forEach((month) => {
        html += `
            <tr>
                <td>${month.date}</td>
                <td>${month.revenue}</td>
                <td>${month.expenses}</td>
                <td>${month.netIncome}</td>
            </tr>
        `;
    });
    pnlPastSixMonthsContainer.innerHTML = html;
}

loadPnlPastSixMonths();
```