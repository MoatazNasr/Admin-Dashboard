import React from "react";
import styled from "styled-components";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { ListItem, List, Img, Title, Div } from "./GlobalStyles";
import AnchorLink from "./AnchorLink";
const DivC = styled(Div)`
  flex: 1;
`;
const TitleC = styled(Title)`
  color: black;
  font-size: 1rem;
`;
const ListItemC = styled(ListItem)`
  margin: 0 auto;
  padding: 0.4rem;
`;
const SmWidget = () => {
  return (
    <DivC>
      <Title>New Users</Title>
      <List>
        <ListItemC>
          <Img src="/pexels-eyup-beyhan-7919753.jpg" />
        </ListItemC>
        <ListItemC>
          <TitleC>User Name</TitleC>
        </ListItemC>
        <ListItemC >
          <AnchorLink
            linkTo="/"
            children={<> <VisibilityOutlinedIcon /> <span>Display</span></>}
          />
        </ListItemC>
      </List>
      <List>
        <ListItemC>
          <Img src="/pexels-eyup-beyhan-7919753.jpg" />
        </ListItemC>
        <ListItemC>
          <TitleC>User Name</TitleC>
        </ListItemC>
        <ListItemC >
          <AnchorLink
            linkTo="/"
            children={<><VisibilityOutlinedIcon /><span>Display</span> </>}
          />
        </ListItemC>
      </List>
      

    </DivC>
  );
};

export default SmWidget;
