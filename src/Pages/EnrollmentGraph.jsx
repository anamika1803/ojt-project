import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'bar',
        height: 250,
        width: '70%' // Set width to 50%
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      }
    }
  });

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch('http://localhost:3000/enrolledCourses');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const categories = data.courseCounts.map(course => course._id);
      const counts = data.courseCounts.map(course => course.count);
      setChartData({
        series: [{ name: 'Enrolled Students', data: counts }],
        options: {
          ...chartData.options,
          xaxis: { categories },
          yaxis: {
            ...chartData.options.yaxis,
            title: {
              text: 'Number of Students'
            }
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id="chart" style={{ width: '50%' }}>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;
