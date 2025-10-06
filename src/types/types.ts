export type ImageType = {
  url: string;
  title: string;
}

export type ProductItemType = {
  id: string;
  title: string;
  description: string;
  images?: ImageType[]
}
