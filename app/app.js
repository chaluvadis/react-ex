const React = require('react');

const ReactDOM = require('react-dom');

const samples = require('./sample-data');

var App = React.createClass({
    getInitialState: function () {
        //initial state contains two properties humans, store
        return {
            "humans": {},
            "stores": {},
            "selectedConversation": []
        }
    },
    loadSampleData: function () {
        this.setState(samples);
    },
    setSelectedConversation: function (human_index) {
        this.setState({
            selectedConversation: this.state.humans[human_index].conversations
        });
    },
    render: function () {
        return (
            <div>
                <div id="header"></div>
                <button onClick={this.loadSampleData}>Load Sample Data</button>
                <div className="container">
                    <div className="column">
                        <InboxPane humans={this.state.humans} selectedConversation={this.setSelectedConversation} />
                    </div>
                    <div className="column">
                        <ConversationPane conversation={this.state.selectedConversation} />
                    </div>
                    <div className="column">
                        <StorePane stores={this.state.stores} />
                    </div>
                </div>
            </div>
        )
    }
});

var InboxPane = React.createClass({
    renderInboxItem: function (human) {
        return <InboxItem key={human} index={human} details={this.props.humans[human]} selectedConversation={this.props.selectedConversation} />
    },
    render: function () {
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
});

var InboxItem = React.createClass({
    sortByDate: function (a, b) {
        return a.time > b.time ? -1 : a.time < b.time ? 1 : 0
    },
    messageSummary: function (conversations) {
        var lastMessage = conversations.sort(this.sortByDate)[0];
        return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
    },
    setSelected: function () {
        this.props.selectedConversation(this.props.index)
    },
    render: function () {
        return (
            <tr>
                <td><a onClick={this.setSelected}>{this.messageSummary(this.props.details.conversations)}</a></td>
                <td>{this.props.index}</td>
                <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
            </tr>
        )
    }
});

var ConversationPane = React.createClass({
    renderMessage: function (val) {
        return <Message who={val.who} text={val.text} key={val.time.getTime()} />
    },
    render: function () {
        return (
            <div id="conversation-pane">
                <h1>Conversations Pane</h1>
                <h3>Select a conversation from Inbox</h3>
                <div id="messages">
                    {this.props.conversation.map(this.renderMessage)}
                </div>
            </div>
        )
    }
})

var Message = React.createClass({
    render: function () {
        return <p>{this.props.who}said : {this.props.text}</p>
    }
})

var StorePane = React.createClass({
    renderStore: function (store) {
        return <Store key={store} index={store} details={this.props.stores[store]} />;
    },
    render: function () {
        return (
            <div id="stores-pane">
                <h1>Stores & Ovens</h1>
                <ul>
                    {Object.keys(this.props.stores).map(this.renderStore)}
                </ul>
            </div>
        )
    }
});

var Store = React.createClass({
    getCount: function(status)  {
        return this.props.details.orders.filter((n) => { return n.status === status }).length;
    },
    render: function() {
        return (
            <li>
                <p>{this.props.index}</p>
                <p> Orders Confirmed : {this.getCount("Confirmed")}</p>
                <p> Orders In The Oven : {this.getCount("In The Oven")}</p>
                <p> Orders Delivered : {this.getCount("Delivered")}</p>
            </li>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('main'));