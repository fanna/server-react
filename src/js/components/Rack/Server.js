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
    var cpus = [
      1,2,3,4
    ].map((cpu_id, i) => <CPU key={i} cpu_id={cpu_id}/>);
    return (
      <td>
      <p>S{this.props.server_id}</p>
        <table style={tableStyle}>
        {cpus}
        </table>
      </td>
    );
  }
}
