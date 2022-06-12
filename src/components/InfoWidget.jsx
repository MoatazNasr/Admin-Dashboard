import React from "react";
import InfoWidgetComp from "./InfoWidgetComp";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin:1rem;
`;
const InfoWidget = () => {
  return (
    <Div>
      <InfoWidgetComp
      color='#9b87bc'
        number={1500}
        text="Total Orders"
        percentage='+4.2'
        icon1={<ShoppingCartOutlinedIcon />}
        icon2={<NorthOutlinedIcon fontSize="sm" />}
      />
      <InfoWidgetComp
      color='#b897c1'
        number={2000}
        text="Total Revenue"
        percentage='+6.2'
        icon1={<AttachMoneyOutlinedIcon />}
        icon2={<NorthOutlinedIcon fontSize="sm" />}
      />
      <InfoWidgetComp
      color='#d9b3ca'
        number={120}
        text="Total Messages"
        percentage='-0.2'
        icon1={<ChatBubbleOutlineOutlinedIcon />}
        icon2={<SouthOutlinedIcon fontSize="sm" />}
      />
    </Div>
  );
};

export default InfoWidget;
