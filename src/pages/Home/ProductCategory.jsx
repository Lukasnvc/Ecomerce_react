import styled from "styled-components";

const ProductCategory = ({name, image}) => {
  return (
    <ProductItem>
      <h4> {name}</h4>
      <img src={image} alt={name} />
    </ProductItem>
);
}

export default ProductCategory;

const ProductItem = styled.div`
  position: relative;
  width: 15%;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  margin: 16px;
  border-radius: 5px;
  padding-top: 5px;
  cursor: pointer;
  transition: transform 0.7s ease-in-out;

    &:hover {
      transform: rotate(5deg);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  img {
    width: 100%;
  }
  h4 {
    position: absolute;
    margin-bottom: 2px;
    color: #424242;
    width: 100%;
    padding: 0;
    background-color: #ffffff3e;
    bottom: 20px;
    margin: 0 auto;
    border-radius: 10px;
  }
`;
