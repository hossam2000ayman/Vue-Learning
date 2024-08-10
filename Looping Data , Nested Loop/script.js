const { createApp } = Vue;

createApp({
  data() {
    return {
      products: [
        {
          title: "Lizard Shoes",
          description: "this is a very cool shoes with cool color",
          price: "50$",
          brand: "Adidass",
          image: "./images/lizard shoes.jpeg",
          colors: ["red", "green", "orange", "blue", "yellow"],
          id: 1,
        },
        {
          title: "Girl Bag",
          description: "this is a very cool bag with cool color",
          price: "70$",
          brand: "Nike",
          image: "./images/girl bag.jpeg",
          colors: ["red", "blue"],
          id: 2,
        },
        {
          title: "Lenovo Laptop",
          description: "this is a very cool laptop",
          price: "800$",
          brand: "Lenovo",
          image: "./images/lenovo laptop.jpeg",
          colors: ["black"],
          id: 3,
        },
        {
          title: "Apple Watch",
          description: "this is a very cool watch with cool color",
          price: "500$",
          brand: "Apple",
          image: "./images/apple watch.jpeg",
          colors: ["pink", "orange", "yellow"],
          id: 4,
        },
      ],
    };
  },
}).mount("#app-root");
