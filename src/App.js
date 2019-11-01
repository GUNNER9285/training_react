import React, {Component} from 'react';
import Header from './compoents/Header';
import Content from './compoents/Content';
import Footer from './compoents/Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            message: "UnLike",
            type: ""
        };
        this.changeMessage = this.changeMessage.bind(this);
        this.insertData = this.insertData.bind(this);
    }

    changeMessage() {
        this.setState({message: "Like"});
    }

    insertData() {
        var item = 'React, ';
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray});
    }

    changeType(event) {
        this.setState({type: event.target.value})
    }

    render() {
        return (
            <div>
                <Header/>

                <button onClick={this.changeMessage}>{this.state.message}</button>

                <h2>{this.state.data}</h2>
                <button onClick={this.insertData}>Insert</button>

                <br/><br/>
                <input type='text' onChange={this.changeType.bind(this)}/>
                <h1>Welcome : {this.state.type}</h1>

                <Content title="unit 1: " name="create App " date="- 30/10/19"/>
                <Footer/>
            </div>
        );
    }
}

export default App;
