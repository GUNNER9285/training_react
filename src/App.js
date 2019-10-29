import React, {Component} from 'react';

class App extends Component {
    render() {
        var myStyle = {
            fontSize: 200,
            color: '#0000FF'
        }
        return (
            <div>
                <h1 style={myStyle}> React Training </h1>
            </div>
        );
    }
}

export default App;
