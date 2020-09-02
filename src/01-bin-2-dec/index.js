import React, { Component } from "react";

import { Container } from "./styles";

export default class Bin2Dec extends Component {
  state = {
    number: null,
  };
  //128  64  32  16  8  4  2  1
  //         0   0   1  1  0  1
  //1 + 4 + 8 = 13
  dec2binConverter = (binNumber) => {
    const arr = binNumber.split("");
    const isBin = arr.includes("1") || arr.includes("0");

    console.log(isBin);

    binNumber
      .split("")
      .reverse()
      .map((num) => {
        console.log(num);
      });
  };

  render() {
    const { number } = this.state;
    return (
      <Container>
        <label htmlFor="num">Number</label>
        <input
          id="num"
          onChange={(e) => this.setState({ number: e.target.value })}
        />

        <button onClick={() => this.dec2binConverter(number)}>Click</button>
      </Container>
    );
  }
}
