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
    var servers = this.props.servers.map((server) =>
                                     <Server key={server.id} server_id={server.id} cpus={server.cpus}/>);
    return (
      <table style={tableStyle}>
      <h1>R{this.props.rack_id}</h1>
      {servers}
      </table>
    );
  }
}
