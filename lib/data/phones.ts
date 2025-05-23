export type ItemType = {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: any;
  description: string;  
}


const phones:ItemType[] = [
  {
    id: 1,
    name: 'IQOO Z9s',
    brand: 'IQOO',
    price: 999,
    imageUrl: require('@/assets/images/phones/1.webp'),
    description: 'iQOO Z9s 5G (Titanium Matte, 8GB RAM, 128GB Storage) | 120 Hz 3D Curved AMOLED Display | 5500 mAh Ultra-Thin Battery | Dimesity 7300 5G Processor |',
  },
  {
    id: 2,
    name: 'Realme GT 6T',
    brand: 'Realme',
    price: 1199,
    imageUrl: require('@/assets/images/phones/2.webp'),
    description: "realme GT 6T 5G (Fluid Silver,12GB RAM+256GB Storage) | India's 1st 7+ Gen 3 Flagship Chipset | 1.5M + AnTuTu Score | 5500mAh+120W | The World's Brightest Flagship Display",
  },
  {
    id: 3,
    name: 'Google Pixel 7 Pro',
    brand: 'Google',
    price: 899,
    imageUrl: require('@/assets/images/phones/3.webp'),
    description: 'Google\'s flagship phone with stock Android experience.',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S23',
    brand: 'Samsung',
    price: 1099,
    imageUrl: require('@/assets/images/phones/4.webp'),
    description: 'Samsung\'s flagship phone with top-notch camera and performance.',
  },
  {
    id: 5,
    name: 'OnePlus 11',
    brand: 'OnePlus',
    price: 799,
    imageUrl: require('@/assets/images/phones/5.webp'),
    description: 'OnePlus\'s flagship phone with fast charging and smooth performance.',
  },
]




export default phones