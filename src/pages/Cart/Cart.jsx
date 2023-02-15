import styled from 'styled-components';
import { size } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';
import { LOGIN_PATH, CHECKOUT_PATH } from '../../routes/const';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const {cartItems} = useContext(CartContext)
  
console.log(cartItems)
  const {isLoggedIn} = useContext(UserContext)

  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Reserved items for 60min</p>
      </Header>
      <CartContainer>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      </CartContainer>
      <BtnContainer>
        <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH :LOGIN_PATH}>Checkout</Button>
      </BtnContainer>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  max-width: ${size.tablet};
  margin: 0 auto;
`

const Header = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 24px;
`

const CartContainer = styled.div`
  background-color: white;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`