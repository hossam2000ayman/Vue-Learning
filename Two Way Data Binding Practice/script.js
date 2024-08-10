const { createApp } = Vue;

createApp({
  // fields or methods
  //fields ==> name:'value'
  //methods ==> sendData(){console.log('data');}
  data() {
    return {
      age: 29,
      isActive: false,
      newUser: {
        name: "",
        email: "",
        password: "",
      },
      hobbies: ["games", "sport", "programming", "drawing"],
      myFriends: [
        { name: "yasser", age: 29 },
        { name: "asmaa", age: 19 },
        { name: "mohamed", age: 34 },
        { name: "ayman", age: 49 },
      ],
    };
  },

  //methods
  methods: {
    // counter: 0,
    sendData() {
      console.log(this.newUser);
    },
  },
}).mount("#app-root");
