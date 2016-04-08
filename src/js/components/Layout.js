import React from "react";

import { Socket } from "phoenix-js";

import Server from "./Server";

//let socket = new Socket("ws://rocky-ridge-42687.herokuapp.com/socket")
let socket = new Socket("ws://localhost:4000/socket")

socket.connect();

var serverList= [
  {id: 1, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 2, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 3, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 4, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 5, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 6, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 7, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 8, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 9, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  },
  {id: 10, cpus:[
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false}]
  }
]

let channel = socket.channel("rooms:lobby", {})
let json = "false"

channel.join().receive("ok", () => {
  console.log("Joined successfully")
})

var server = 0
var cpu = 0
var cpu_status = true

channel.on("new_msg", payload => {
  cpu_status  = payload.status
  server = payload.server
  cpu = payload.cpu
  console.log("Status change on Server: " + server + " CPU: " + cpu);
  console.log(cpu_status)
  serverList[server].cpus[cpu].active = cpu_status;
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

    var servers = serverList.map((server) =>
                             <Server key={server.id} server_id={server.id} cpus={server.cpus} />);
    return (
      <div>
      {servers}
      </div>
    );
  }
}

