const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "If condition and V-Show",
    };
  },
}).mount("#header-root");

createApp({
  data() {
    return {
      age: 24,
      name: "Hossam",
    };
  },

  methods: {},

  computed: {},
}).mount("#app-root");
