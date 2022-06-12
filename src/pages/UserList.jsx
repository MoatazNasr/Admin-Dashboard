import React from "react";
import Table from "../components/Table";
import styled from "styled-components";
import { columns, rows } from "../dummyData";
import { Title } from "../components/GlobalStyles";
const Section = styled.section`
  flex: 4;
`;
const TitleC = styled(Title)`
  font-size: 2rem;
  margin: auto 0;
`;
const UserList = () => {
  return (
    <Section>
      <TitleC>Users</TitleC>
      <Table rows={rows} columns={columns} />
    </Section>
  );
};

export default UserList;
