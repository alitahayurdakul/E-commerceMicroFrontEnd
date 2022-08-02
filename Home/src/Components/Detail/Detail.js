import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-stars';
import { Helmet } from 'react-helmet';

function Detail({ addOrderList }) {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [status, setStatus] = useState(true);

    useEffect(() => {

        const getProductDetail = async () => {
            await axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(response => {
                    if (response.data.length !== 0) {
                        setProduct(response.data);
                        setStatus(false)
                    }
                    else {
                        setProduct(response.data)
                        setStatus(false)
                    }
                })
        }
        getProductDetail();
    }, []);

    const onAddOrder = () => {
        addOrderList(product)
    }

    return (
        <>

            {
                !status ?
                    product.length !== 0 ? <div className='product-detail'>
                        <Helmet>
                            <title>{product.title} | E-Commerce</title>
                        </Helmet>
                        <div className='product-detail-img-part'>
                            <img src={product.image} alt={product.image} />
                        </div>
                        <div className='product-detail-information-part'>
                            <h3>
                                {product.title}
                            </h3>
                            <p className='description-part'>
                                {product.description}
                            </p>

                            <div className='card-ratings'>
                                <ReactStars
                                    count={5}
                                    size={20}
                                    value={product.rating.rate}
                                    edit={false}
                                    color2={'#ffd700'} />
                                <span>{`(${product.rating.rate})`}</span>
                                <span>{`(${product.rating.count})`}</span>
                            </div>

                            <p className='product-detail-footer'>
                                <span>$ {product.price}</span>
                                <i className="fas fa-shopping-bag" onClick={onAddOrder} />
                            </p>
                        </div>
                    </div> : <div>
                        <Helmet>
                            <title>Ürün bulunamadı | E-Commerce</title>
                        </Helmet>
                        <p>
                            Böyle bir ürün bulunamadı...
                        </p>
                    </div>
                    : <div></div>
            }
        </>
    )
}
export default Detail;