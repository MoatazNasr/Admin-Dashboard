import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import { usersData } from "../dummyData.js";
import SmWidget from "../components/SmWidget";
import LgWidget from "../components/LgWidget";
import InfoWidget from "../components/InfoWidget";
const Section = styled.section`
  flex: 4;
`;
const Div = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;
const Home = () => {
  return (
    <Section>
    <InfoWidget/>
      <Chart data={usersData} title="Site Traffic" dataKey={Object.keys(usersData[0])[1]}/>
      <Div>
        <SmWidget />
        <LgWidget />
      </Div>
    </Section>
  );
};

export default Home;
