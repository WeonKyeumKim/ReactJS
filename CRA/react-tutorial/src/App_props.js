import React, { Component } from "react";
/*
    Bring custom component Table.js
*/
import Table from "./Table";

class App extends Component {
  render() {
    /*
      JSON-baed api 에서 bring 하는 것 처럼
      objects 의 array 로 data 를 move 한다.
    */
    const characters = [
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
    ];
    return (
      /*
        class 대신에 className 을 사용한다는 것은 
        HTML 이 아니고 javbaScript code 를 뜻한다. 
        div className="container"
      */
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
