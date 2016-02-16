import React from "react";

import Server from "./Rack/Server";

export default class Rack extends React.Component {
  render() {
    return (
      <table>
        <Server />
        <Server />
        <Server />
        <Server />
      </table>
    );
  }
}
