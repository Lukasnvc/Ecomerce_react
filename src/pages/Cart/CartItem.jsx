import styled from "styled-components";
import { euroSymbol } from '../../consts/currency';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartItem = ({ product, handleDecreaseQuantity, handleIncreaseQuantity }) => {
  
  return (
    <Container key={product.id}>
          <img src={product.picUrl[0]} alt={product.name} />
          <div>
          <CartItemPrice>{euroSymbol}{product.price}</CartItemPrice>
            <p>{product.name}</p>
            <CartItemColor>{product.color}</CartItemColor>
          </div>
      <QuantityContainer>
        <AiOutlineMinus onClick={handleDecreaseQuantity}/>
        <ItemQuantity>
        x{product.quantity}
        </ItemQuantity>
        <AiOutlinePlus onClick={handleIncreaseQuantity}/>
      </QuantityContainer>
        </Container>
  );
}

export default CartItem;


const Container = styled.div`
   display: flex;
  img{
    width: 120px;
    margin-right: 8px;
    object-fit: contain;
  }
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

const QuantityContainer = styled.div`
  flex: 1;
  margin-right: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  user-select: none;
  svg {
    cursor: pointer;
  }
`

const ItemQuantity = styled.p`
  font-size: 18px;
`