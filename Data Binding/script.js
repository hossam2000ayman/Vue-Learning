const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Ahmed",
      age: 29,
      link: "https://www.google.com",
    };
  },

  methods: {
    sayHi(time, name) {
      return "Good " + time + " " + name;
    },
    sayTest: function () {},
  },
}).mount("#app-root");

// const name = "Ahmed";
