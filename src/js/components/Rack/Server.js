import React from "react";

import CPU from "./Server/CPU";

export default class Server extends React.Component {
  render() {
    return (
      <td>
        <table>
          <CPU />
          <CPU />
          <CPU />
          <CPU />
        </table>
      </td>
    );
  }
}
