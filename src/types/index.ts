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
