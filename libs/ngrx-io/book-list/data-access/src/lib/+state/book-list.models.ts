/**
 * Interface for the 'BookList' data
 */
export interface BookListEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
  };
}
