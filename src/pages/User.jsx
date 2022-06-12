import React, { useState } from "react";
import styled from "styled-components";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import GpsNotFixedOutlinedIcon from "@mui/icons-material/GpsNotFixedOutlined";
import {
  Div,
  Title,
  List,
  ListItem,
  Img,
  Button,
} from "../components/GlobalStyles";
import InputLabel from "../components/Input&Label";
const DivC1 = styled(Div)`
  flex: 1;
`;
const DivC2 = styled(Div)`
  flex: 2;
`;
const TitleC = styled(Title)`
  font-size: 1rem;
  color: black;
`;
const Section = styled.section`
  flex: 4;
  display: flex;
  gap: 2rem;
`;
const ListC = styled(List)`
  display: block;
`;
const ListItemC = styled(ListItem)`
  & img {
    margin-right: 0.5rem;
  }
  padding: 0.5rem;
`;

const Form = styled.form`
  position: relative;
  & button {
    position: absolute;
    padding: 0.5rem 3rem;
    right: 1rem;
    bottom: 1rem;
  }
`;
const User = () => {
  const [img, setImg] = useState(0);

  const onChangeImg = (e) => {};
  console.log(img);
  return (
    <Section>
      <DivC1>
        <Title>User Details</Title>
        <ListC>
          <ListItemC>
            <Img src="/pexels-eyup-beyhan-7919753.jpg" />
          </ListItemC>
          <ListItemC>
            <PermIdentityOutlinedIcon />
            <TitleC>Username</TitleC>
          </ListItemC>
          <ListItemC>
            <EmailOutlinedIcon /> <TitleC>Email</TitleC>
          </ListItemC>
          <ListItemC>
            <GpsNotFixedOutlinedIcon />
            <TitleC>Address</TitleC>
          </ListItemC>
        </ListC>
      </DivC1>
      <DivC2>
        <Title>Edit</Title>
        <Form>
          <InputLabel
            type="text"
            id="username"
            name="Username"
            labelFor="username"
            labelText="Username"
          />
          <InputLabel
            type="text"
            id="email"
            name="Email"
            labelFor="email"
            labelText="Email"
          />
          <InputLabel
            type="text"
            id="address"
            name="Address"
            labelFor="address"
            labelText="Address"
          />
          <Img src={img ? `${img}` : "/pexels-eyup-beyhan-7919753.jpg"} />
          <input type="file" id="image" onChange={onChangeImg} />
          <button className="nav-link-button" type="submit">
            Update
          </button>
        </Form>
      </DivC2>
    </Section>
  );
};

export default User;
