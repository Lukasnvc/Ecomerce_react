import { CartContext } from "../../contexts/CartContext";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import CartItem from "../Cart/CartItem";
import { size } from "../../consts/mediaQueries";
import PaymentForm from "./PaymentForm";
import { useNavigate } from "react-router";
import { CART_PATH } from "../../routes/const";

const CheckOut = () => {
  const { cartItems, handleUpdateQuantity } = useContext(CartContext)
  const navigate = useNavigate();
  useEffect(() => {
    if (!cartItems.length) {
      navigate(CART_PATH)
    }
     
  }, [cartItems.length, navigate]);
  return (
    <Container>
      <ShippingContainer>
       <PaymentForm/>
      </ShippingContainer>
       <CartContainer>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product}
        handleIncreaseQuantity={() => handleUpdateQuantity(product.id, "increase")}
        handleDecreaseQuantity={() => handleUpdateQuantity(product.id)}
        />
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