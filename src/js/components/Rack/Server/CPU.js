import React from "react";


export default class CPU extends React.Component {
  constructor() {
    super();
    this.state = {"active": false};
  }
  render() {
    setTimeout(() => {
      this.setState({"active": true});
    }, 3000);
    var cpuStyle= {
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: this.state.active ? 'lawngreen' : 'grey'
    };
    return (
      <td style={cpuStyle}>cpu{this.props.id}</td>
    );
  }
}
