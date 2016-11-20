import React from 'react';

import autoBind from 'react-autobind';

import InboxPane from './InboxPane';

import InboxItem from './InboxItem';

import StorePane from './StorePane';

import samples from '../sample-data';

class App extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    getInitialState() {
        return {
            "humans": {},
            "stores": {}
        }
    }

    loadSampleData() {
        this.setState(samples);
    }

    componentWillMount() {
        if ('human' in this.props.params) {
            this.loadSampleData();
        }
    }

    render() {
        return (
            <div>
                <div id="header"></div>
                <button onClick={this.loadSampleData}>Load Sample Data</button>
                <div className="container">
                    <div className="column">
                        <InboxPane humans={this.state.humans} />
                    </div>
                    <div className="column">
                        {this.props.children || "Select conversation from inbox pane"}
                    </div>
                    <div className="column">
                        <StorePane stores={this.state.stores} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

// var App = React.createClass({
//     getInitialState: function () {
//         //initial state contains two properties humans, store
//         return {
//             "humans": {},
//             "stores": {}
//         }
//     },
//     loadSampleData: function () {
//         this.setState(samples);
//     },
//     componentWillMount: function(){
//         if('human' in this.props.params) {
//             this.loadSampleData();
//         }
//     },
//     render: function () {
//         return (
//             <div>
//                 <div id="header"></div>
//                 <button onClick={this.loadSampleData}>Load Sample Data</button>
//                 <div className="container">
//                     <div className="column">
//                         <InboxPane humans={this.state.humans} />
//                     </div>
//                     <div className="column">
//                         {this.props.children || "Select conversation from inbox pane"}
//                     </div>
//                     <div className="column">
//                         <StorePane stores={this.state.stores} />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// });
