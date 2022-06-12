import React from "react";
import styled from "styled-components";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import Badge from "@mui/material/Badge";

import { ListItem, List, Img, Title } from "./GlobalStyles";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 2;
  margin-bottom: 1rem;
`;

const Logo = styled(Title)`
  font-size: 1.8rem;
`;

const Topbar = () => {
  return (
    <Header>
      <Logo>Welcome Admin Name</Logo>
      <List>
        <ListItem setHover="true">
          <Badge
            badgeContent={1}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#5c548A",
                color: "white",
              },
            }}
          >
            <NotificationsOutlinedIcon />
          </Badge>
        </ListItem>
        <ListItem setHover="true">
          <Badge
            badgeContent={1}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#5c548A",
                color: "white",
              },
            }}
          >
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
        </ListItem>
        <ListItem setHover="true">
          <SettingsOutlinedIcon />
        </ListItem>
        <ListItem>
          <Img src="/pexels-eyup-beyhan-7919753.jpg" />
        </ListItem>
      </List>
    </Header>
  );
};

export default Topbar;
