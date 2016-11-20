import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import autoBind from 'react-autobind';

class Store extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getCount(status) {
        return this.props.details.orders.filter((n) => { return n.status === status }).length;
    }

    render() {
        return (
            <div className="store">
                <div className="name">{this.props.index}</div>
                <div className="orders">
                    <div><img src="/app/assets/order-confirmed.png" /> {this.getCount("Confirmed")}</div>
                    <div><img src="/app/assets/order-oven.png" /> {this.getCount("In The Oven")}</div>
                    <div><img src="/app/assets/order-delivered.png" /> {this.getCount("Delivered")}</div>
                </div>
            </div>
        )
    }
}

export default Store;

// var Store = React.createClass({
//     getCount: function(status)  {
//         return this.props.details.orders.filter((n) => { return n.status === status }).length;
//     },
//     render: function() {
//         return (
//             <li>
//                 <p>{this.props.index}</p>
//                 <p> Orders Confirmed : {this.getCount("Confirmed")}</p>
//                 <p> Orders In The Oven : {this.getCount("In The Oven")}</p>
//                 <p> Orders Delivered : {this.getCount("Delivered")}</p>
//             </li>
//         )
//     }
// });