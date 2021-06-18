<template>
  <h1 class="title is-4">Income summary</h1>
  <div class="chart-controller">
    <div class="field">
      <div class="control">
        <div class="select">
          <select>
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <div class="select">
          <select>
            <option>Toyota Vios</option>
            <option>Mazda 3</option>
            <option>Mazda CX-5</option>
            <option>Honda Accord</option>
            <option>Hyundai Accent</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <v-chart class="chart" v-bind="barChart"></v-chart>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  components: {
    'v-chart': Vue3ChartJs
  },
  data() {
    return {
      barChart: {
        type: 'bar',
        options: {
          // min: 0,
          // max: 100,
          responsive: true,
          plugins: {
            legend: {
              // position: 'top'
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  let nghin = value/1000;
                  let tram = value % 1000;
                  if (tram === 0) {
                    tram = '000'
                  }
                  return `${nghin}.${tram} VND`;
                }
              }
            }
          }
        },
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'April',
            'May',
            'Jun',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          datasets: [
            {
              label: 'In come for Toyoya Vios',
              // backgroundColor: ['#1abc9c', '#f1c40f', '#2980b9', '#34495e'],
              backgroundColor: '#1abc9c',
              data: [
                40000,
                20000,
                50000,
                10000,
                120000,
                30000,
                5000,
                6000,
                8000,
                3000,
                10000,
                500
              ]
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped>
.chart-controller {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* max-width: 30rem; */
  /* margin: auto */
}
.chart {
  max-height: 30rem;
}
.select {
  margin: 0.5rem;
}
</style>
