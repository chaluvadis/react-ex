import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import autoBind from 'react-autobind';

import Message from './Message';

import samples from '../sample-data';

class ConversationPane extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    loadConversationData(human) {
        this.setState({ conversation: samples.humans[human].conversations })
    }
    // Handle when User navigates from / to /conversation/:human
    componentWillMount() {
        this.loadConversationData(this.props.params.human);
    }
    // Handle when User navigates between conversations
    componentWillReceiveProps(nextProps) {
        this.loadConversationData(nextProps.params.human);
    }
    renderMessage(val) {
        return <Message who={val.who} text={val.text} key={val.time.getTime()} />
    }
    render() {
        return (
            <div id="conversation-pane">
                <h1>Conversations Pane</h1>
                <h3>{this.props.params.human}</h3>
                <div id="messages">
                    {this.state.conversation.map(this.renderMessage)}
                </div>
            </div>
        )
    }
}

export default ConversationPane;

// var ConversationPane = React.createClass({
//     loadConversationData: function(human) {
//         this.setState({conversation : samples.humans[human].conversations})
//     },
//     //Handle the user navigates to /conversation/:human
//     componentWillMount: function(){
//         this.loadConversationData(this.props.params.human);
//     },
//     //When a user navigates from existing conversation
//     componetWillReceiveProps:function(nextProps) {
//         this.loadConversationData(nextProps.params.human);
//     },
//     renderMessage: function (val) {
//         return <Message who={val.who} text={val.text} key={val.time.getTime()} />
//     },
//     render: function () {
//         return (
//             <div id="conversation-pane">
//                 <h1>Conversations Pane</h1>
//                 <h3>{this.props.params.human}</h3>
//                 <div id="messages">
//                     {this.state.conversation.map(this.renderMessage)}
//                 </div>
//             </div>
//         )
//     }
// })