import React from "react";
import Chart from 'react-apexcharts'
import { Box, Heading } from "@chakra-ui/react";

const SalesChart = ({ salesData }) => {

  const data ={
    series: [
      {
        name: '12 months',
        data: [10000, 15000, 8000, 12000, 18000, 20000, 17000, 19000, 32000, 45000, 50000, 48000]
      },
      {name: '',
      data :  [10000, 12000, 15000, 17000, 10000, 16000, 17000, 19000, 22000, 35000, 40000, 45000]
    }
    ],
    options: {
      chart:{
        type: 'area',
        height: 'auto'
      },
      fill:{
        colors: ['#fff'],
        type: 'gradient'
      },
      dataLabels: {
        enabled: false,
      },
      stroke:{
        curve: 'smooth',
        colors: ['#ff929f']
      },
      tooltip:{
        x: {
          format: 'dd/MM/yy'
        }
      },
      grid :{
        show: false,
      },
      xaxis:{
        type: 'string',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', "Dec"]
      },
      yaxis:{
        show: false,
      },
      toolbar: {
        show: false,
      }
    }
  }

  return (
    <Box w={'35vw'}  p={2}>
      <Heading as="h2" size="lg" mb={4}>
        Sales Report
      </Heading>
      <Chart series={data.series} options={data.options} type='area' />
    </Box>
  );
};

export default SalesChart;
