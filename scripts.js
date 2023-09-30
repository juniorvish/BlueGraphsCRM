```javascript
// Importing necessary modules
import { barChart } from './graphs/barChart.js';
import { pieChart } from './graphs/pieChart.js';
import { invoicesTable } from './tables/invoicesTable.js';
import { agedPayables } from './tables/agedPayables.js';
import { totalRevenue } from './tables/totalRevenue.js';
import { pnlPastSixMonths } from './tables/pnlPastSixMonths.js';
import { incomeSources } from './tables/incomeSources.js';
import { home } from './sidebar/home.js';
import { contacts } from './sidebar/contacts.js';
import { customers } from './sidebar/customers.js';
import { accounts } from './sidebar/accounts.js';

// Fetching data and rendering components
async function fetchDataAndRenderComponents() {
  const invoicesTableData = await fetchInvoicesTableData();
  invoicesTable.render(invoicesTableData);

  const barChartData = await fetchBarChartData();
  barChart.render(barChartData);

  const pieChartData = await fetchPieChartData();
  pieChart.render(pieChartData);

  const agedPayablesData = await fetchAgedPayablesData();
  agedPayables.render(agedPayablesData);

  const totalRevenueData = await fetchTotalRevenueData();
  totalRevenue.render(totalRevenueData);

  const pnlPastSixMonthsData = await fetchPnlPastSixMonthsData();
  pnlPastSixMonths.render(pnlPastSixMonthsData);

  const incomeSourcesData = await fetchIncomeSourcesData();
  incomeSources.render(incomeSourcesData);
}

// Event listeners for sidebar buttons
document.getElementById('homeButton').addEventListener('click', home.render);
document.getElementById('contactsButton').addEventListener('click', contacts.render);
document.getElementById('customersButton').addEventListener('click', customers.render);
document.getElementById('accountsButton').addEventListener('click', accounts.render);

// Initial data fetch and render
fetchDataAndRenderComponents();
```