import React, { Component } from 'react';
import Body from './body';
import Footer from './footer';
import Header from './header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default Home;