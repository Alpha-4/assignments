/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.res = 0;
    this.st = [];
  }

  add(num) {
    this.res += num;
  }

  subtract(num) {
    this.res -= num;
  }

  multiply(num) {
    this.res *= num;
  }

  divide(num) {
    if (num == 0) throw Error();
    this.res /= num;
  }

  clear(num) {
    this.res = 0;
  }

  getResult(num) {
    return this.res;
  }

  calculate(str) {
    let st = [];
    //var i=0;
    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[0-9/+/*///-/() ]/i)) throw Error();
      else if (str[i].match(/[0-9]/i)) st.push(parseFloat(str[i]));
      else if (str[i] === " ") continue;
      else if (str[i] === "(") st.push(str[i]);
      else if (str[i] === ")") {
        a = st.pop();
        b = st.pop();
        if (b !== "(") throw Error();
      } else {
        try {
          if (str[i] == "+") {
            a = st.pop();
            b = st.pop();
            c = a + b;
            st.push(c);
          } else if (str[i] == "-") {
            a = st.pop();
            b = st.pop();
            c = b - a;
            st.push(c);
          }
          if (str[i] == "*") {
            a = st.pop();
            b = st.pop();
            c = b * a;
            st.push(c);
          }
          if (str[i] == "/") {
            a = st.pop();
            b = st.pop();
            c = b / a;
            st.push(c);
          }
        } catch (e) {
          throw Error();
        }
      }
    }
    res = st.pop();
    if (st.length > 0) throw Error();
  }
}

module.exports = Calculator;
