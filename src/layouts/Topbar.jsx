import React from "react";
import styled from "styled-components";
import { primaryButtonColor } from "../consts/colors";
import { Link } from 'react-router-dom'
import { CART_PATH, HOME_PATH } from '../routes/const'
import { FaShoppingCart } from 'react-icons/fa';
import EnhancedSearchBar from "../components/SearchBar/EnhancedSearchBar";


const Topbar = () => {
  return (
    <Container>
      <NavigationItem>Categories</NavigationItem>
      <Logo as={Link} to={HOME_PATH}>E-shop</Logo>
     
      <ItemContainer>
        
        <EnhancedSearchBar/>
        <Link to={CART_PATH}>
          <FaShoppingCart />
          </Link>
      </ItemContainer>
    </Container>
  );
}

export default Topbar;

const Container = styled.div`
  margin: 0;
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid${primaryButtonColor};
  background-color: white;
`

const NavigationItem = styled.div`
  font-weight: 400;
  font-size: 19px;
`

const Logo = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: inherit;
  text-decoration: none;
`

const ItemContainer=styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    font-size: 20px;
  }
`
