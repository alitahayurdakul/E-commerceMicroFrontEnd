import React, { Component } from 'react';
import './Bag.scss';
import OrderPrice from './OrderPrice/OrderPrice';

class Bag extends Component {

  state = {
    "orderList": [],
  }

  componentDidMount = () => {

    this.setState({
      orderList: this.props.orderList
    });
  }

  onClickIncrease = async (productId) => {
    await this.props.increaseOrderCount(productId);
    this.setState({
      orderList: this.state.orderList
    });
  }

  onClickDecrease = async (productId, productCount) => {

    if (productCount - 1 === 0) {
      await this.props.removeOrder(productId);
      window.location.reload();
    }

    else {
      await this.props.decreaseOrderCount(productId);
      this.setState({
        orderList: this.state.orderList
      });
    }

  }

  onClickDeleteOrder = async (productId) => {

    await this.props.removeOrder(productId);
    this.setState({
      orderList: this.state.orderList.filter(item => item.order.id !== productId)
    });

    window.location.reload();

  }

  cartTotal = () => {
    let total = 0;
    this.props.orderList.forEach(item => {
      total += (item.count * +(item.order.price))
    });

    return total;
  }

  render() {
    return (

      <div className='bag-part'>
        {
          this.state.orderList.length !== 0 ? <>
            <div className='order-list'>
              <h2>Order Summary</h2>
              {
                this.state.orderList.map(item => (
                    <div className='order-list-card'>
                      <div>
                        <img src={item.order.image} />
                      </div>
                      <div className='order-list-card-middle'>
                        <p>{item.order.title}</p>
                        <p>${item.order.price}</p>
                      </div>
                      <div className='order-list-card-end'>
                        <div className='order-control'>
                          <button onClick={this.onClickDecrease.bind(this, item.order.id, item.count)}>-</button>
                          <span> {item.count} </span>
                          <button onClick={this.onClickIncrease.bind(this, item.order.id)}>+</button>
                        </div>
                        <div className='delete-item'>
                          <button onClick={this.onClickDeleteOrder.bind(this, item.order.id)}>Sil</button>
                        </div>
                      </div>
                    </div>
                ))
              }
            </div>

            <OrderPrice subtotal={this.cartTotal() - Number.EPSILON} total={this.cartTotal() + 25 - Number.EPSILON} />
          </>
            :
            <div>Card is empty</div>
        }
      </div>
    )
  }

}
export default Bag;