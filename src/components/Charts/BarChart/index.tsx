'use client';
import React, { Fragment, useRef } from 'react';
import Highcharts from 'highcharts';
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official';
// if (typeof Highcharts === 'object') {
//     HighchartsExporting(Highcharts)
// }

interface EvolucaoProps {
  grafico: any;
  altura: number;
  props?: HighchartsReact.Props;
}

const ChartEvolucao = ({ grafico, altura, props }: EvolucaoProps) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const diasemana = grafico.map((item: any) => item.DiaSemana);
  const venda = grafico.map((item: any) => parseFloat(item.Venda));
  const meta = grafico.map((item: any) => parseInt(item.Meta));

  const options = {
    chart: {
      // marginLeft: 80,
      // marginRight: 35,
      // marginTop: 0,
      height: altura,
    },
    title: {
      text: '',
    },
    xAxis: [
      {
        categories: diasemana,
        crosshair: true,
      },
    ],

    yAxis: [
      {
        title: {
          text: '',
        },
        labels: {
          format: '{value}',
        },
      },
      {
        title: {
          enabled: false,
        },
        labels: {
          enabled: false,
        },
      },
    ],
    tooltip: {
      noTooltip: true,
      valuePrefix: 'R$ ',
      valueDecimals: 2,
      shared: true,
    },

    series: [
      {
        type: 'column',
        // yAxis: 1,
        name: 'Dia da Semana',
        data: venda,
        color: '#009DE0',
        dataLabels: {
          enabled: true,
          valueDecimals: 2,
        },
      },
      {
        type: 'spline',
        name: 'Meta',
        data: meta,
        color: '#A7C414',
        dataLabels: {
          enabled: false,
          format: 'R$ {point.y:.2f}',
        },
      },
    ],
    exporting: {
      enabled: false,
    },
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};

export default ChartEvolucao;
