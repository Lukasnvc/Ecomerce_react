import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import styled from "styled-components";
import CartItem from "../Cart/CartItem";
import { size } from "../../consts/mediaQueries";
import PaymentForm from "./PaymentForm";

const CheckOut = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <Container>
      <ShippingContainer>
       <PaymentForm/>
      </ShippingContainer>
       <CartContainer>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      </CartContainer>
    </Container>
  );
}

export default CheckOut;

const CartContainer = styled.div`
  background-color: white;
  width: 50%;
`

const Container = styled.div`
  max-width: ${size.laptop};
  display: flex;
  margin: 0 auto;
  gap: 32px;
`

const ShippingContainer = styled.div`
  width: 50%;
`