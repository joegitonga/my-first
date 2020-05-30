import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Carlos'
        };
    }
    componentDidMount(){
        setTimeout(()  => {
            this.setState({
                name: 'Joe'
            });
        }, 1000);
    }
    render() {
        // Style object...
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
            };

        return (
            <div className="Home">
                <h1>Welcome to Codejobs</h1>
                <p>
                    In this recipe you will learn how to add styles to
                    components. If you want to learn more you can visit
                    our Youtube Channel at
                    <a href="http://youtube.com/codejobs" target="_blank"> Codejobs</a>.
                </p>
                <p>
                    <button style={buttonStyle}>Click Here</button>
                </p>
            </div>
        );
    }
}

export default Home;