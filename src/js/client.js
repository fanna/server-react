import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import WebSocketTest from "./socket.js";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
