
var ws = new WebSocket("ws://localhost:4000/");

ws.onopen = function()
{
  ws.send("Message to send");
  alert("Message is sent...");
};

ws.onmessage = function (evt)
{
  var received_msg = evt.data;
  alert("Message is received...");
};

ws.onclose = function()
{
  // websocket is closed.
  alert("Connection is closed...");
};
