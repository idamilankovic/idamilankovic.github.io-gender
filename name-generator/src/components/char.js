import React from 'react';
import { Bar }  from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

function Char(props) {
   console.log(props.list)
 
    const barChartData = {
        labels: props.list.map((person) => person.name),
        datasets: [
            {
                data: props.list.map((probability) => probability.male_probability),
                label:"Male",
                borderColor: "#3333ff",
                lineTension: 0.5
            },
            {
                data: props.list.map((probability) => probability.female_probability),
                label:"Female",
                borderColor: "#ff3333",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                lineTension: 0.5
            }
        ]
    };

  return (
        <Bar
        type='bar'
        width={300}
        height={50}
        options={{
            title: {
                display: true,
                text: "Female and male name probability",
                fontsize: 20,
            },
            legend: {
                display: true,
                position: "bottom"
            }
        }} 
        data={barChartData}
        />
  ); 

}

export default Char;