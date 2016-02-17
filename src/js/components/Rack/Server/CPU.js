import React from "react";


export default class CPU extends React.Component {
  constructor() {
    super();
    this.state = {"active": false};
  }

  changeStatus(){
    this.setState({"active": !this.state.active});
  }
  render() {
    var cpuStyle= {
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: this.state.active ? 'lawngreen' : 'grey'
    };
    return (
      <td style={cpuStyle} onClick={this.changeStatus.bind(this)}>cpu{this.props.id}</td>
    );
  }
}
