import React from "react";


export default class CPU extends React.Component {
  render() {
    var cpuStyle= {
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: this.props.active ? 'lawngreen' : 'grey'
    };
    return (
      <td style={cpuStyle}>cpu{this.props.cpu_id}</td>
    );
  }
}
