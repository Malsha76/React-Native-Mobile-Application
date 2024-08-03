export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#ff89a9',
  red: '#C04345',
  blue: '#2D4F8F',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
  light: '#F3F4FB',
  darkBlue: '#7978B5',
 
};

export interface Item {
  id: number;
  category: string;
  productName: string;
  productPrice: number;
  newproductPrice: number;
  description: string;
  isOff: boolean;
  offPercentage?: number;
  productImage: any;
  isAvailable: boolean;
  productImageList: any[];
  tax: number;
}
export const Items: Item[] = [
  {
    id: 1,
    category: 'newarrivals',
    productName: "Elegant Women's Dress Stylish Evening Gown Chic Casual Wear Luxury Brand",
    productPrice: 2000,
    newproductPrice: 2000,
    description:
      '',
    isOff: false,
    offPercentage: 0,
    productImage: require('../database/images/products/Goum1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Goum1.jpg'),
      require('../database/images/products/Goum2.jpg'),
      require('../database/images/products/Goum3.jpg'),
    ],
    tax: 0,
  },
  {
    id: 2,
    category: 'newarrivals',
    productName: "Trendy Women's Blouse Comfortable Casual Top Fashionable Work Shirt Classic Design",
    productPrice: 2800,
    newproductPrice: 2660,
    description:
      '',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Blouse3.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Blouse3.jpg'),
      require('../database/images/products/Blouse4.jpg'),
      require('../database/images/products/Blouse6.jpg'),
    ],
    tax: 5,
  },
  {
    id: 3,
    category: 'newarrivals',
    productName: "Fashionable Women's Jeans Slim Fit Trendy Casual Pants Versatile Daily Wear",
    productPrice: 3500,
    newproductPrice: 3500,
    description:
      '',
    isOff: false,
    offPercentage: 0,
    productImage: require('../database/images/products/jeans1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/jeans1.jpg'),
      require('../database/images/products/jeans2.jpg'),
      require('../database/images/products/jeans3.jpg'),
    ],
    tax: 8,
  },
  {
    id: 4,
    category: 'newarrivals',
    productName: "Premium Women's Jacket Stylish Warm Winter Coat Elegant",
    productPrice: 5000,
    newproductPrice: 5000,
    description:
      '',
    isOff: false,
    productImage: require('../database/images/products/jackets1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/jackets1.jpg'),
      require('../database/images/products/jackets2.jpg'),
      require('../database/images/products/jackets3.jpg'),
    ],
    tax: 5,
  },
  {
    id: 5,
    category: 'mostpopular',
    productName:
     "High-Performance Women's Yoga Pants Breathable Stretch Fit Workout Gear Active Lifestyle",
    productPrice: 1000,
    newproductPrice: 950,
    description:
      '',
    isOff: true,
    offPercentage: 5,
    productImage: require('../database/images/accessories/yogapants1.jpeg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/yogapants1.jpeg'),
      require('../database/images/accessories/yogapants4.jpg'),
      require('../database/images/accessories/yogapants3.jpg'),
    ],
    tax: 0,
  },
  {
    id: 6,
    category: 'mostpopular',
    productName:
      "Cozy Sweaters & Cardigans Stylish Knitwear Warm",
    productPrice: 550,
    newproductPrice: 550,
    description:
      '',
    isOff: false,
    productImage: require('../database/images/accessories/sweater2.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/sweater2.jpg'),
      require('../database/images/accessories/sweater1.jpg'),
      require('../database/images/accessories/sweater3.jpg'),
    ],
    tax: 10,
  },
  {
    id: 7,
    category: 'mostpopular',
    productName: "Elegant Skirts A-Line Mini & Midi Flirty",
    productPrice: 2000,
    newproductPrice: 2000,
    description:
      '',
    isOff: false,
    productImage: require('../database/images/accessories/skirt2.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/accessories/skirt2.jpg'),
      require('../database/images/accessories/skirt1.jpg'),
      require('../database/images/accessories/skirt3.jpg'),
    ],
    tax: 5,
  },
  {
    id: 8,
    category: 'mostpopular',
    productName:
      "Versatile Jumpsuits Stylish Rompers Effortless One-Piece Outfits Trendy & Comfortable",
    productPrice: 4500,
    newproductPrice: 4050,
    offPercentage: 10,
    description:
      '',
    isOff: true,
    productImage: require('../database/images/accessories/jumpsuit1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/jumpsuit1.jpg'),
      require('../database/images/accessories/jumpsuit1.jpg'),
      require('../database/images/accessories/jumpsuit1.jpg'),
    ],
    tax: 0,
  },
];
