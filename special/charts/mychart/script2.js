// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Shop 1", "shop 2", "shop 3", "shop 4", "shop 5","shop 6","shop 7"],
      datasets: [
        {
          label: "Errs",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [12,10,8,6,4,2,0]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Arcon health-Locaton with the most alerts'
      },
      legend:{
        display:true,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      scales: {
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 14//10 is random number
                },
            }],
            xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 1.0
        }]
     } 
    }
});