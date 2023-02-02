import { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { ProductContext } from "../../contexts/ProductContext";

const Product = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const product = products.find((product) => product.id === Number(id))
  if(!product) {
    return <div>Loading...</div>
  } 
  return (
  
      <div>{product.name}</div>

  );
}

export default Product;
