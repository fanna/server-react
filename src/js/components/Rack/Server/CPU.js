import React from "react";


export default class CPU extends React.Component {
  render() {
    var cpuStyle= {
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: 'grey'
    };
    return (
      <td style={cpuStyle}>cpu</td>
    );
  }
}
