const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Looping Data (v-for)",
    };
  },
}).mount("#header-root");

createApp({
  data() {
    return {
      name: "Hossam",
      names: ["Hossam", "Moaz", "Amr", "ElMelegy", "Abdullah"],
      students: [
        {
          name: "Hossam",
          id: 1,
          age: 34,
          city: "Cairo",
          project: "MOD",
        },
        {
          name: "Amr",
          id: 2,
          age: 23,
          city: "Alex",
          project: "ARROW",
        },
        {
          name: "ElMelegy",
          id: 3,
          age: 56,
          city: "Aswan",
          project: "AXA",
        },
        {
          name: "Moaz",
          id: 4,
          age: 24,
          city: "Helwan",
          project: "MOD",
        },
        {
          name: "Abdullah",
          id: 5,
          age: 24,
          city: "Cairo",
          project: "ARROW",
        },
      ],
    };
  },
}).mount("#app-root");
/* 
in javascript
for (let i = 0; i < students.length; i++) {
  let myH2 = document.createElement("h2");
  myH2.innerHTML = students[i];
  myParent.appendChild(myH2);
}
 */
