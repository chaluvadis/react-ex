import React from 'react';

import ReactRouter from 'react-router';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import autoBind from 'react-autobind';

const Route = ReactRouter.Route;

const Router = ReactRouter.Router;

const Link = ReactRouter.Link;


class InboxItem extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    sortByDate(a, b) {
        return a.time > b.time ? -1 : a.time < b.time ? 1 : 0;
    }

    messageSummary(conversation) {
        var lastMessage = conversations.sort(this.sortByDate)[0];
        return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
    }

    render() {
        return (
            <tr>
                <td><Link to={'/conversation/' + encodeURI(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
                <td>{this.props.index}</td>
                <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
            </tr>
        )
    }
}

export default InboxItem;

// var InboxItem = React.createClass({
//     sortByDate: function (a, b) {
//         return a.time > b.time ? -1 : a.time < b.time ? 1 : 0
//     },
//     messageSummary: function (conversations) {
//         var lastMessage = conversations.sort(this.sortByDate)[0];
//         return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
//     },
//     render: function () {
//         return (
//             <tr>
//                 <td><Link to={'/conversation/'+ encodeURI(this.props.index)}>{this.messageSummary(this.props.details.conversations)}</Link></td>
//                 <td>{this.props.index}</td>
//                 <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
//             </tr>
//         )
//     }
// });