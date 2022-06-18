import React from "react";
import axios from 'axios';
import Table from "./Table";

const colNames = ['id', 'tableId', 'orderId', 'orderState', 'startTime', 'assignTime', 'finishTime']

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
            <div>
            <Table orders={this.state.orders} colNames={colNames}/>
            </div>
        )
    }
}