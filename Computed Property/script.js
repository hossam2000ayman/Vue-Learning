const { createApp } = Vue;

createApp({
  data() {
    return {
      numberOne: "0",
      numberTwo: "0",
      currentOperation: "",
    };
  },

  //property called methods
  methods: {
    firstIncrement() {
      console.log("First function is fire Increment");
      return this.numberOne++;
    },
    firstDecrement() {
      console.log("First function is fire Decrement");
      return this.numberOne--;
    },
    secondIncrement() {
      console.log("Second function is fire Increment");
      return this.numberTwo++;
    },
    secondDecrement() {
      console.log("Second function is fire Decrement");
      return this.numberTwo--;
    },
    calculator(operation) {
      switch (operation) {
        case "+":
          return this.numberOne + this.numberTwo;
        case "-":
          return this.numberOne - this.numberTwo;
        case "*":
          return this.numberOne * this.numberTwo;
        case "/":
          return this.numberOne / this.numberTwo;
        default:
          return 0;
      }
    },
  },

  //property called computed
  //todo: ask Amr
  //computed function but it must return a value and it is not callable it just get the value
  computed: {
    firstComputed() {
      return this.numberOne;
    },
    secondComputed() {
      return this.numberTwo;
    },
  },
}).mount("#app-root");
