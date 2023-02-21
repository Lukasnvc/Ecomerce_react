import { useParams } from 'react-router-dom';
import { useProducts } from "../../hooks/products";
import styled from "styled-components";
import {size} from '../../consts/mediaQueries'
import { inputBgColor } from '../../consts/colors';
import Button from '../../components/Button/Button';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';

const Product = () => {
  const {handleAddToCart} = useContext(CartContext)
  const { id } = useParams()
  const { data, isLoading, error } = useProducts();
  const products = data || []

  const handleAddProduct = () => {
    handleAddToCart(product)
    toast.success("Added to cart")
  }
 
  const product = products.find((product) => product.id === Number(id))
  if (isLoading) {
    return <div>Loading ...</div>
  }
  if(!product) {
    return <div>Can't find this item ...</div>
  } 
  return (
  
    <Container>
      <PhotoSide>
<img src={product.picUrl[0]} alt={product.name} />
      </PhotoSide>
      <InfoSide>
        <Title>{product.name}</Title> 
        <Price>€{product.price}</Price>
        <Description>{product.description}</Description>
        <Button onClick={handleAddProduct}>Add to Cart</Button>
      </InfoSide>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  max-width: ${size.tablet};
  margin: 40px auto;
  display: flex;
`

const PhotoSide = styled.div`
  width: 60%;
  margin-right: 48px;
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid ${inputBgColor};
  }
`

const InfoSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 24px;
  margin-bottom: 8px;
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 18px;
`

const Price = styled.p`
  font-size: 22px;
  margin-bottom: 8px;
`