import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChart = ({ genreRatio }) => {
  const chartRef = useRef();

  const data = {
    labels: Object.keys(genreRatio),
    datasets: [
      {
        label: '장르 비율',
        data: Object.values(genreRatio),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        borderColor: 'transparent', // 테두리 색상 제거
        borderWidth: 0, // 테두리 두께 제거
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'GowunDodum', // 원하는 글씨체 지정
            size: 14, // 글씨 크기
            weight: 'bold', // 글씨 두께
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return (
              <span className="bmjuaclass">{`${label}: ${value.toFixed(2)}`}</span>
            ); // BMJUA 클래스 적용
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // 각 조각의 테두리 두께 제거
      },
    },
  };

  useEffect(() => {
    // 이전 차트 인스턴스가 존재할 때만 파괴
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy(); // 기존 차트 인스턴스 파괴
      }
    }
  }, [genreRatio]);

  return <Pie ref={chartRef} data={data} options={options} />;
};

export default PieChart;
