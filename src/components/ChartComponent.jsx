// src/ChartComponent.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ minWidth: 600, height: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Line Chart
          </Typography>
          <Line data={data} options={options} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChartComponent;
