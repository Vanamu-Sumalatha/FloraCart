// Flower Categories
export const categories = [
  {
    id: 'birthday',
    name: 'Birthday Bouquets',
    description: 'Celebrate special moments with our vibrant birthday arrangements.',
    image: 'https://media.istockphoto.com/id/535275231/photo/bouquet-of-spring-tulips-flowers.jpg?s=612x612&w=0&k=20&c=-d5M2fqqIsWqYyMYaJ-GmkmBBL-fcFSRFUYIvkqvp_4=',
    slug: 'birthday'
  },
  {
    id: 'anniversary',
    name: 'Anniversary Bouquets',
    description: 'Express your love with our romantic anniversary bouquets.',
    image: 'https://media.istockphoto.com/id/157312521/photo/flower-bouquet.jpg?s=612x612&w=0&k=20&c=JebsoWZ3feukFL_WbkbU_cJ2Ba9KqHLCwn-Xq8N_CRk=',
    slug: 'anniversary'
  },
  {
    id: 'wedding',
    name: 'Wedding Flowers',
    description: 'Make your special day even more beautiful with our wedding flower arrangements.',
    image: 'https://media.istockphoto.com/id/157531371/photo/three-dozen-red-roses.jpg?s=612x612&w=0&k=20&c=6Y5vmGjaOkSBAoBW-hpTB8cr_FRFykaUzvbe2K82u8o=',
    slug: 'wedding'
  },
  {
    id: 'sympathy',
    name: 'Sympathy Flowers',
    description: 'Express your condolences with our thoughtful sympathy arrangements.',
    image: 'https://media.istockphoto.com/id/174701205/photo/multi-flower-bouquet-tied-with-white-ribbon-lying-on-side.jpg?s=612x612&w=0&k=20&c=GafeBtTvs-RxPSDIG4X-CdoytNKoSO7-e_ZgMGknSTA=',
    slug: 'sympathy'
  },
  {
    id: 'seasonal',
    name: 'Seasonal Bouquets',
    description: 'Fresh arrangements featuring the best flowers of each season.',
    image: 'https://media.istockphoto.com/id/611081482/photo/vintage-flowers-pattern-with-lilies-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=jSbJaK-7Oy0JUEI5ye_zKzaj0N5ZzFeUQGHLtPiEo4U=',
    slug: 'seasonal'
  },
  {
    id: 'custom',
    name: 'Custom Bouquets',
    description: 'Create your perfect arrangement with our custom bouquet service.',
    image: 'https://media.istockphoto.com/id/469943883/photo/flowers-bouquet-perfect-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Oke8Ca0QkPhCBzPasEfbc40VVqisLBK8iIftq0ZMfwA=',
    slug: 'custom'
  }
];

