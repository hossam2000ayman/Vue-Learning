const { createApp } = Vue;

createApp({
  data() {
    return {
    number : 0,
    };
  },

  methods:{
    testFunction(){
        this.number++;
    }
  }
}).mount("#app-root");

// const name = "Ahmed";
