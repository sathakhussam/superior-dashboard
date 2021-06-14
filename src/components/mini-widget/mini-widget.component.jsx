import './mini-widget.styles.css'

// Components
import React from 'react';
import Card from "../card/card.component"

function MiniWidget(props) {
    return (
        <div className="Mini-widget">
            <Card customClass="component">
                <h3>{props.values.totalRevenue} AED</h3>
                <p>Total Revenue</p>
            </Card>
            <Card customClass="component">
                <h3>{props.values.totalOrders}</h3>
                <p>Orders</p>
            </Card>
            <Card customClass="component">
                <h3>{props.values.totalCustomers}</h3>
                <p>Customers</p>
            </Card>
            <Card customClass="component">
                <h3>{props.values.growth} %</h3>
                <p>Growth</p>
            </Card>
        </div>
    );
}

export default MiniWidget;