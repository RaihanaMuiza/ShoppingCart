import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        console.log('Counters - Rendered');
        const {onReset,counters,onDelete,onIncrement} = this.props;

        return ( 
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete} 
                onIncrement={this.props.onIncrement}
                // Value={counter.Value} 
                // id={counter.id} 
                counter={counter}
                />)}
        </div> 
        );
    }
}
 
export default Counters;