import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };

  /*

  You can view this data with JSON format with JSONView 
  extension in Chrome.

  ["Seona Dancing",
    ["Seona Dancing"],
    ["Seona Dancing (
        , SHAW-n\u0259) were a 1980s British new wave group, best known for providing comedian Ricky Gervais with his first experiences as a public performer."
    ],[
        "https://en.wikipedia.org/wiki/Seona_Dancing"
    ]
  ]
  */
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      console.log(entry);
      return <li key={index}>{entry}</li>;
    });

    return (
      <div className="container">
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;
