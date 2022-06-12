import React from "react";
import Table from "../components/Table";
import styled from "styled-components";
import AnchorLink from "../components/AnchorLink";
import { productColumns, productRows } from "../dummyData";
import { Title } from "../components/GlobalStyles";

const Section = styled.section`
  flex: 4;
  position: relative;
  & > a {
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    padding: 0.5rem 3rem;
  }
`;
const TitleC = styled(Title)`
  font-size: 2rem;
  margin: auto 0;
`;
const ProductList = () => {
  return (
    <Section>
      <TitleC>Products</TitleC>
      <AnchorLink children="New Product" linkTo="/newproduct" />
      <Table rows={productRows} columns={productColumns} />
    </Section>
  );
};

export default ProductList;
