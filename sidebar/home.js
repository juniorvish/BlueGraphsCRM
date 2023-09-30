```javascript
document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById('barChartContainer').style.display = 'block';
    document.getElementById('pieChartContainer').style.display = 'block';
    document.getElementById('invoicesTableContainer').style.display = 'block';
    document.getElementById('agedPayablesContainer').style.display = 'block';
    document.getElementById('totalRevenueContainer').style.display = 'block';
    document.getElementById('pnlPastSixMonthsContainer').style.display = 'block';
    document.getElementById('incomeSourcesContainer').style.display = 'block';

    fetchBarChartData();
    fetchPieChartData();
    fetchInvoicesTableData();
    fetchAgedPayablesData();
    fetchTotalRevenueData();
    fetchPnlPastSixMonthsData();
    fetchIncomeSourcesData();
});
```