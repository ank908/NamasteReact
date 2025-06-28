import React from "react";
//or directly extend Component
import { Component } from "react";
import { GITHUB_API } from "../utils/constant";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "default",
        // avatar_url: null,
      },
    };
    console.log(this.props.name + "child Constructor");
  }

  //to make API call to render all the things then api call
  async componentDidMount() {
    console.log(this.props.name + "Child Mount");

    const data = await fetch(GITHUB_API);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);

    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      //   this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //Code
    }

    if (this.state.count2 !== prevState.count2) {
      //Code
    }
    console.log("Component Updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Unmounted");
  }

  render() {
    // const { name, location } = this.props;
    let { count, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            //Never Update State Variables directly
            // this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1,
              count2: count2 + 1,
            });
            console.log(this.state.count);
          }}
        >
          Increase
        </button>

        <h2>Count2 : {count2}</h2>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <img className="aboutImage" src={avatar_url} />
        <h4>Contact : kumarankur908@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
//Render Phase
// Ankur(classComponent)child Constructor
// Ankur(classComponent)Child Render
// kumar(classComponent)child Constructor
// kumar(classComponent)Child Render
//Commit Phase
// DOM is Updated
// Ankur(classComponent)Child Mount
// kumar(classComponent)Child Mount

/*
-----Mounting-------
Constructor(dummy)
Render(dummy)
    <HTML Dummy>
Component Did Mount
    <API Call>
    <this.setState> -> state variable is updated
-----Updating--------
Render(API data)
<HTML new data>
Component Did Update
-----Unmounting-------
*/
