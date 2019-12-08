import React, { Component } from "react";
/*
    name, job 을 list 하면서 각 line 에 Delete button 을 
    같이 display 한다.  button 을 click 하면 해당 line 만
    삭제 된다.
    Bring custom component Table.js
*/
import Table from "./Table";

class App extends Component {
  /*
    render() 웨에는 react State variable  을 define
  */
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  /*
    index 를 lick click 으로 부터 pass 받는다.
  */
  removeCharacter = index => {
    const { characters } = this.state;
    /*
        filter 는 index 에 해당하는 object value 를 제외하고 
        state characters 는 value 의 modify 를 allow
        하여 index 에 해당하는 거 없는 characters 를
        create 한다.
    */
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state;

    return (
      /*
        class 대신에 className 을 사용한다는 것은 
        HTML 이 아니고 javbaScript code 를 뜻한다. 
        div className="container"
      */
      <div className="container">
        <Table
          characterData={characters}
          /* 
            saved JS characters value 를 characterData를
            통하여 prop 으로 Table 로 pass 한다.
            this class 의 method removeCharacter 를 
            Table 에서 removeCharacter 로 사용할 수 있도록
            bind 하여 prop 으로 pass 한다.
          */
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
