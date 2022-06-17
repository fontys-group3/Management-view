import React from "react";
import axios from 'axios';

export default class OrderList extends React.Component {
    state = { 
        orders: []
    }

    componentDidMount(){
        axios.get('http://localhost:8084/api/v1/orderdata').then(res => {
            console.log(res);
            this.setState({ orders: res.data})
        })
    }

    render(){
        return(
            <ul>
                {this.state.orders.map(order => <li key={order.id}>{order.tableId}</li>)}
            </ul>
        )
    }
}