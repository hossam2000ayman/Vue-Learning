// const app = Vue.createApp({})
// app.mount('#app-root')
const { createApp } = Vue;

createApp({
  data() {
    return {
      myColor: "",
      myFont: 0,
    };
  },
}).mount("#app-root");

//this is from title 
createApp({
  data() {
    return {
      title: "Dynamic Classes& Style",
    };
  },
}).mount("#header-root");
