import styled from "styled-components";
import { useProducts } from "../hooks/products";
import { getUniqueArrayItems } from "../utils/array";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import { Link } from "react-router-dom";
import { inputBgColor } from "../consts/colors";
import { PRODUCT_LIST_PATH } from "../routes/const";
import { generatePath } from "react-router-dom";

const CategoriesButton = () => {
  const { data } = useProducts();
  const [hovered, setHovered] = useState(false)
  const products = data || []

  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  return (
    <Popover isOpen={hovered}
    positions={["top", "bottom", "left", "right"]}
      onClickOutside={() => setHovered(false)}
      content={
        <ContentContainer>
          {uniqCategories.map((category) => (
            <p key={category}
              onClick={() => setHovered(false)}>
              <Link to={generatePath(PRODUCT_LIST_PATH, { category })}>{category}</Link>
              </p>
          ))}
        </ContentContainer>
      }
    >
      <Container onMouseEnter={() => setHovered(true)}>
        Categories
       </Container>
    </Popover>
 
  );
}

export default CategoriesButton;

const Container = styled.p`
  font-size: 19px;
  cursor: pointer;
`

const ContentContainer = styled.div`
max-height: 135px;
background-color: #ffffff;
border: 1px solid ${inputBgColor};
border-radius: 5px;
width: 120px;
margin-left: 10px;

div {
  padding: 8px;
  font-size: 13px;
  text-transform: capitalize;
  }`;