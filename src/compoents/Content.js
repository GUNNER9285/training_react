import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <h2> Content === React Training List === Content </h2>

                <p>{this.props.title} {this.props.name} {this.props.date}</p>

            </div>
        );
    }
}

export default Content;