import React, { Component } from "react";

/*
    custom component 의 이름은 Capitalize 하영 사용
    Browser 가 header, footer 와 독립적으로 body 부분을 scrolling 하게
    만든다. 
    thead tbody tfoot
*/
/*
    simple function define: const
*/
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};
/*
    simple function define: const
    () : parent 로 부터 넘겨받는 data 가 없을때
        const TableBody = () => {
    props: parent 로 부터 넘겨받는 data 가 있을때
        const TableBody = props => {
*/
const TableBody = props => {
  /*
    characterData 를 map 하여, row 와 index 만큼을
    loop 하게 만든다. 
  */
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
  return (
    /* 
      use props 
    */
    <tbody>{rows}</tbody>
    /*
      hard-code data
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
    */
  );
};

class Table extends Component {
  render() {
    const { characterData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
