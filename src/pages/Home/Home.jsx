import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import { getUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";

function Home() {
  const { products, isLoading, error } = useContext(ProductContext);
  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  const categories = uniqCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl,
  }));

  if (error) {
    return error
  }
  return (
   
    <Container>
      {isLoading ? ("Kraunasi...") : 
       <ProductContainer>
       {categories.map((category) => (
         <ProductCategory key={category.name} name={ category.name} image={category.image[0]} />
       ))}
     </ProductContainer>}
     
    </Container>
  );
}

export default Home;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100vh;
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;


