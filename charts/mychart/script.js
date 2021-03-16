$(document).ready(function(){
    let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var data_array = [7,6,5,6,4,6];
    var data_week = [20,18,16,14,12,10];
    var data_month = [49,45,40,35,30,25];
    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['city 1', 'city 2', 'city 3', 'city 4', 'city 5', 'city 7'],
        datasets:[{
          label:'Energy rate',
          data:data_array,
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          //hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Worst energy rate locations',
          fontSize:25
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  max: Math.max.apply(this, data_array)+1
              },
          }],
          xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 1.0
        }]
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    function updateForClick(btn){
      if(btn==='today'){
        massPopChart.data.datasets[0].data = data_array;
        //massPopChart.scales.yAxes[0];
      }
      else if(btn==='week')
        massPopChart.data.datasets[0].data = data_week;
      else if(btn==='month'){
        massPopChart.data.datasets[0].data = data_month;
      }
      var size = barSize(btn);
      massPopChart.options.scales.yAxes[0].ticks.max = size;
      massPopChart.update();
    }
    var btn = $(".bt").on("click",function(){
      //console.log(massPopChart.scales.yAxes)
      var btnId = $(this).attr('data-btnId');
      var a = $('button');
      a.filter('.active').removeClass('active');
      $(this).addClass('active');
      //console.log(btnId);
      updateForClick(btnId);
   })
   function startBarSize(data){
     return Math.max.apply(Math,data);
   }
   function barSize(btn){
     var size = 0;
     if (btn==="today") {
       size = 12;
     }
     else if (btn==="week") {
       size = 25;
     }
     else if(btn==='month')
      size = 50;
     return size;
   }
  });