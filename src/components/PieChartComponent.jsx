import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartComponent = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 150 },
    { name: 'Group F', value: 100 },
    { name: 'Group G', value: 75 }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: 400, height: 500 }}> {/* Ensure the height is defined here */}
      <Card sx={{ width: '100%', height: '100%', boxShadow: 'none' }}>
        <CardContent sx={{ height: '150%' }}> {/* Ensure the height is defined here */}
          <Box sx={{ width: '100%', height: '100%', boxShadow: 'none', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}>
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
                  cx: 200,
                  cy: 200,
                }
              ]}
              sx={{ height: '150%' }} // Ensure the height is defined here
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PieChartComponent;
