const { v4: uuidv4 } = require("uuid");

class Dishes {
  id: string;
  name: string;
  price: number;
  soldout: boolean;
  image: string;
  quantity: number;

  constructor(name: string, price: number, image: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.soldout = false;
    this.image = image;
    this.quantity = 0;
  }
}

const chickenRice = new Dishes(
  "chicken rice",
  120000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/1.PNG?raw=true"
);

const dryChicken = new Dishes(
  "fry chicken",
  120000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/2.PNG?raw=true"
);

const tunaSalad = new Dishes(
  "tuna salad",
  240000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/3.PNG?raw=true"
);

const pumpkinSoup = new Dishes(
  "pumpkin soup",
  140000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/4.PNG?raw=true"
);

const sideSalad = new Dishes(
  "side salad",
  100000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/5.PNG?raw=true"
);

const pizza = new Dishes(
  "pizza",
  220000,
  "https://github.com/HoanghoDev/addtocardv2/blob/main/image/6.PNG?raw=true"
);

const dishes = [
  chickenRice,
  dryChicken,
  tunaSalad,
  pumpkinSoup,
  sideSalad,
  pizza,
];

export default dishes;
