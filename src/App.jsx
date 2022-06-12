import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import Product from './pages/Product';
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
const Main = styled.main`
  display: flex;
  gap: 2rem;
  width: 98%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Topbar />
        <Main>
          <Sidebar />
          <Routes>
          <Route exact path='/' element={  <Home />}/>
          <Route  path='/users' element={  <UserList />}/>
          <Route  path='/user' element={  <User />}/>
          <Route  path='/product' element={  <Product />}/>
          <Route  path='/newproduct' element={  <NewProduct />}/>
          <Route  path='/products' element={  <ProductList />}/>

          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
