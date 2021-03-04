export default interface IBook {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  createDate: number;
  isAvailable: boolean;
}

export interface IBuyProps {
  id: number;
  bookName: string;
}

export const enum ECategories {
  Fantasy = 'Fantasy',
  SciFi = 'Sci-Fi',
  Mystery = 'Mystery',
  Thriller = 'Thriller',
  Romance = 'Romance',
  Dystopian = 'Dystopian',
}
