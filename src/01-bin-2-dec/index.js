import React, { createRef, Component } from 'react';

import { Container } from './styles';

export default class Bin2Dec extends Component {
  numberRef = createRef();

  state = {
    decimal: '',
  };
  //128  64  32  16  8  4  2  1
  // 0   0   0   0   1  1  0  1
  //1 + 4 + 8 = 13
  bin2DecConverter = () => {
    const binNumber = this.numberRef.current.value;
    let binValue = 1;
    let sum = 0;

    binNumber
      .split('')
      .reverse()
      .map((number) => {
        if (number > 1) {
          console.log('> que 1');
          this.setState({ decimal: 'wroooong' });
          return;
        } else {
          if (number == 1) {
            sum += binValue;
          }
          binValue *= 2;
          this.setState({ decimal: sum });
        }
      });
  };

  render() {
    const { decimal } = this.state;
    return (
      <Container>
        <label htmlFor='num'>Number</label>
        <input id='num' maxLength={8} ref={this.numberRef} />

        <h1>{decimal}</h1>

        <button onClick={this.bin2DecConverter}>Click</button>
      </Container>
    );
  }
}
