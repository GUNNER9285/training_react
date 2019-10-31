import React, {Component} from 'react';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            name: "First State",
            count: 0
        };
    }

    render() {

        setTimeout(() => {
            this.setState({name: "Second State"});
        }, 2000);

        setInterval(() => {
            // this.setState({count: this.state.count + 1});
            this.setState({count: 2});
        }, 1000);

        return (
            <div>
                <h2> Content === React Training List === Content </h2>

                <p>{this.props.title} {this.props.name} {this.props.date}</p>

                <h2>{this.state.name} {this.state.count}</h2>
            </div>
        );
    }
}

export default Content;