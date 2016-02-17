import React from "react";

import Rack from "./Rack";

export default class Layout extends React.Component {
  render() {
    var rackList = [
      <Rack id={1}/>,
      <Rack id={2}/>,
      <Rack id={3}/>,
      <Rack id={4}/>,
      <Rack id={5}/>,
      <Rack id={6}/>
    ];
    return (
      <div>
      {rackList}
      </div>
    );
  }
}
