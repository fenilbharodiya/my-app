import React, { Component } from 'react';
import ClassComponent3 from './ClassComponent3.js';

class ClassComponent2 extends Component {
    constructor(props){
        super()
    }
    
    
    render () {
        return (
            <>
                {/* <ClassComponent3 /> */}
                <br />
                Data: {this.props.data}
                {/* Count: {this.state.count} */}
                <h1>Class_Component_2</h1>

            </>
        )
    }
}

export default ClassComponent2;