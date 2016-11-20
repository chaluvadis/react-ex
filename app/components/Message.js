
import  React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import autoBind from 'react-autobind';

// var Message = React.createClass({
//     mixins:[PureRenderMixin],
//     render: function () {
//         return <p>{this.props.who}said : {this.props.text}</p>
//     }
// });


class Message extends React.Component{
    constructor(props) {
        super(props);
        autoBind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <p>{this.props.who}said : {this.props.text}</p>
    }
}

export  default Message;

