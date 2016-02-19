import React from "react";

import Rack from "./Rack";

export default class Layout extends React.Component {
  render() {
    var racks = [
      1,2,3,4,5,6
    ].map((rack_id, i) => <Rack key={i} rack_id={rack_id}/>);
    return (
      <div>
      {racks}
      </div>
    );
  }
}
