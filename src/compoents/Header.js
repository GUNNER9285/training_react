import React, {Component} from 'react';

class Header extends Component {
    render() {
        var myStyle = {
            fontSize: 50,
            color: '#0000FF'
        }
        return (
            <div>
                <h1 style={myStyle}> Header === React Training === Header </h1>
            </div>
        );
    }
}

export default Header;