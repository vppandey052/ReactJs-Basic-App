import React from 'react';
import './App.css';

//Stateless functional Component - to write some simple class we use this function method.
//After

//Destructuring Argument - EveryTime we need to call props at all places, so we shall remove props and use total

// const NavBar = props => {
/*<h1>NavBar {" "} {props.totalCount}</h1>*/
const NavBar = ({totalCount}) => {
    console.log("NavBar - render");
    console.log("Enter NavBar ",totalCount);
     return (
        <React.Fragment>
            <h1>NavBar {" "} {totalCount}</h1>
        </React.Fragment>
     );
};


/*
//Before
class NavBar extends Component {

  render() {
      console.log("count ", this.props.children);
    return (
        <React.Fragment>
          <h1>NavBar  {this.props.totalCount}</h1>
        </React.Fragment>
    );
  }
}
*/
export default NavBar;
