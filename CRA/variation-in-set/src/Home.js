import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

let makeUpdater = apply => key => state => {
  return {
    [key]: apply(state[key])
  };
};
const toggleKey = makeUpdater(previous => !previous);
const incrementCounter = makeUpdater(previous => previous + 1);

class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    isValid: false,
    counter: 0
  };

  logFields = () => {
    const { firstName, lastName } = this.state;
    console.log("Full name: ", `${firstName} ${lastName}`);
  };

  /*
    setState 는 async 이다. 

    this.setState({
      [name]: value,
    });
    this.handleCounter();
    this.logFields();

    이렇게 하면 logFields 가 state change 없이 
    trigger 될 수 있다. async (random)

    우리가 state 로 만든 최근의 changes 를 logFields() 하려면,
    callback 안에서 그것을 invoke 해야 한다.
  */
  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.logFields();
      }
    );
    this.handleCounter();
  };

  handleCounter = () => {
    this.setState(incrementCounter("counter"));
  };

  handleIsValid = () => {
    this.setState(toggleKey("isValid"));
    this.handleCounter();
  };

  renderButtonColor = () => {
    return this.state.isValid ? "btn btn-danger" : "btn btn-success";
  };

  render() {
    return (
      <div className="Home mt-3 text-center">
        <h2>How to setState in React</h2>
        <h5>by eduardo.vedes</h5>
        <hr />
        <div className="my-3">
          <h3>User Info</h3>
          <div>First Name: {this.state.firstName}</div>
          <div>Last Name: {this.state.lastName}</div>
          <div>The info is Valid?: {this.state.isValid ? "yes" : "no"}</div>
          <div>State changes counter: {this.state.counter}</div>
          <hr />
        </div>
        <div className="my-3">
          <h5>Form</h5>
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input
              className="ml-2"
              type="text"
              name="firstName"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="ml-2"
              type="text"
              name="lastName"
              onChange={this.handleFormChange}
            />
          </div>
          <div>
            <button
              className={this.renderButtonColor()}
              onClick={this.handleIsValid}
            >
              {this.state.isValid ? "Invalidate" : "Validate"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
