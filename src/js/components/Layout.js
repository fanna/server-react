import React from "react";

import Rack from "./Rack";

export default class Layout extends React.Component {
  render() {
    var rackList= [
      {id: 1, servers:[
        {id: 1, cpus:[{id: 1, active: false}, {id: 2, active:false}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 2, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 3, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 4, cpus:[{id: 1, active: false}, {id: 2, active:true}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 5, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 6, cpus:[{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: false}, {id: 4, active: false}]},
     ]},
      {id: 2, servers:[
        {id: 1, cpus:[{id: 1, active: false}, {id: 2, active:false}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 2, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 3, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 4, cpus:[{id: 1, active: false}, {id: 2, active:true}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 5, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 6, cpus:[{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: false}, {id: 4, active: false}]},
     ]},
      {id: 3, servers:[
        {id: 1, cpus:[{id: 1, active: false}, {id: 2, active:false}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 2, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 3, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 4, cpus:[{id: 1, active: false}, {id: 2, active:true}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 5, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 6, cpus:[{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: false}, {id: 4, active: false}]},
     ]},
      {id: 4, servers:[
        {id: 1, cpus:[{id: 1, active: false}, {id: 2, active:false}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 2, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 3, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 4, cpus:[{id: 1, active: false}, {id: 2, active:true}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 5, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 6, cpus:[{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: false}, {id: 4, active: false}]},
     ]},
      {id: 5, servers:[
        {id: 1, cpus:[{id: 1, active: false}, {id: 2, active:false}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 2, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 3, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 4, cpus:[{id: 1, active: false}, {id: 2, active:true}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 5, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 6, cpus:[{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: false}, {id: 4, active: false}]},
     ]},
      {id: 6, servers:[
        {id: 1, cpus:[{id: 1, active: false}, {id: 2, active:false}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 2, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 3, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 4, cpus:[{id: 1, active: false}, {id: 2, active:true}, {id: 3, active: true}, {id: 4, active: false}]},
        {id: 5, cpus:[{id: 1, active: true}, {id: 2, active:false}, {id: 3, active: false}, {id: 4, active: false}]},
        {id: 6, cpus:[{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: false}, {id: 4, active: true}]},
     ]}];

    var racks = rackList.map((rack) =>
                             <Rack key={rack.id} rack_id={rack.id} servers={rack.servers} />);
    return (
      <div>
      {racks}
      </div>
    );
  }
}

