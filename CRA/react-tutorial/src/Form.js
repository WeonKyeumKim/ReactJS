import React, { Component } from "react";

class Form extends Component {
  /*
    parent 의 handleSubmit 을 props 으로 receive 하여
    여기서 사용하려면 constructor(props) 를 사용한다.
    empty properties 를 갖는 object 가 되기 위하여
    initial state 를 set 하기 위하여 this.state 를 사용한다.
  */
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: " "
    };

    this.state = this.initialState;
  }

  /*
    input 에 change 가 있으면 handleChange 는 run 하고, 
    그 event 는 pass 되어져서 form input 의 name 과 같은
    state 에 value 를 set 한다.
  */
  handleChange = event => {
    /*
      either name or job field
      input 의 name (key)
      input 의 value (key value)
        name="name"
        value={name}
    */
    const { name, value } = event.target;

    this.setState({
      /*
        [name] 은 name or job 이다.
        value 는 mame or job 의 value 이다.
      */
      [name]: value
    });
  };

  onFormSubmit = event => {
    /* form 이 submit 되어질때 browser reload/refresh 를
       prevent
    */
    event.preventDefault();

    /* pass status (job, value) to App.js */
    this.props.handleSubmit(this.state);

    /* clear state job, value */
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          /*
            input data 를 state 로 save 한다
          */
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          /*
            input data 를 state 로 save 한다.
          */
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
