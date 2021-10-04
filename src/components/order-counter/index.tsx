import React, {useState} from 'react';
import {Button, Container, Input} from './style';

export default function OrderCounter() {
  const [counter, setCounter] = useState(1);
  const incrementCount = () => {
    setCounter(prev => prev + 1);
  };
  const decrementCount = () => {
    setCounter(prev => (prev > 1 ? prev - 1 : prev));
  };

  const InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);

    if (isNaN(value)) {
      value = 0;
    }
    setCounter(value);
  };
  return (
    <Container>
      <Button onClick={decrementCount}>-</Button>
      <Input type="number" onChange={InputHandler} value={counter.toString()} />
      <Button onClick={incrementCount}>x</Button>
    </Container>
  );
}
