import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import autoBind from 'react-autobind';

import InboxItem from './InboxItem';

class InboxPane extends React.Component {
    
    constructor(props) {
        super(props);
        autoBind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    renderInboxItem(human) {
        return <InboxItem key={human} index={human} details={this.props.humans[human]} />;
    }

    render() {
        return (
            <div id="inbox-pane">
                <h1>Inbox Pane</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Chat Recived</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.humans).map(this.renderInboxItem)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InboxPane;

// var InboxPane = React.createClass({
//     renderInboxItem: function (human) {
//         return <InboxItem key={human} index={human} details={this.props.humans[human]} />
//     },
//     render: function () {
//         return (
//             <div id="inbox-pane">
//                 <h1>Inbox Pane</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Chat Recived</th>
//                             <th>Name</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.keys(this.props.humans).map(this.renderInboxItem)}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// });