import React, { Component } from 'react';
import './App.css';

class App extends Component {
    //this piece of code is executed only once when the app class gets instantiated.
    //its a local state.
    //so when we click reset the local state is not modified

    //so we need "single truth"
    //This type of components are called "Controlled components" which get all the values from "Parent" component.

//removing all state pbject from the child class
/*    state = {value:this.props.app.value};*/

/*
handleIncrement = () => {
this.setState ( {value : this.state.value + 1});
};
*/

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prevProps ", prevProps);
    console.log("prevState ",prevState);
    const currentProps = this.props.app.value;
    if( currentProps!== prevProps){
        console.log("Previous props value is not equal to current props value",currentProps , prevProps);
    }
}

    incrementCount(){
    const {value} = this.props.app;
    return value === 0 ? "ZERO" : value;
};

//this value are state property and belongs to Counters object we should handle the value in counters class.
  render() {
      console.log("App - render");
      console.log("count ", this.props.children);
    return (
      <div className="App">
          <h1>Counter #{this.props.app.id}</h1>
        <h1>{this.incrementCount()}</h1>

          <button onClick={() => this.props.onIncrement(this.props.app)}>Increment</button>
          <button onClick={() => this.props.onDelete(this.props.app.id)}>Delete</button>
      </div>
    );
  }
}

export default App;
