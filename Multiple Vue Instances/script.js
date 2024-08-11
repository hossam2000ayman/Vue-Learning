const { createApp } = Vue;

/*How to access on field or method through other Vue instances */
/* */
const vue_1 = createApp({
  data() {
    return {
      name : "Hasan",
      age: 15,
      products: [
        {
          title: "Lizard Shoes",
          description: "this is a very cool shoes with cool color",
          price: "50$",
          brand: "Adidass",
          image: './images/lizard shoes.jpeg',
          id: 1,
        },
        {
          title: "Girl Bag",
          description: "this is a very cool bag with cool color",
          price: "70$",
          brand: "Nike",
          image: "./images/girl bag.jpeg",
          id: 2,
        },
        {
          title: "Lenovo Laptop",
          description: "this is a very cool laptop",
          price: "800$",
          brand: "Lenovo",
          image: "./images/lenovo laptop.jpeg",
          id: 3,
        },
        {
          title: "Apple Watch",
          description: "this is a very cool watch with cool color",
          price: "500$",
          brand: "Apple",
          image: "./images/apple watch.jpeg",
          id: 4,
        },
      ],
    };
  },
}).mount("#app-root");


const vue_2 = createApp({
  data() {
    return {
      name: "Hossam",
      names: ["John", "Moaz", "Samir"],
    }
  },

  methods: {
    increaseAge(){
      //how to change the age fields from other Vue instance
      vue_1.age++;
    }
  },
}).mount("#app-root-2");
