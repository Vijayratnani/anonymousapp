// src/components/ChartComponent.jsx
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const ChartComponent = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ minWidth: 600, height: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Pie Chart
          </Typography>
          <PieChart
            series={[
              {
                data: data,
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChartComponent;
