import React from 'react';
import { Link } from 'react-router-dom';
// import Card from 'card/Card'

function SubNavbar() {
  return (
    <div className='sub-navbar'>
      <ul>
        <li>
          <Link to="/wear-products">Giyim</Link>
        </li>
        <li>
          <Link to="/ornament-products">Aksesuar</Link>
        </li>
        <li>
          <Link to="/electronic-products">Elektronik</Link>
        </li>
      </ul>
    </div>
  )
}
export default SubNavbar;