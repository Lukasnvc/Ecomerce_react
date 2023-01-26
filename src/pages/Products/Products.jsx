import {useParams} from 'react-router-dom'

const Products = () => {
  const {category} = useParams()
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}

export default Products;
