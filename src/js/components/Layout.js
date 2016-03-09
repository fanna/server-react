import React from "react";

import { Socket } from "phoenix-js";

import Rack from "./Rack";

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

let socket = new Socket("ws://localhost:4000/socket");

socket.connect();

var rackList= [
  {id: 1, servers:[
  {id: 1, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 2, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 3, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 4, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 5, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 6, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
]},
{id: 2, servers:[
  {id: 1, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 2, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 3, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 4, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 5, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 6, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
]},
{id: 3, servers:[
  {id: 1, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 2, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 3, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 4, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 5, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 6, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
]},
{id: 4, servers:[
  {id: 1, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 2, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 3, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 4, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 5, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 6, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
]},
{id: 5, servers:[
  {id: 1, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 2, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 3, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 4, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 5, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 6, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
]},
{id: 6, servers:[
  {id: 1, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 2, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 3, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 4, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 5, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
  {id: 6, cpus:[{id: 1, active: false}, {id: 2, active: false}, {id: 3, active: false}, {id: 4, active: false}]},
]}];

let channel = socket.channel("rooms:lobby", {})
let json = "false"

channel.join().receive("ok", () => {
  console.log("Joined successfully")
})

var x = 0
var y = 0
var z = 0
var data = true

channel.on("new_msg", payload => {
  data  = payload.body
  console.log("Status change on Rack: " + x + " Server: " + y + " CPU: " + z);
  rackList[x].servers[y].cpus[z].active = data;
})

export default class Layout extends React.Component {
  componentDidMount() {
     this._interval = setInterval(() => {
       channel.push("new_msg", {body: json})
       x = [0,1,2,3,4,5].sample()
       y = [0,1,2,3,4,5].sample()
       z = [0,1,2,3].sample()
       this.forceUpdate();
     }, 500);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {

    var racks = rackList.map((rack) =>
                             <Rack key={rack.id} rack_id={rack.id} servers={rack.servers} />);
    return (
      <div>
      {racks}
      </div>
    );
  }
}

