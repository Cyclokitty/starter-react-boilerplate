import React from 'react';
import ReactDOM from 'react-dom';

import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1 className="header">Welcome to Cyclokitty's React Boilerplate</h1>
                <p>Expect good things to happen here soon!</p>
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
