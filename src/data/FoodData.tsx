// import burger from "../assets/burger.jpg";
// import pizza from "../assets/pizza.jpg";
// import sushi from "../assets/sushi.jpg";

// export const foodData = [
//   {
//     image: burger,
//     name: "The Burger House",
//     foodName: "Classic Cheeseburger",
//     price: "₹199",
//     rating: 4.5,
//   },
//   {
//     image: pizza,
//     name: "Italian Pizza Hub",
//     foodName: "Margherita Pizza",
//     price: "₹299",
//     rating: 4.2,
//   },
//   {
//     image: pizza,
//     name: "Italian Pizza Hub",
//     foodName: "Pepperoni Pizza",
//     price: "₹349",
//     rating: 4.3,
//   },
//   {
//     image: pizza,
//     name: "Italian Pizza Hub",
//     foodName: "BBQ Chicken Pizza",
//     price: "₹379",
//     rating: 4.4,
//   },
//   {
//     image: sushi,
//     name: "Sushi Heaven",
//     foodName: "Salmon Sushi Roll",
//     price: "₹499",
//     rating: 4.8,
//   },
// ];
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import sushi from "../assets/sushi.jpg";

export const foodData = [
  {
    image: burger,
    name: "The Burger House",
    originalPrice: 199,
    discountPercentage: 20, // 20% off
    rating: 4.5,
  },
  {
    image: pizza,
    name: "Italian Pizza Hub",
    originalPrice: 299,
    discountPercentage: 10, // 10% off
    rating: 4.2,
  },
  {
    image: sushi,
    name: "Sushi Heaven",
    originalPrice: 499,
    // No discount means full price
    rating: 4.8,
  },
];
