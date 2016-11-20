import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import autoBind from 'react-autobind';

import Store from './Store';

class StorePane extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    renderStore(store) {
        return <Store key={store} index={store} details={this.props.stores[store]} />;
    }

    render() {
        return (
            <div id="stores-pane">
                <h1>Stores & Ovens</h1>
                <ul>
                    {Object.keys(this.props.stores).map(this.renderStore)}
                </ul>
            </div>
        )
    }

}

export default StorePane;

// var StorePane = React.createClass({
//     mixins:[PureRenderMixin],
//     renderStore: function (store) {
//         return <Store key={store} index={store} details={this.props.stores[store]} />;
//     },
//     render: function () {
//         return (
//             <div id="stores-pane">
//                 <h1>Stores & Ovens</h1>
//                 <ul>
//                     {Object.keys(this.props.stores).map(this.renderStore)}
//                 </ul>
//             </div>
//         )
//     }
// });