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
    var servers = [
      1,2,3,4,5,6
    ].map((server_id, i) => <Server key={i} server_id={server_id}/>);
    return (
      <table style={tableStyle}>
      <h1>R{this.props.rack_id}</h1>
      {servers}
      </table>
    );
  }
}
