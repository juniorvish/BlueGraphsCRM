```javascript
import { barChartSchema } from '../schemas.js';

const barChartContainer = document.getElementById('barChartContainer');

async function fetchBarChartData() {
    const response = await fetch('/api/barChartData');
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

function loadBarChart() {
    fetchBarChartData()
        .then(data => {
            const barChart = new Chart(barChartContainer, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: barChartSchema.label,
                        data: data.values,
                        backgroundColor: barChartSchema.backgroundColor,
                        borderColor: barChartSchema.borderColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

loadBarChart();
```