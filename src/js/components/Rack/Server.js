import React from "react";

import CPU from "./Server/CPU";

export default class Server extends React.Component {
  render() {
    var tableStyle= {
      borderWidth: 3,
      borderStyle: 'solid',
      cellSpacing: 3,
      cellPadding: 3,
      backgroundColor: 'lightblue'
    };
    return (
      <td>
        <table style={tableStyle}>
          <CPU id={1}/>
          <CPU id={2}/>
          <CPU id={3}/>
          <CPU id={4}/>
        </table>
      </td>
    );
  }
}
