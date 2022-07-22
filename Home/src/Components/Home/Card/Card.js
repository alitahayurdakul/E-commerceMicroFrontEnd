import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

function Card(props) {
    const { id, image, title, price, rating } = props.product;

    const onAddOrder = () => {
        props.addOrderList(props.product)
    }
    
    return (
        <div className='card' key={id}>
            <div className='card-go-detail'>
                <Link to={"/product/detail/" + id} >
                    <img src={image} alt={image} />
                </Link>
            </div>

            <div className='card-content'>
                <Link to={"/product/detail/" + id} >
                    {title}
                </Link>
            </div>

            <div className='card-ratings'>
                <ReactStars
                    count={5}
                    size={20}
                    value={rating.rate}
                    edit={false}
                    color2={'#ffd700'} />
                    <span>{`(${rating.rate})`}</span>
                    <span>{`(${rating.count})`}</span>
            </div>

            <div className='card-footer'>
                <span>${price}</span>
                <i className="fas fa-shopping-bag" onClick={onAddOrder}/>
            </div>
        </div>
    )
}
export default Card;