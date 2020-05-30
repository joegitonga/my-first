import React, { Component } from 'react';
import Result from './Result';
import './Numbers.css';

class Numbers extends Component {

    state = {
        numbers: '', //Input values got here
        result: [] //The sum of the input figures go here
    };

    handleNumberChange = e => {
        const { target: { value } } = e;

        //Converting the string values to array
        const numbers = Array.from(value);

        //summing all numbers from the array
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

        //updating the local state
        this.setState({
            numbers: value,
            result: [...this.state.result, result]
        });

    }

    render() {
        return(
            <div className="Numbers">
                <input type = "number" value = {this.state.numbers} onChange = { this.handleNumberChange } />
                {/* Rendering the results array */}
                <ul>
                    {this.state.result.map((result, i) => (
                        <Result key={i} result={result} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Numbers;