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
    var cpus = this.props.cpus.map((cpu) =>
                                     <CPU key={cpu.id} cpu_id={cpu.id} active={cpu.active} />);
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
