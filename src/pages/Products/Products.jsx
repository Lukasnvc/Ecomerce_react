import {useParams, useNavigate, generatePath} from 'react-router-dom'
import { useProducts } from "../../hooks/products";
import { useState } from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/string';
import Select from 'react-select'
import { getUniqueArrayItems } from '../../utils/array'
import { size } from '../../consts/mediaQueries';
import { PRODUCT_PATH } from '../../routes/const';


const Products = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || [];
  const navigate = useNavigate()
  const { category } = useParams()
  
  const [selectedColors, setSelectedColors] = useState([])

  const categoryProducts = products.filter((product) => product.type === category);

  const colors = categoryProducts.map((product) => product.color.toLowerCase());
  const uniqueColors = getUniqueArrayItems(colors)
  const colorOptions = uniqueColors.map((color) => ({
    value: color,
    label: capitalizeFirstLetter(color)
  }))

  const selectedColorsArray = selectedColors.map((color) => color.value);
  const filteredByColor = categoryProducts.filter(product => selectedColorsArray.includes(product.color.toLowerCase()))
  const filteredProducts = filteredByColor.length? filteredByColor : categoryProducts
  
  const navigateToProduct = (category, id) => {
    const path = generatePath(PRODUCT_PATH, { category, id });
    navigate(path)
  } 
  if (isLoading) {
    return 'Kraunasi...'
  }
  if (error) {
    return 'Nepavyko gauti duomenu'
  }
  return (
    <div>
      <FilterContainer>
        <Filter>
          <Select isMulti name='colors' options={colorOptions} value={ selectedColors} onChange={setSelectedColors} />
        </Filter></FilterContainer>
    <ProductsContainer>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} onClick={()=> navigateToProduct(category, product.id)}>
          <img src={product.picUrl[0]} alt={product.name} />
          <ProductName>{capitalizeFirstLetter(product.name.toLowerCase())}</ProductName>
          <ProductName>€{product.price}</ProductName>
        </ProductItem>
      ))}
      </ProductsContainer>
      </div>
  );
}

export default Products;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: ${size.mobile}) {
    grid-template-columns: repeat(1,1fr);
  }
 
`

const Filter = styled.div`
margin-right: 40px;
margin-bottom: 24px;
`

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width: ${size.mobile}) {
    grid-template-columns: repeat(1,1fr);
  }
`

const ProductItem = styled.div`
  margin-right: 24px ;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #e7e3e1;
  cursor: pointer;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
  }
`

const ProductName = styled.p`
  margin-top: 0px;
  margin-bottom: 8px;
  margin-left: 16px;
`