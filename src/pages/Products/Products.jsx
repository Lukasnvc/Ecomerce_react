import {useParams} from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/string';

const Products = () => {
  const { category } = useParams()
  const { products } = useContext(ProductContext)
  
  const categoryProducts = products.filter((product) => product.type === category);
  console.log(categoryProducts)
  return (
    <ProductsContainer>
      {categoryProducts.map((product) => (
        <ProductItem key={product.id}>
          <img src={product.picUrl[0]} alt={product.name} />
          <ProductName>{capitalizeFirstLetter(product.name.toLowerCase())}</ProductName>
        </ProductItem>
      ))}
   </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  padding: 50px;
`

const ProductItem = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
  }
`

const ProductName = styled.p`
  margin: 0;
`