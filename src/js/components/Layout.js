import React from "react";

import { Socket } from "phoenix-js";

import Rack from "./Rack";

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

var rack = 0
var server = 0
var cpu = 0
var cpu_status = true

channel.on("new_msg", payload => {
  cpu_status  = payload.status
  rack = payload.rack
  server = payload.server
  cpu = payload.cpu
  console.log("Status change on Rack: " + rack + " Server: " + server + " CPU: " + cpu);
  console.log(cpu_status)
  rackList[rack].servers[server].cpus[cpu].active = cpu_status;
})

export default class Layout extends React.Component {
  componentDidMount() {
     this._interval = setInterval(() => {
       channel.push("new_msg", {body: json})
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

