import React, { Component } from 'react'

class OrderPrice extends Component {

  render() {

    return (
      <div className='payment-summary'>
        <h2>Payment Summary</h2>
        <div className='payment-body'>
          <div className='payment-flex'>
            <span>Subtotal:</span>
            <span>${this.props.subtotal.toFixed(2)}</span>
          </div>

          <div className='payment-flex'>
            <span>Shipping Fee:</span>
            <span>$25</span>
          </div>

          <div className='payment-flex'>
            <span>Total:</span>
            <span>${this.props.total.toFixed(2)}</span>
          </div>

        </div>
      </div>
    )
  }
}
export default OrderPrice;