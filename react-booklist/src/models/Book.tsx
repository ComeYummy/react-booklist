export interface Book {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Info;
}

export interface Info {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
}
