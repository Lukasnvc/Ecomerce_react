import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import { getUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";

function Home() {
  const { products } = useContext(ProductContext);
  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  const categories = uniqCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl,
  }));
  
  return (
    <div className="App">
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory key={category.name} name={ category.name} image={JSON.parse(category.image)[0]} />
        ))}
      </ProductContainer>
    </div>
  );
}

export default Home;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #00416A;  
  background: -webkit-linear-gradient(to right, #E4E5E6, #00416A); 
  background: linear-gradient(to right, #E4E5E6, #00416A);

`;


