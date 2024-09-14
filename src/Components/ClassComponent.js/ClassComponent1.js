import React, { Component } from 'react';
import ClassComponent2 from './ClassComponent2.js';


export default class ClassComponent1 extends Component {
    constructor() {
        super ();
        this.state = {
            count: 0,
            showComponent: false
        }
        console.log(constructor);
        
    }

    increasecount = () => {
        this.setState ({
            count: this.state.count + 1,
            showComponent: !this.state.showComponent
        })
    }

    showComponent = () => {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }

    render() {
        return (
            <>
                <div>ClassComponent</div>
                <h3>Count: {this.state.count}</h3>
                <h3>Show Component: {this.state.showComponent}</h3>
                <button onClick={() => this.showComponent()}>Show Component</button>
                {this.state.showComponent ? <ClassComponent2 data="Data from parent component" /> : ''}
                <button onClick={() => this.increasecount()}>Increase Count</button>
            </>
        )
    }
}
