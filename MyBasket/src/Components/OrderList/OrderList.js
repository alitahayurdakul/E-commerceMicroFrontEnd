import React, { Component } from 'react'

class OrderList extends Component {
    // state = {
    //     "orderList": []
    // }

    // componentDidMount = () => {

    //     this.setState({
    //         orderList: this.props.orderList
    //     });

    // }

    // onClickIncrease = async (productId) => {
    //     await this.props.increaseOrderCount(productId);
    //     this.setState({
    //         orderList: this.state.orderList
    //     });
    // }

    // onClickDecrease = async (productId) => {
    //     await this.props.decreaseOrderCount(productId);
    //     this.setState({
    //         orderList: this.state.orderList
    //     });

    // }

    // onClickDeleteOrder = async (productId) => {
    //     console.log(productId)
    //     await this.props.removeOrder(productId);
    //     this.setState({
    //         orderList: this.state.orderList.filter(item => item.order.id !== productId )
    //     })
    // }

    render() {
        return (
            <div className='order-list'>
                <h2>Order Summary</h2>
                {
                    this.props.orderList.map(item => (
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
                                    <button onClick={this.props.onClickDecrease.bind(this, item.order.id)}>-</button>
                                    <span> {item.count} </span>
                                    <button onClick={this.props.onClickIncrease.bind(this, item.order.id)}>+</button>
                                </div>
                                <div className='delete-item'>
                                    <button onClick={this.props.onClickDeleteOrder.bind(this, item.order.id)}>Sil</button>
                                </div>
                            </div>
                        </div>
                    )) 
                }
            </div>
        )
    }
}
export default OrderList;