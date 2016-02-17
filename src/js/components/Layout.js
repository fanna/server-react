import React from "react";

import Rack from "./Rack";

export default class Layout extends React.Component {
  render() {
    var rackList = [
      <Rack />,
      <Rack />,
      <Rack />,
      <Rack />,
      <Rack />,
      <Rack />
    ];
    return (
      <div>
      {rackList}
      </div>
    );
  }
}
