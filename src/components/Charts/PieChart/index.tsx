'use client';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface dataProgress {
  title: string;
  value: string;
  colorBar: string;
  colorText: string;
  height: number;
}

const PieChart = (props: dataProgress) => {
  const options = {
    chart: {
      type: 'pie',
      height: props.height,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      plotBackgroundColor: 'rgba(255, 255, 255, 0)',
      borderWidth: 0,
      plotShadow: false,
      plotBorderWidth: 0,
    },
    accessibility: {
      enabled: false,
    },
    title: {
      text: '',
    },
    subtitle: {
      text: `<div style='font-size: 25px; font-weight: bold; color: ${props.colorText}'>${props.value.replace('.', ',')}%</div> <span style='font-size: 15px; font-weight: bold;'>${props.title}</span>`,
      align: 'center',
      verticalAlign: 'middle',
      style: {
        textAlign: 'center',
      },
      x: 0,
      y: 8,
      useHTML: true,
    },
    series: [
      {
        enableMouseTracking: false,
        innerSize: '80%',
        dataLabels: {
          enabled: false,
        },
        data: [
          {
            y: parseFloat(props.value),
            color: props.colorBar,
          },
          {
            y: 100 - parseFloat(props.value),
            color: '#ddd',
          },
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: props.height,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5,
              },
              title: {
                text: null,
              },
            },
            subtitle: {
              text: `<div style='font-size: 12px;font-weight: bold; color: ${props.colorText}'>${props.value.replace('.', ',')}%</div> <span style='font-size: 10px; font-weight: bold;'>${props.title}</span>`,
            },
            credits: {
              enabled: false,
            },
          },
        },
      ],
    },
  };
  return (
    <div className="flex-1 bg-white rounded-b-md p-3">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
