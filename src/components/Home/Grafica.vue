<template>
  <v-container fluid>
    <v-card>
      <TituloVCard titulo="Gráfica" body="Estadísticas de tus datos"/>
      <v-card-actions>
        <v-spacer/>
        <v-btn icon @click="show = !show">
          <v-icon>
            {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-responsive v-show="show">
          <canvas id="myChart" width="400" height="400"/>
        </v-responsive>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
import Chart from "chart.js";
import TituloVCard from "@/components/partials/titulo-v-card.vue";

export default {
  components: { TituloVCard },
  data: () => {
    return {
      show: false
    };

},
  mounted() {
    const ctx = document.getElementById("myChart");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo"
        ],
        datasets: [
          {
            label: "Total entradas al parqueo",
            data: [12, 10, 3, 5, 2, 3, 9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: true
      }
    });
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
