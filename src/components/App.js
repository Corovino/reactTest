//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Global/css/App.css';

//components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu';

class App extends Component {

    static propTypes = {
        children : PropTypes.object.isRequired
    }

    render() {
        const { children } = this.props;
        return (
            <div className="App">
                <Header  title="Test REact" items={items} />
                <Content body={children}/>
                <Footer copyright="&copy; Hebert Developer 2017"/>
            </div>
        );
    }
}

export default App;
