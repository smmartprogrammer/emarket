

export interface NavbarItemTypes {
  label: string;
  href: string;
}

export const NavbarArray: Array<NavbarItemTypes> = [
  { label: "Female", href: "/gender/female" },
  { label: "Male", href: "/gender/male" },
  { label: "Kids", href: "/gender/kids" },
  { label: "All Products", href: "/allproducts" },
];

export interface assetImageType {
  _type: string,
  _ref: string,
};

export interface Image_2 {
  key: string,
  };


export interface imagesType {
  asset: assetImageType,
  _type: string,
    alt: string,
  _key: string,
  [key: string]: any,
  
}


export interface oneProductType {
  slug:any,
  quantity: number,
  _rev: string,
  _type: string,
  productName: string,
  _createdAt: string,
  _id: string,
  _updatedAt: string,
  image: Array<imagesType>
  description: any,
  productTypes: Array<string>,
  size: Array<string>,
  price: number,
}

export interface responseType {
  result: Array<oneProductType>
}
