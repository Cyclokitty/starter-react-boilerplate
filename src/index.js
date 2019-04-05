import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return (
            <Header />
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
