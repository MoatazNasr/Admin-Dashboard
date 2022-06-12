import React from "react";
import styled from "styled-components";
import { List, ListItem, Title, Button } from "./GlobalStyles";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MenuIcon from "@mui/icons-material/Menu";
const ListC = styled(List)`
  flex-direction: column;
  & > p {
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Section = styled.section`
  position: relative;
  background: #211940;
  border-radius: 1rem;
  flex: 1;
  height: max-content;
  color: white;
  box-shadow: 0 0 0.5rem 1px #211940;
`;
const TitleC = styled(Title)`
  font-size: 1rem;
  font-weight: normal;
  margin: 0.57rem;
  color: white;
`;
const ListItemC = styled(ListItem)`
  padding-left: 2rem;
`;

const Sidebar = () => {
  return (
    <Section>
      {/* <Button>
        <MenuIcon fontSize="large" />
      </Button> */}
      <ListC>
        <Title>Dashboard</Title>
        <ListItemC setHover="true">
          <LineStyleOutlinedIcon /> <TitleC>Home</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <AnalyticsOutlinedIcon /> <TitleC>Analytics</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <TrendingUpOutlinedIcon />
          <TitleC>Sales</TitleC>
        </ListItemC>
      </ListC>
      <ListC>
        <Title>Quick Menu</Title>
        <ListItemC setHover="true">
          <PermIdentityOutlinedIcon /> <TitleC>Users</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <StorefrontOutlinedIcon /> <TitleC>Products</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <AttachMoneyOutlinedIcon />
          <TitleC>Transactions</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <BarChartOutlinedIcon />
          <TitleC>Reports</TitleC>
        </ListItemC>
      </ListC>
      <ListC>
        <Title>Notifications</Title>
        <ListItemC setHover="true">
          <EmailOutlinedIcon /> <TitleC>Mail</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <DynamicFeedOutlinedIcon /> <TitleC>Feedback</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <ChatBubbleOutlineOutlinedIcon />
          <TitleC>Messages</TitleC>
        </ListItemC>
      </ListC>
      <ListC>
        <Title>Staff</Title>
        <ListItemC setHover="true">
          <WorkOutlineOutlinedIcon /> <TitleC>Manage</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <TimelineOutlinedIcon /> <TitleC>Statistics</TitleC>
        </ListItemC>
        <ListItemC setHover="true">
          <ReportOutlinedIcon />
          <TitleC>Reports</TitleC>
        </ListItemC>
      </ListC>
    </Section>
  );
};

export default Sidebar;
