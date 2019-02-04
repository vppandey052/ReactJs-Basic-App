import React, { Component } from 'react';
import './App.css';
import Counters from "./counters";
import NavBar from "./NavBar";

class MainApp extends Component {

    state = {
        count:0,
        counters : [
            {id : 1 , value : 5},
            {id : 2 , value : 0},
            {id : 3 , value : 0},
            {id : 4 , value : 0}
        ]
    };

    constructor(props){
        super(props);
        console.log("MainApp - constructor",this.props);
    }
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


    render() {
      console.log("MainApp - render");
      console.log("count ", this.props.children);
    return (
        <React.Fragment>
            <NavBar totalCount={this.state.counters.filter(c => c.value > 0).length}/>
            <main className="container">

            <Counters
            counters = {this.state.counters}
            onIncrement = {this.handleIncrement}
            onReset = {this.handleReset}
            onDelete = {this.handleDelete}
            />
            </main>
        </React.Fragment>

    );
  }



}

export default MainApp;
