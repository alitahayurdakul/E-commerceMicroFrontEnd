import React, { useEffect, useState } from 'react'
import Card from 'card/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SearchProduct.scss';
import { Helmet } from 'react-helmet';

function SearchProduct({ addOrderList }) {
    const [filterProducts, setFilterProducts] = useState([]);
    const [status, setStatus] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            await axios.get("https://fakestoreapi.com/products")

                .then(response => {
                    const productContent = id.slice(2).replace("-", " ");
                    const products = response.data.filter(product => product.title.toLowerCase().includes(productContent));
                    if (products.length !== 0) {
                        setFilterProducts(products);
                        setStatus("")
                    }
                    else {
                        setFilterProducts(products)
                        setStatus(<p>Böyle bir ürün bulunamadı...</p>)
                    }

                }).catch(() => {

                })
        }
        getProducts();
    }, [id])

    return (
        <>
            {
                !status ? (
                    <div className='search-products'>
                        <Helmet>
                            <title>{id.slice(2)} Ürünleri | E-Commerce</title>
                        </Helmet>
                        {filterProducts.map(fProduct => (
                            <React.Fragment key={fProduct.id}>
                                <Card product={fProduct} addOrderList={addOrderList} />
                            </React.Fragment>
                        ))}
                    </div>) :
                    <div className='search-not-products'>
                        <Helmet>
                            <title>Ürün bulunamadı | E-Commerce</title>
                        </Helmet>
                        {status}
                    </div>
            }
        </>
    )
}

export default SearchProduct;