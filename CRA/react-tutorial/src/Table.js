import React, { Component } from "react";

/*
  simple function 은 render 없다
  별도의 class 같이 사용한다.
*/
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

/*
  map
  calling array 안에서 every element 에 provided
  function 의 calling 의 results 로 new array 를
  create 한다.

  array object 의 map 은 loop 을 만든다.
  loop 에 의하여 만들어진 모든 row 들을 rows 에 만든다.
  key={} 는 each list item  을 identify 하도록 도와주며,
  React 에서는 lists 를 만들때 항상 사용한다.

  Props 는 React component 로 existing data 를 pass 하는
  effective way 이나, component 는 props 을 change 할 수
  없다.  Read-only

  App.js 의 state 와 method removeCharacter 를 props 으로
  넘겨받아,  button 을 click 하면 App.ja 의 removeCharacter 로
  index 를 pass 하여 state 를 뱐걍한다. 

*/
const TableBody = props => {
  /*
    under the hood, map function 은 your callback 으로
    three arguments 를 pass 한다.

    1.map 에 call 되어진 entire  array: characterData
    2.array 안에 current item: row
    3.current item 의 array index: index
  */
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        {/*
          simple function Tableheader 를 call 한다
        */}
        <TableHeader />
        {/*
          simple function TableBody 로 data characterData 와
          method removeCharacter 를 props 으로 pass 한다.
        */}
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
