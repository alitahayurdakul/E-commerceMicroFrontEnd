import React, { useEffect, useState } from 'react';
import './Home.scss';
import Card from './Card/Card';
import { ApiStore } from '../../API/api-store';

function Home({ addOrderList }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProduct = async () => {
      const urunler = await ApiStore.getAllProducts();
      setProducts(urunler)
    }
    getProduct();
  }, [])

  return (
    <div className='home-page'>
      {
        products.map(product => {
          return (
            <React.Fragment key={product.id}>
              <Card product={product} addOrderList={addOrderList} />
            </React.Fragment>
          )
        })
      }
    </div>
  )

}
export default Home;