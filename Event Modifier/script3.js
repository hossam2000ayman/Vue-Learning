const { createApp } = Vue;

createApp({
  data() {
    return {
      number: 0,
    };
  },

  methods: {
    testClickOnce() {
      console.log("test once");
    },
  },
}).mount("#app-root");

//Event Modifiers
// (event) => {
//   event.preventDefault();
// }
