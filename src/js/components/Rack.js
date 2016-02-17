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
    return (
      <table style={tableStyle}>
        <Server />
        <Server />
        <Server />
        <Server />
        <Server />
        <Server />
      </table>
    );
  }
}
