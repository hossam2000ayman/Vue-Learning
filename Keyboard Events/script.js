const { createApp } = Vue;

let name = document.getElementById("nameInput");
createApp({
  data() {
    return {};
  },
  methods: {
    printKeyUp() {
      console.log("Key Up");
    },
    printKeyDown() {
      console.log("Key Down");
    },
    printKeyDownEnter() {
      console.log("Key Down Enter");
    },
    printKeyUpEnter() {
      console.log("Key Up Enter");
    },
    printKeyUpAltEnter() {
      console.log("Key Up Alt + Enter");
    },
  },
}).mount("#app-root");

// input.addEventListener('keyup', () => {
//     console.log("test key up");
// })
