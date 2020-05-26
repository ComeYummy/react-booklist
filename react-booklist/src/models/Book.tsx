export interface Book {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: Info;
}

interface Info {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
}
