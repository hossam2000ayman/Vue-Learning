const { createApp } = Vue;

//global variables will be modified and viewed for every vue instances
const data = {
  age: 29,
  name: "Hossam",
};

//initialize the component
//now the component is reusable for multiple Vue Instances
const MyComponent = {
  template: `
  <h2> Hello from my first component </h2>
  <h3> My Name is {{name}} </h3>
  <h3> My Age is  {{age}} </h3>
  <button @click="changeAge()"> Increment Age </button>
  `,
  data() {
    return data 
  },

  methods: {
    changeAge() {
      this.age++;
    },
  },
};

const app_1 = createApp({
  data() {
    return {};
  },
  //retrieve the component
  components: {
    MyComponent,
  },
}).mount("#app-root-1");

const app_2 = createApp({
  data() {
    return {};
  },
  //retrieve the components
  components: {
    MyComponent,
  },
}).mount("#app-root-2");
