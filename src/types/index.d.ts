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

export interface ContextType {
  pageLoader: boolean;
  setPageLoader: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductType | null;
  setProduct: Dispatch<SetStateAction<ProductType | null>>;
  addSpaceToNumber: (num: number) => string;
}

export interface GroupedProductsType {
  categoryName: string;
  image: string;
  data: ProductType[];
}
