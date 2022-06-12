import React from "react";
import styled from "styled-components";
import InputLabel from "../components/Input&Label";
import { Title } from "../components/GlobalStyles";

const Section = styled.section`
  flex: 4;
`;
const Form = styled.form`
  & label {
    display: block;
    margin: 1rem 0;
    font-weight: 700;
  }
  & select {
    padding: 0.5rem;
    border-radius: 1rem;
  }
  & button {
    margin: 1rem 0;
    padding: 0.5rem 2.5rem;
    cursor: pointer;
  }
`;
const TitleC = styled(Title)`
  font-size: 2rem;
  margin: auto 0;
`;
const NewProduct = () => {
  return (
    <Section>
      <TitleC>New Product</TitleC>
      <Form>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" />
        <InputLabel
          type="text"
          id="productname"
          name="Productname"
          labelFor="productname"
          labelText="Product Name"
        />
        <InputLabel
          type="text"
          id="stock"
          name="stock"
          labelFor="stock"
          labelText="In Stock"
        />

        <label htmlFor="active">Active</label>
        <select name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button type="submit" className="nav-link-button">
          Create
        </button>
      </Form>
    </Section>
  );
};

export default NewProduct;
