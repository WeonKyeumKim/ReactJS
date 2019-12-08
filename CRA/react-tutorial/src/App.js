import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  /*
    State 는 component 로 부터 private data 를  update 할 수
    있다.  database 로 update 없이 cart 로 부터 add/remove/update 를
    할 수 있게 한다.
  */
  state = {
    characters: []
  };

  /*
    Table component 로 이 method 를 prop 으로써 pass 
    한다.
  */
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      /*
        array object 의 filter 는 자동으로 loop 를 만들며,
        array 를 modify 하지 않고 new array 를 만든다.
        pass 되어진 index 를 제외한 값들만 return.
      */
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  /*
    Form.js 에서 props.handleSubmit 으로 state (name, job) 을
    character 로 pass 한다.
  */
  handleSubmit = character => {
    /*
      state characters 에 기존의 value 와 Form.js 에서 새로
      입력된 값을 combine 하여 set 한다.
      spread operator: ...this.state.characters
      this.state.characters 의 값을 가져온다.
    */
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          /*
          JS characters 를 Table 에 characterData 로 pass 하고
          App.js 의 removeCharacter method 를 Table 에서
          removeCharacter 로 사용하여 State characters modify
          할 수 있게한다.

          characterData 와 removeCharacter 를 Table 에
          props 으로써 pass 한다.

          characters 와 removeCharacter 은 props 으로
          Tbale 로 pass 한다.  Table 에서 update 된
          state 를 App.js 로 set 하기 위하여 removeCharacter 를
          사용한다.
        */
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        {/*
          App.js 의 handleSubmit 을 Form.js 에서 사용하기 위하여
          handleSubmit bind 하여 props 으로 pass 한다.
        */}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