// Flower Products
export const products = [
  // Birthday Bouquets
  {
    id: 1,
    name: 'Spring Blossom Bouquet',
    price: 49.99,
    category: 'birthday',
    occasion: ['birthday', 'spring'],
    images: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593691509543-c55fb32e1ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    image: 'https://media.istockphoto.com/id/155598196/photo/colorful-floral-bouquet-in-glass-vase-with-pink-ribbon-isolated.jpg?s=612x612&w=0&k=20&c=MDmwe0AAAD_y-GxU89aUpHcwO6HY6-xpOPtWuUv0-cI=',
    description: 'A vibrant arrangement of spring flowers including tulips, daffodils, and hyacinths.',
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: 'Birthday Celebration',
    price: 59.99,
    category: 'birthday',
    occasion: ['birthday'],
    images: [
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593691509543-c55fb32e1ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    image: 'https://media.istockphoto.com/id/155006614/photo/pink-and-mauve-rose-flower-bouquet-isolated-on-white-shadows.jpg?s=612x612&w=0&k=20&c=hyIa5FEuLbI1wG9pfdepF7bXuVsC0pZZw-hyXuLUY_Y=',
    description: 'A colorful mix of roses, lilies, and gerberas to celebrate any birthday.',
    rating: 4.9,
    reviews: 32
  },
  {
    id: 3,
    name: 'Sunny Sunflowers',
    price: 39.99,
    category: 'birthday',
    occasion: ['birthday', 'summer'],
    image: 'https://media.istockphoto.com/id/1470078354/photo/flowers-of-the-cosmos-and-artificial-bouquets-margarita-tulip-in-vintage-style-wooden-boxes.jpg?s=612x612&w=0&k=20&c=iR_NRN2kGQso66PeGzAWMRyKYIpNTkZXsXermUeERO4=',
    description: 'Bright and cheerful sunflowers that bring warmth and happiness to any space.',
    rating: 4.7,
    reviews: 18
  },
  {
    id: 4,
    name: 'Lavender Fields',
    price: 44.99,
    category: 'birthday',
    occasion: ['birthday', 'summer'],
    image: 'https://media.istockphoto.com/id/155395281/photo/purple-and-white-bridal-bouquet.jpg?s=612x612&w=0&k=20&c=DtH3nDc9AHy43TY15hORBOMQ310cgg_QLHGakCySb_Y=',
    description: 'A soothing arrangement of lavender and purple flowers for a calming presence.',
    rating: 4.6,
    reviews: 15
  },
  {
    id: 5,
    name: 'Tropical Paradise',
    price: 54.99,
    category: 'birthday',
    occasion: ['birthday', 'summer'],
    image: 'https://media.istockphoto.com/id/155370763/photo/a-very-colorful-bouquet-of-flowers.jpg?s=612x612&w=0&k=20&c=h-9DEIVNpnZlcTJ8wvffQ-wpWMhIH14jorDk3p6XCvU=',
    description: 'Exotic flowers in vibrant colors that bring a tropical feel to any space.',
    rating: 4.8,
    reviews: 22
  },
  {
    id: 6,
    name: 'Autumn Harvest',
    price: 49.99,
    category: 'birthday',
    occasion: ['birthday', 'fall'],
    image: 'https://media.istockphoto.com/id/115799604/photo/big-flower-bouquet-isolated-on-white.jpg?s=612x612&w=0&k=20&c=be64Sek-iJiJItUkSifepDQHeA-GVBXfHA2xP3cGRvw=',
    description: 'Warm-toned flowers and foliage that capture the essence of autumn.',
    rating: 4.7,
    reviews: 19
  },
  {
    id: 7,
    name: 'Winter Wonderland',
    price: 59.99,
    category: 'birthday',
    occasion: ['birthday', 'winter'],
    image: 'https://media.istockphoto.com/id/175446963/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=jqctOJV58asSji5sBI45Bm50uBj3vZnqdZrd8K1FUa8=',
    description: 'Elegant white flowers and greenery that evoke the beauty of winter.',
    rating: 4.9,
    reviews: 27
  },
  {
    id: 8,
    name: 'Garden Fresh',
    price: 45.99,
    category: 'birthday',
    occasion: ['birthday', 'spring'],
    image: 'https://media.istockphoto.com/id/182245820/photo/beautiful-autumn-bouquet.jpg?s=612x612&w=0&k=20&c=2hh4xH75mAOxNC6qc_cPgUI_-cEPN8YUh_yTamP21WQ=',
    description: 'A mixed bouquet of garden flowers that brings the outdoors inside.',
    rating: 4.6,
    reviews: 16
  },
  
  // Anniversary Bouquets
  {
    id: 9,
    name: 'Romantic Roses',
    price: 59.99,
    category: 'anniversary',
    occasion: ['anniversary', 'valentine'],
    image: 'https://media.istockphoto.com/id/157395663/photo/roses.jpg?s=612x612&w=0&k=20&c=RGOgSwqTLrFvqdayJiuzkoWUJWONN1un7p3qIsH8vdk=',
    description: 'A classic bouquet of red roses, perfect for expressing love and passion.',
    rating: 4.9,
    reviews: 32
  },
  {
    id: 10,
    name: 'Love in Bloom',
    price: 64.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/874103164/photo/heart-of-roses.jpg?s=612x612&w=0&k=20&c=yi2dBv3Q3GFJ4kBzMgyOiJLymCesNngWnDwtiESG9xE=',
    description: 'A romantic mix of roses, peonies, and hydrangeas in soft pink tones.',
    rating: 4.8,
    reviews: 28
  },
  {
    id: 11,
    name: 'Eternal Love',
    price: 69.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/95492963/photo/colorful-bouquet-or-posy-with-stems-wrapped-in-ribbon.jpg?s=612x612&w=0&k=20&c=CQL-57hBNe3KHgGv1tDr5uvAa79HN6NP7XXlHUbq4os=',
    description: 'A luxurious arrangement of white roses and orchids symbolizing eternal love.',
    rating: 4.9,
    reviews: 35
  },
  {
    id: 12,
    name: 'Sweet Memories',
    price: 54.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=',
    description: 'A sweet arrangement of pastel-colored flowers perfect for celebrating years of love.',
    rating: 4.7,
    reviews: 22
  },
  {
    id: 13,
    name: 'Golden Anniversary',
    price: 79.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/511674764/photo/beautiful-bouquet-of-bright-flowers-in-vase-isolated-white.jpg?s=612x612&w=0&k=20&c=pYRKmOJHTY-ivWEKigKOvlvyvTOxwQqJsVLrWyAMMUw=',
    description: 'A special arrangement with golden accents to celebrate 50 years of marriage.',
    rating: 5.0,
    reviews: 18
  },
  {
    id: 14,
    name: 'Silver Anniversary',
    price: 74.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'An elegant arrangement with silver accents to celebrate 25 years of marriage.',
    rating: 4.9,
    reviews: 15
  },
  {
    id: 15,
    name: 'Ruby Anniversary',
    price: 69.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/155389476/photo/peony-flowers-bouquet.jpg?s=612x612&w=0&k=20&c=ocknxERXUyepn4ddAm9AfisLzyJbfvvmqhdiXjUJdfs=',
    description: 'A stunning arrangement with ruby-red flowers to celebrate 40 years of marriage.',
    rating: 4.8,
    reviews: 12
  },
  {
    id: 16,
    name: 'First Anniversary',
    price: 49.99,
    category: 'anniversary',
    occasion: ['anniversary'],
    image: 'https://media.istockphoto.com/id/171146251/photo/beautiful-bouquet.jpg?s=612x612&w=0&k=20&c=lNmm6IRIHJqBmZgP0tT2UVhU2uolxLNB3k8UnofjWxY=',
    description: 'A special arrangement to celebrate your first year of marriage.',
    rating: 4.7,
    reviews: 20
  },
  
  // Wedding Flowers
  {
    id: 17,
    name: 'Bridal Bouquet',
    price: 129.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/511674764/photo/beautiful-bouquet-of-bright-flowers-in-vase-isolated-white.jpg?s=612x612&w=0&k=20&c=pYRKmOJHTY-ivWEKigKOvlvyvTOxwQqJsVLrWyAMMUw=',
    description: 'A stunning bridal bouquet featuring white roses, peonies, and orchids.',
    rating: 5.0,
    reviews: 42
  },
  {
    id: 18,
    name: 'Bridesmaid Bouquet',
    price: 49.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'A beautiful bouquet for bridesmaids featuring roses and baby\'s breath.',
    rating: 4.8,
    reviews: 28
  },
  {
    id: 19,
    name: 'Boutonniere',
    price: 19.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/171146251/photo/beautiful-bouquet.jpg?s=612x612&w=0&k=20&c=lNmm6IRIHJqBmZgP0tT2UVhU2uolxLNB3k8UnofjWxY=',
    description: 'A classic boutonniere featuring a single rose with greenery.',
    rating: 4.7,
    reviews: 35
  },
  {
    id: 20,
    name: 'Corsage',
    price: 29.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/511674764/photo/beautiful-bouquet-of-bright-flowers-in-vase-isolated-white.jpg?s=612x612&w=0&k=20&c=pYRKmOJHTY-ivWEKigKOvlvyvTOxwQqJsVLrWyAMMUw=',
    description: 'An elegant corsage featuring orchids and roses.',
    rating: 4.8,
    reviews: 22
  },
  {
    id: 21,
    name: 'Wedding Centerpiece',
    price: 79.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'A beautiful centerpiece featuring roses, hydrangeas, and candles.',
    rating: 4.9,
    reviews: 38
  },
  {
    id: 22,
    name: 'Wedding Arch Flowers',
    price: 299.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'A stunning floral arch featuring roses, peonies, and greenery.',
    rating: 5.0,
    reviews: 25
  },
  {
    id: 23,
    name: 'Aisle Decorations',
    price: 149.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/511674764/photo/beautiful-bouquet-of-bright-flowers-in-vase-isolated-white.jpg?s=612x612&w=0&k=20&c=pYRKmOJHTY-ivWEKigKOvlvyvTOxwQqJsVLrWyAMMUw=',
    description: 'Beautiful aisle decorations featuring roses and candles.',
    rating: 4.8,
    reviews: 30
  },
  {
    id: 24,
    name: 'Wedding Cake Flowers',
    price: 49.99,
    category: 'wedding',
    occasion: ['wedding'],
    image: 'https://media.istockphoto.com/id/175446963/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=jqctOJV58asSji5sBI45Bm50uBj3vZnqdZrd8K1FUa8=',
    description: 'Edible flowers to decorate your wedding cake.',
    rating: 4.7,
    reviews: 18
  },
  
  // Sympathy Flowers
  {
    id: 25,
    name: 'White Sympathy Bouquet',
    price: 59.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'A peaceful arrangement of white flowers to express your condolences.',
    rating: 4.8,
    reviews: 45
  },
  {
    id: 26,
    name: 'Sympathy Wreath',
    price: 89.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'A traditional wreath featuring white roses and greenery.',
    rating: 4.7,
    reviews: 32
  },
  {
    id: 27,
    name: 'Peaceful Garden',
    price: 69.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/155389476/photo/peony-flowers-bouquet.jpg?s=612x612&w=0&k=20&c=ocknxERXUyepn4ddAm9AfisLzyJbfvvmqhdiXjUJdfs=',
    description: 'A calming arrangement featuring lavender, white roses, and eucalyptus.',
    rating: 4.9,
    reviews: 28
  },
  {
    id: 28,
    name: 'Memorial Cross',
    price: 99.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=',
    description: 'A traditional cross arrangement featuring white flowers.',
    rating: 4.8,
    reviews: 22
  },
  {
    id: 29,
    name: 'Sympathy Basket',
    price: 79.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/155389476/photo/peony-flowers-bouquet.jpg?s=612x612&w=0&k=20&c=ocknxERXUyepn4ddAm9AfisLzyJbfvvmqhdiXjUJdfs=',
    description: 'A beautiful basket arrangement featuring white flowers and greenery.',
    rating: 4.7,
    reviews: 35
  },
  {
    id: 30,
    name: 'Eternal Love',
    price: 89.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/175446963/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=jqctOJV58asSji5sBI45Bm50uBj3vZnqdZrd8K1FUa8=',
    description: 'A heart-shaped arrangement featuring white roses and lilies.',
    rating: 4.9,
    reviews: 25
  },
  {
    id: 31,
    name: 'Peaceful Thoughts',
    price: 64.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/171146251/photo/beautiful-bouquet.jpg?s=612x612&w=0&k=20&c=lNmm6IRIHJqBmZgP0tT2UVhU2uolxLNB3k8UnofjWxY=',
    description: 'A peaceful arrangement featuring white flowers and soft greenery.',
    rating: 4.8,
    reviews: 18
  },
  {
    id: 32,
    name: 'In Loving Memory',
    price: 74.99,
    category: 'sympathy',
    occasion: ['sympathy'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'A beautiful arrangement featuring white roses and orchids.',
    rating: 4.7,
    reviews: 22
  },
  
  // Seasonal Bouquets
  {
    id: 33,
    name: 'Spring Tulips',
    price: 39.99,
    category: 'seasonal',
    occasion: ['spring'],
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'A vibrant bouquet of spring tulips in various colors.',
    rating: 4.8,
    reviews: 42
  },
  {
    id: 34,
    name: 'Summer Sunflowers',
    price: 44.99,
    category: 'seasonal',
    occasion: ['summer'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'Bright and cheerful sunflowers that bring warmth to any space.',
    rating: 4.7,
    reviews: 38
  },
  {
    id: 35,
    name: 'Autumn Leaves',
    price: 49.99,
    category: 'seasonal',
    occasion: ['fall'],
    image: 'https://media.istockphoto.com/id/155389476/photo/peony-flowers-bouquet.jpg?s=612x612&w=0&k=20&c=ocknxERXUyepn4ddAm9AfisLzyJbfvvmqhdiXjUJdfs=',
    description: 'A warm arrangement featuring autumn-colored flowers and foliage.',
    rating: 4.9,
    reviews: 35
  },
  {
    id: 36,
    name: 'Winter Whites',
    price: 54.99,
    category: 'seasonal',
    occasion: ['winter'],
    image: 'https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=',
    description: 'An elegant arrangement featuring white flowers and winter greenery.',
    rating: 4.8,
    reviews: 28
  },
  {
    id: 37,
    name: 'Spring Daffodils',
    price: 34.99,
    category: 'seasonal',
    occasion: ['spring'],
    image: 'https://media.istockphoto.com/id/175446963/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=jqctOJV58asSji5sBI45Bm50uBj3vZnqdZrd8K1FUa8=',
    description: 'A cheerful bouquet of yellow daffodils to welcome spring.',
    rating: 4.7,
    reviews: 25
  },
  {
    id: 38,
    name: 'Summer Roses',
    price: 49.99,
    category: 'seasonal',
    occasion: ['summer'],
    image: 'https://media.istockphoto.com/id/1128879499/photo/bouquet-spring-tulip-flowers-isolated-white-background.jpg?s=612x612&w=0&k=20&c=I6EN-rwQJp1QLblLgF1SWswGua8bmxn6WZGkMWNRJ78=',
    description: 'A beautiful bouquet of summer roses in vibrant colors.',
    rating: 4.9,
    reviews: 32
  },
  {
    id: 39,
    name: 'Autumn Mums',
    price: 39.99,
    category: 'seasonal',
    occasion: ['fall'],
    image: 'https://media.istockphoto.com/id/171146251/photo/beautiful-bouquet.jpg?s=612x612&w=0&k=20&c=lNmm6IRIHJqBmZgP0tT2UVhU2uolxLNB3k8UnofjWxY=',
    description: 'A colorful arrangement featuring autumn chrysanthemums.',
    rating: 4.6,
    reviews: 22
  },
  {
    id: 40,
    name: 'Winter Holly',
    price: 59.99,
    category: 'seasonal',
    occasion: ['winter'],
    image: 'https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=',
    description: 'A festive arrangement featuring holly berries and winter greenery.',
    rating: 4.8,
    reviews: 18
  },
  
  // Custom Bouquets
  {
    id: 41,
    name: 'Custom Rose Bouquet',
    price: 69.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'A custom bouquet featuring your choice of roses in any color.',
    rating: 4.9,
    reviews: 48
  },
  {
    id: 42,
    name: 'Custom Mixed Bouquet',
    price: 79.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://media.istockphoto.com/id/175446963/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=jqctOJV58asSji5sBI45Bm50uBj3vZnqdZrd8K1FUa8=',
    description: 'A custom bouquet featuring your choice of mixed flowers.',
    rating: 4.8,
    reviews: 42
  },
  {
    id: 43,
    name: 'Custom Orchid Arrangement',
    price: 89.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://media.istockphoto.com/id/155389476/photo/peony-flowers-bouquet.jpg?s=612x612&w=0&k=20&c=ocknxERXUyepn4ddAm9AfisLzyJbfvvmqhdiXjUJdfs=',
    description: 'A custom arrangement featuring your choice of orchids.',
    rating: 5.0,
    reviews: 35
  },
  {
    id: 44,
    name: 'Custom Succulent Garden',
    price: 59.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=',
    description: 'A custom arrangement featuring your choice of succulents.',
    rating: 4.7,
    reviews: 28
  },
  {
    id: 45,
    name: 'Custom Tropical Bouquet',
    price: 74.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://media.istockphoto.com/id/155389476/photo/peony-flowers-bouquet.jpg?s=612x612&w=0&k=20&c=ocknxERXUyepn4ddAm9AfisLzyJbfvvmqhdiXjUJdfs=',
    description: 'A custom bouquet featuring your choice of tropical flowers.',
    rating: 4.8,
    reviews: 22
  },
  {
    id: 46,
    name: 'Custom Garden Bouquet',
    price: 64.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://media.istockphoto.com/id/175446963/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=jqctOJV58asSji5sBI45Bm50uBj3vZnqdZrd8K1FUa8=',
    description: 'A custom bouquet featuring your choice of garden flowers.',
    rating: 4.9,
    reviews: 18
  },
  {
    id: 47,
    name: 'Custom Wildflower Bouquet',
    price: 54.99,
    category: 'custom',
    occasion: ['custom'],
    image: 'https://media.istockphoto.com/id/171146251/photo/beautiful-bouquet.jpg?s=612x612&w=0&k=20&c=lNmm6IRIHJqBmZgP0tT2UVhU2uolxLNB3k8UnofjWxY=',
    description: 'A custom bouquet featuring your choice of wildflowers.',
    rating: 4.7,
    reviews: 15
  },
  {
    id: 48,
    name: 'Custom Monochromatic Bouquet',
    price: 69.99,
    category: 'custom',
    occasion: ['custom'],
    images: [
      'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593691509543-c55fb32e1ce4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    image: 'https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=',
    description: 'A custom bouquet featuring flowers in a single color of your choice.',
    rating: 4.8,
    reviews: 12
  }
];

// Occasions
export const occasions = [
  { id: 'birthday', name: 'Birthday' },
  { id: 'anniversary', name: 'Anniversary' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'sympathy', name: 'Sympathy' },
  { id: 'spring', name: 'Spring' },
  { id: 'summer', name: 'Summer' },
  { id: 'fall', name: 'Fall' },
  { id: 'winter', name: 'Winter' },
  { id: 'valentine', name: 'Valentine\'s Day' },
  { id: 'custom', name: 'Custom' }
];

// Promo Codes
export const promoCodes = [
  { code: 'SPRING20', discount: 20, description: '20% off on all spring bouquets' },
  { code: 'SUMMER15', discount: 15, description: '15% off on all summer bouquets' },
  { code: 'AUTUMN10', discount: 10, description: '10% off on all autumn bouquets' },
  { code: 'WINTER25', discount: 25, description: '25% off on all winter bouquets' },
  { code: 'WELCOME10', discount: 10, description: '10% off on your first order' }
];

// Flower Types
export const flowerTypes = [
  { id: 'roses', name: 'Roses' },
  { id: 'tulips', name: 'Tulips' },
  { id: 'lilies', name: 'Lilies' },
  { id: 'sunflowers', name: 'Sunflowers' },
  { id: 'orchids', name: 'Orchids' },
  { id: 'peonies', name: 'Peonies' },
  { id: 'hydrangeas', name: 'Hydrangeas' },
  { id: 'daisies', name: 'Daisies' },
  { id: 'carnations', name: 'Carnations' },
  { id: 'gerberas', name: 'Gerberas' },
  { id: 'chrysanthemums', name: 'Chrysanthemums' },
  { id: 'daffodils', name: 'Daffodils' },
  { id: 'hyacinths', name: 'Hyacinths' },
  { id: 'irises', name: 'Irises' },
  { id: 'anemones', name: 'Anemones' }
];

// Colors
export const colors = [
  { id: 'red', name: 'Red' },
  { id: 'pink', name: 'Pink' },
  { id: 'white', name: 'White' },
  { id: 'yellow', name: 'Yellow' },
  { id: 'purple', name: 'Purple' },
  { id: 'orange', name: 'Orange' },
  { id: 'blue', name: 'Blue' },
  { id: 'lavender', name: 'Lavender' },
  { id: 'peach', name: 'Peach' },
  { id: 'coral', name: 'Coral' },
  { id: 'burgundy', name: 'Burgundy' },
  { id: 'cream', name: 'Cream' },
  { id: 'mixed', name: 'Mixed' }
]; 