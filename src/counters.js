import React, { Component } from 'react';
import App from "./App";

class Counters extends Component {
//moved to MainApp.js as it is a parent class
   /* state = {
        count:0,
        counters : [
            {id : 1 , value : 5},
            {id : 2 , value : 0},
            {id : 3 , value : 0},
            {id : 4 , value : 0}
        ]
    };

    handleIncrement = app =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(app);
    counters[index] = {...app};
    counters[index].value++;
    this.setState({counters});
    };

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};

handleDelete = counterId => {
    console.log("handle delete event called",counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};
*/

   //Before
   /*
   return (
        <div className="App">
            <button onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map(app =>
                <App key={app.id}
                     onIncrement={this.props.onIncrement}
                     onDelete={this.props.onDelete}
                     app = {app}>
                <h4>Counter #{app.id}</h4>
            </App> )}
      </div>
    );
    */

 //After Destructing of arguments
  render() {
      console.log("counters - render");
      const {onReset, onDelete, onIncrement, counters} = this.props;
    return (
        <div className="App">
            <button onClick={onReset}>Reset</button>
            {counters.map(app =>
                <App key={app.id}
                     onIncrement={onIncrement}
                     onDelete={onDelete}
                     app = {app}>
                <h4>Counter #{app.id}</h4>
            </App> )}
      </div>
    );
  }
}

export default Counters;
