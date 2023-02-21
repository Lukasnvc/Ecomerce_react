import React from "react";
import styled from "styled-components";
import { primaryButtonColor } from "../consts/colors";
import { Link, useNavigate } from 'react-router-dom'
import { CART_PATH, HOME_PATH, LOGIN_PATH } from '../routes/const'
import { FaShoppingCart, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import EnhancedSearchBar from "../components/SearchBar/EnhancedSearchBar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-hot-toast";
import CategoriesButton from "../components/CategoriesButton";



const Topbar = () => {
  const navigate = useNavigate();
  const { handleSignOut, isLoggedIn } = useContext(UserContext);

  const handleClickSign = () => {
    if (isLoggedIn) {
      handleSignOut()
      navigate(HOME_PATH)
      // toast.success("You logged out")
      toast('You logged out',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );

    } else {
      navigate(LOGIN_PATH)
    }
   
  }
  
  return (
    <Container>
      <CategoriesButton/>
      <Logo as={Link} to={HOME_PATH}>E-shop</Logo>
     
      <ItemContainer>
        
        <EnhancedSearchBar/>
        <Link to={CART_PATH}>
          <FaShoppingCart />
        </Link>
        <SignOut onClick={handleClickSign}>
          {isLoggedIn ? <FaSignOutAlt fontSize={18} /> : <FaSignInAlt fontSize={18} />}
          </SignOut>
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

const SignOut = styled.div`
  cursor: pointer;
`