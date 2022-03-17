import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from '../data';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((products) => (
          <div className="product" key={products.slug}>
            <Link to={`/products/${products.slug}`}>
              <img src={products.image} alt={products.name} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${products.slug}`}>
                <p>{products.name}</p>
              </Link>
              <p>
                <strong>${products.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
