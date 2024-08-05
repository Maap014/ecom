import thumbnail1 from "../../src/assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../src/assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../src/assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../src/assets/images/image-product-4-thumbnail.jpg";
import product1 from "../../src/assets/images/image-product-1.jpg";
import product2 from "../../src/assets/images/image-product-2.jpg";
import product3 from "../../src/assets/images/image-product-3.jpg";
import product4 from "../../src/assets/images/image-product-4.jpg";

export const products = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    initailPrice: 250,
    discountRate: 50,
    currentPrice: 125,
    thumbnails: [
      { thumnail: thumbnail1 },
      { thumnail: thumbnail2 },
      { thumnail: thumbnail3 },
      { thumnail: thumbnail4 },
    ],
    productImage: [
      { image: product1 },
      { image: product2 },
      { image: product3 },
      { image: product4 },
    ],
  },
  {
    id: 2,
    name: "Fall Limited Edition Sneakers2",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    initailPrice: 250,
    discountRate: 30,
    currentPrice: 175,
    thumbnails: [
      { thumnail: thumbnail1 },
      { thumnail: thumbnail2 },
      { thumnail: thumbnail3 },
      { thumnail: thumbnail4 },
    ],
    productImage: [
      { image: product1 },
      { image: product2 },
      { image: product3 },
      { image: product4 },
    ],
  },
  {
    id: 3,
    name: "Fall Limited Edition Sneakers3",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    initailPrice: 250,
    discountRate: 60,
    currentPrice: 100,
    thumbnails: [
      { thumnail: thumbnail1 },
      { thumnail: thumbnail2 },
      { thumnail: thumbnail3 },
      { thumnail: thumbnail4 },
    ],
    productImage: [
      { image: product1 },
      { image: product2 },
      { image: product3 },
      { image: product4 },
    ],
  },
];
