import styled from 'styled-components';
import { euroSymbol } from '../../consts/currency';
import { size } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';
import { LOGIN_PATH, CHECKOUT_PATH } from '../../routes/const';
import { useProducts } from "../../hooks/products";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Cart = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || []

  const {isLoggedIn} = useContext(UserContext)

  const cartProducts = products.slice(0, 2)
  if (isLoading) {
    return 'Kraunasi...'
  }
  if (error) {
    return 'Nepavyko gauti duomenu'
  }
  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Reserved items for 60min</p>
      </Header>
      <CartContainer>
      {cartProducts.map((product) => (
        <CartItem key={product.id}>
          <img src={product.picUrl[0]} alt={product.name} />
          <div>
          <CartItemPrice>{euroSymbol}{product.price}</CartItemPrice>
            <p>{product.name}</p>
            <CartItemColor>{product.color}</CartItemColor>
            </div>
        </CartItem>
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

const CartItem = styled.div`
   display: flex;
  img{
    width: 120px;
    margin-right: 8px;
    object-fit: contain;
  }
`

const CartContainer = styled.div`
  background-color: white;
`

const CartItemPrice = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
`

const CartItemColor = styled.p`
  font-weight: 300;
  margin-top: 8px;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`