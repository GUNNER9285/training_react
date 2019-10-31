import React, {Component} from 'react';
import Header from './compoents/Header';
import Content from './compoents/Content';
import Footer from './compoents/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
