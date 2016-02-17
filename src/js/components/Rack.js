import React from "react";

import Server from "./Rack/Server";

export default class Rack extends React.Component {
  render() {
    var tableStyle= {
      borderWidth: 3,
      borderStyle: 'solid',
      cellSpacing: 3,
      cellPadding: 3,
      backgroundColor: 'aquamarine'
    };
    var serverList = [
      <Server id={1}/>,
      <Server id={2}/>,
      <Server id={3}/>,
      <Server id={4}/>,
      <Server id={5}/>,
      <Server id={6}/>
    ];
    return (
      <table style={tableStyle}>
      <h1>R{this.props.id}</h1>
      {serverList}
      </table>
    );
  }
}
