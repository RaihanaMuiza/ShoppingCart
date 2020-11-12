import React, { Component } from 'react';

// function Counter(){
//     return(
//         <div>
//             <h1>Hello World</h1>
//             <button>Increment</button>
//         </div>
//     );
// }

class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log("Previous Props", prevProps);
        console.log("Previous State", prevState);

        if(prevProps.counter.Value != this.props.counter.Value){
            // give an ajax call
        }
    }

    componentWillUnmount(){
        console.log("counter - unmount")
    }

    // state = {
    //     count : this.props.counter.Value,
       // id : this.props.id
        //tags : []
        // imageUrl : "https://picsum.photos/400"
    //   };

    // styles = {
    //     fontSize: '100px',
    //     fontColor: '#000000'
    // };

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There is no Tags!</p>

    // return <ul>{this.state.tags.map(tag => <li>{tag}</li>)}</ul>
    // }

    // handleIncrement = (product) => {
    //     console.log(product);
    //     this.setState( {count : this.state.count + 1});

    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id : 1});
    // }

    render() { 

        // let classes = this.colorChange();
       // console.log('props',this.props);
      // console.log(this.props);
      console.log('Counter - Rendered');

        return ( 
            <div>
                <br />
                {/* <h4>Item id : {this.props.ID}</h4> */}
                {/* {this.props.children} */}
                {/* <img src={this.state.imageUrl} alt="Loading" />
                <br /> */}
                <span className={this.colorChange()}>{this.formatCount()}</span>   
                {/* bootstrap predefined classes */}
                {/* <span>{this.state.count}</span> */}
                <br />
                <button onClick={()=> this.props.onIncrement(this.props.counter)} style={{fontSize:'12px'}} className="btn btn-secondary btn-sm m-2">Increment</button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
                {/* {this.state.tags.length === 0 && "Please add a tag to the list"} */}
                {/* {this.renderTags()} */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button> 

            </div>
         );
    }

    colorChange() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.Value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        //const x = <h1>Zero</h1>;
        return this.props.counter.Value === 0 ? 'Zero' : this.props.counter.Value;
        // const { count } = this.state;
        // return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;

