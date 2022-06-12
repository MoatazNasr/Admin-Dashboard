import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import {Title, Div} from '../components/GlobalStyles';
const DivC = styled(Div)`
  aspect-ratio:3/1;
`;

const TitleC= styled(Title)`
color:#5c548A;
padding:1rem;
`;
const Chart = ({data ,title,dataKey}) => {
  return (
    <DivC>
    <TitleC>
        {title} - 2021
    </TitleC>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5c548A"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </DivC>
  );
};

export default Chart;
