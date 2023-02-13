import { useParams } from 'react-router-dom';
import { useProducts } from "../../hooks/products";


const Product = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useProducts();
  const products = data || []
  if (isLoading) {
    return 'Kraunasi...'
  }
  if (error) {
    return 'Nepavyko gauti duomenu'
  }

  const product = products.find((product) => product.id === Number(id))
  if(!product) {
    return <div>Loading...</div>
  } 
  return (
  
    
      <div>{product.name}</div>

  );
}

export default Product;
