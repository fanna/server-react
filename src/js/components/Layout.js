import React from "react";

import Rack from "./Rack";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Rack />
        <Rack />
        <Rack />
        <Rack />
        <Rack />
        <Rack />
      </div>
    );
  }
}
