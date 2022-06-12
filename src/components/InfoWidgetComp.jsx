import React from "react";
import styled from "styled-components";
import { List, ListItem, Div } from "./GlobalStyles";

const ListItemC = styled(ListItem)`
  justify-content: space-between;
  align-items: center;
  padding:0.8rem 2rem;
  &:nth-of-type(3){
    color:rgba(0,0,0,0.4);
    justify-content:center;
  }
`;
const ListC = styled(List)`
  display: block;
`;
const Widget = styled(Div)`
  background:${props => props.color};
  color: white;
  font-size: 1.1rem;
  box-shadow:0 0 0.5rem 1px ${props => props.color};
  margin: 0 1rem;
`;

const InfoWidgetComp = ({
  color,
  icon1,
  icon2,
  number,
  text,
  percentage,
}) => {
  return (
    <Widget color={color}>
      <ListC>
        <ListItemC>
          <span>{number}</span> <span>{icon1}</span>
        </ListItemC>
        <ListItemC>
          {text}{" "}
          <span>
            {percentage}% {icon2}
          </span>
        </ListItemC>
        <ListItemC>
         Compared To Last Month
        </ListItemC>
      </ListC>
    </Widget>
  );
};

export default InfoWidgetComp;
