import { writable } from 'svelte/store';

const empty = { left: 0, op: '', right: 0 };

function calculate(left, op, right) {
  switch (op) {
    case '+': return left + right;
    case '-': return left - right;
    case 'x': return left * right;
    case '÷': return left / right;
  }
}

export const stack = writable(empty);

export function update({ left, op, right }, token) {
  if (token === 'AC') {
    return empty;
  } else if (op === '' && Number.isInteger(token)) {
    return {
      left: left * 10 + token,
      op,
      right,
    }
  } else if (op !== '' && Number.isInteger(token)) {
    return {
      left,
      op,
      right: right * 10 + token,
    }
  } else if (['+', '-', '÷', 'x'].includes(token)) {
    return {
      left,
      op: token,
      right,
    }
  } else if (token === '=' && op !== '') {
    return {
      left: calculate(left, op, right),
      op: '',
      right: 0,
    }
  } else if (token === '+/-') {
    return right
      ? {
        left,
        op,
        right: right * -1,
      }
      : {
        left: left * -1,
        op,
        right,
      }
  } else if (token === '%') {
    return right
      ? {
        left,
        op,
        right: right * .01,
      }
      : {
        left: left * .01,
        op,
        right,
      }
  }

  return { left, right, op }
}
