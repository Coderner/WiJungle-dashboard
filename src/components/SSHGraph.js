import React from 'react';
import { Box } from '@mui/material';
import { PieChart, Pie, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const SSHGraph = ({ title, type, data }) => {

  const renderGraph = () => {
    switch (type) {
      case 'attacksFreq':
        return (
            <LineChart width={900} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="minute" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="attacks" stroke="#8884d8" />
            </LineChart>
        );
      case 'protocols':
        return (
            <PieChart width={730} height={300}>
             <Tooltip />
             <Pie data={data} dataKey="count" nameKey="proto" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label/>
            </PieChart>
        );
      case 'category':
        return (
            <BarChart width={1200} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        );
      default:
        return null;
    }
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" alignItems="center" padding="1rem">
      <h3>{title}</h3>
      {renderGraph()}
    </Box>
  );
};

export default SSHGraph;
