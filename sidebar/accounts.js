```javascript
document.getElementById('accountsButton').addEventListener('click', function() {
    document.getElementById('barChartContainer').style.display = 'none';
    document.getElementById('pieChartContainer').style.display = 'none';
    document.getElementById('invoicesTableContainer').style.display = 'none';
    document.getElementById('agedPayablesContainer').style.display = 'none';
    document.getElementById('totalRevenueContainer').style.display = 'none';
    document.getElementById('pnlPastSixMonthsContainer').style.display = 'none';
    document.getElementById('incomeSourcesContainer').style.display = 'none';

    fetchTotalRevenueData();
    fetchAgedPayablesData();
    fetchIncomeSourcesData();
    fetchPnlPastSixMonthsData();
});

function fetchTotalRevenueData() {
    fetch('/api/totalRevenue')
    .then(response => response.json())
    .then(data => {
        document.getElementById('totalRevenueContainer').innerHTML = data.totalRevenue;
        document.getElementById('totalRevenueContainer').style.display = 'block';
    });
}

function fetchAgedPayablesData() {
    fetch('/api/agedPayables')
    .then(response => response.json())
    .then(data => {
        document.getElementById('agedPayablesContainer').innerHTML = data.agedPayables;
        document.getElementById('agedPayablesContainer').style.display = 'block';
    });
}

function fetchIncomeSourcesData() {
    fetch('/api/incomeSources')
    .then(response => response.json())
    .then(data => {
        document.getElementById('incomeSourcesContainer').innerHTML = data.incomeSources;
        document.getElementById('incomeSourcesContainer').style.display = 'block';
    });
}

function fetchPnlPastSixMonthsData() {
    fetch('/api/pnlPastSixMonths')
    .then(response => response.json())
    .then(data => {
        document.getElementById('pnlPastSixMonthsContainer').innerHTML = data.pnlPastSixMonths;
        document.getElementById('pnlPastSixMonthsContainer').style.display = 'block';
    });
}
```