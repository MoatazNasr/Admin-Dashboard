import React from "react";
import styled from "styled-components";
import { ListItem, List, Img, Title, Div } from "./GlobalStyles";
const DivC = styled(Div)`
  flex: 2;
`;
const TitleC = styled(Title)`
  color: black;
  font-size: 1.1rem;
  margin: 0;
`;
const ListItemC = styled(ListItem)`
  flex: 1;
  padding: 0.5rem 1.5rem;
  &:nth-of-type(1) {
    flex: 2;
  }
 & span {
   padding: 0.75rem;
   border-radius:inherit;
 }
`;
const UserName = styled(Title)`
  font-size: 1rem;
  color: black;
`;
const LgWidget = () => {
  return (
    <DivC>
      <Title>Latest Orders</Title>
      <List>
        <ListItemC>
          <TitleC>Customer</TitleC>
        </ListItemC>
        <ListItemC>
          <TitleC>Date</TitleC>
        </ListItemC>
        <ListItemC>
          <TitleC>Amount</TitleC>
        </ListItemC>
        <ListItemC>
          <TitleC>Status</TitleC>
        </ListItemC>
      </List>
      <List>
        <ListItemC>
          <Img src="/pexels-eyup-beyhan-7919753.jpg" />
          <UserName>User Name</UserName>
        </ListItemC>
        <ListItemC>2 jun 2022</ListItemC>
        <ListItemC>$120.00</ListItemC>
        <ListItemC ><span className="approved">Approved</span></ListItemC>
      </List>
      <List>
        <ListItemC>
          <Img src="/pexels-eyup-beyhan-7919753.jpg" />
          <UserName>User Name</UserName>
        </ListItemC>
        <ListItemC>2 jun 2022</ListItemC>
        <ListItemC>$120.00</ListItemC>
        <ListItemC><span className="declined">Declined</span></ListItemC>
      </List>
      <List>
        <ListItemC>
          <Img src="/pexels-eyup-beyhan-7919753.jpg" />
          <UserName>User Name</UserName>
        </ListItemC>
        <ListItemC>2 jun 2022</ListItemC>
        <ListItemC>$120.00</ListItemC>
        <ListItemC ><span className="pending">Pending</span></ListItemC>
      </List>
    </DivC>
  );
};

export default LgWidget;
