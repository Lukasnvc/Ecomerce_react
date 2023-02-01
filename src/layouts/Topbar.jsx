import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import { primaryButtonColor } from "../consts/colors";

const Topbar = () => {
  return (
    <Container>
      <NavigationItem>Categories</NavigationItem>
      <Logo>E-shop</Logo>
      <SearchBar/>
    </Container>
  );
}

export default Topbar;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid${primaryButtonColor};
`

const NavigationItem = styled.div`
  font-weight: 500;
  font-size: 19px;
`

const Logo = styled.div`
  font-weight: 700;
  font-size: 30px;
`
