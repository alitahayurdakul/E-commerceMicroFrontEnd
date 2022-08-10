import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SubNavbar from './SubNavbar';
import { createStructuredSelector } from 'reselect';
import { selectOrderList } from '../../store/selectors';
import { connect } from 'react-redux';

function Navbar(props) {
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();

    useEffect(() => {
      
        if(history.location.pathname.includes("q=")){
            const url = history.location.pathname.split("/")
            setSearchValue(url[url.length - 1].slice(2))
        }
        else{
            setSearchValue("")
        }
        
    }, []);

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickSearch = (e) => {
        e.preventDefault();
        history.push(`/products?q=${searchValue.toLowerCase().replace(" ", "-")}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            history.push(`/products?q=${searchValue.toLowerCase().replace(" ", "-")}`)
        }
    }

    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <Link to="/" className='navbar-brand' >Commerce</Link>

                <div className='navbar-content-body'>
                    <input type="text" placeholder='Lütfen girmek istediğiniz kelimeyi yazınız.' value={searchValue} onChange={onChangeSearchValue}
                        onKeyUp={handleKeyPress} />
                    <button onClick={onClickSearch}>
                        Ara
                    </button>
                </div>

                <Link to="/my-bag" className="my-basket" >
                    <i className='fas fa-shopping-cart' />
                    <div className='my-basket-product-count'>{props.orderList.length}</div>
                </Link>
            </div>
            <SubNavbar />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    orderList: selectOrderList(),
});

export default connect(mapStateToProps)(Navbar);