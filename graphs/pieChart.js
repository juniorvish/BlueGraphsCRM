```javascript
import { pie } from 'd3';

const fetchPieChartData = async () => {
  const response = await fetch('/api/pieChartData');
  const data = await response.json();
  return data;
};

const drawPieChart = async () => {
  const data = await fetchPieChartData();
  const pieChart = pie();

  data.forEach((d) => {
    pieChart.value(d.value);
  });

  const pieChartContainer = document.getElementById('pieChartContainer');
  pieChartContainer.innerHTML = pieChart(data);
};

document.addEventListener('loadPieChart', drawPieChart);
```