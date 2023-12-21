export interface CategoryTypes {
  id: number;
  icon: any;
  href: string;
  translations: {
    uz: {
      title: string;
    };
    ru: {
      title: string;
    };
  };
  childmenu: [
    {
      id: number;
      translations: {
        uz: {
          title: string;
        };
        ru: {
          title: string;
        };
      };
      childmenu: [
        {
          id: number;
          translations: {
            uz: {
              title: string;
            };
            ru: {
              title: string;
            };
          };
        }
      ];
    }
  ];
}

export interface ProductType {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface GroupedProductsType {
  [category: string]: ProductType[];
}
