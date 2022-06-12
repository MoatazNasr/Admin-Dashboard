import React from "react";
import styled from "styled-components";
import {
  Div,
  Title,
  List,
  ListItem,
  Img,
} from "../components/GlobalStyles";
import { productData } from "../dummyData";
import Chart from "../components/Chart";
import InputLabel from "../components/Input&Label";

const DivC0 = styled(Div)`
  display: flex;
  gap: 2rem;
  box-shadow: none;
`;
const DivC1 = styled(Div)`
  flex: 1;
`;
const DivC2 = styled(Div)`
  flex: 2;
  box-shadow: none;
  position: relative;
  height: auto;
  & button {
    position: absolute;
  padding: 0.5rem 3rem !important;
  right: 1rem;
  bottom: 0rem;
  }
`;
const TitleC = styled(Title)`
  font-size: 1rem;
  color: black;
`;
const Section = styled.section`
  flex: 4;
`;
const ListC = styled(List)`
  display: block;
`;
const ListItemC = styled(ListItem)`
  & img {
    margin-right: 0.5rem;
  }
`;
const ImgC = styled(Img)`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 2rem;
`;
const Form = styled.form`
  display: flex;
  & label {
    display: block;
    margin: 0.5rem 0;
    font-weight: 700;
  }
  & select {
    padding: 0.5rem;
    border-radius:1rem;
  }
`;
const Product = () => {
  return (
    <Section>
      <DivC0>
        <DivC1>
          <Title>Product Details</Title>
          <ListC>
            <ListItemC>
              <Img src="/61Q3vAe5LuL._AC_UX385_.jpg" />
            </ListItemC>
            <ListItemC>
              <TitleC>ID</TitleC> :123
            </ListItemC>
            <ListItemC>
              <TitleC>Sales</TitleC>:13
            </ListItemC>
            <ListItemC>
              <TitleC>Stock</TitleC>:5
            </ListItemC>
            <ListItemC>
              <TitleC>Active</TitleC>:Yes
            </ListItemC>
          </ListC>
        </DivC1>
        <DivC2>
          <Chart
            title="Pinky Sweater"
            data={productData}
            dataKey={Object.keys(productData[0])[1]}
          />
        </DivC2>
      </DivC0>
      <DivC1>
        <Title>Edit</Title>
        <Form>
          <DivC2>
            <InputLabel
              type="text"
              id="productname"
              name="Productname"
              labelFor="productname"
              labelText="Product Name"
            />
            <label htmlFor="stock">In Stock</label>
            <select name="stock" id="stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </DivC2>
          <DivC2>
            <ImgC src="/61Q3vAe5LuL._AC_UX385_.jpg" />

            {/* <input type='file' id="image"/> */}
            <button className="nav-link-button" type="submit">
              Update
            </button>
          </DivC2>
        </Form>
      </DivC1>
    </Section>
  );
};

export default Product;
