const { createApp } = Vue;

const vue_1 = createApp({
  data() {
    return {
      age: 10,

    };
  },

  methods: {
    checkRefs() {
      //returning all references of Vur js instance
      console.log("Get All References in Vue Instance  : ");
      console.log(this.$refs);

      console.log("Get Reference of myInput  : ");
      console.log(this.$refs.myInput);

      console.log("Get Reference value of myInput  : ");
      console.log(this.$refs.myInput.value);

      this.age = this.$refs.myInput.value;
    },
  },
}).mount("#app-root");
