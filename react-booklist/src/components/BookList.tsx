import React, { FC, useState, useEffect } from "react";
import { AxiosResponse } from "axios";

interface BookListProps {
  language: string;
  getData: (keyword: string) => Promise<AxiosResponse<APIResponse>>;
}

interface APIResponse {
  totalItems: number;
  items: Book[];
}

interface Book {
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

const BookList: FC<BookListProps> = (props: BookListProps) => {
  const [bookData, setBookData] = useState<APIResponse>({
    totalItems: 0,
    items: [],
  });
  useEffect(() => {
    props
      .getData?.(props.language)
      .then((response) => setBookData(response.data));
  }, [props]);

  return (
    <div>
      <ul>
        {bookData.items.map((x, index) => (
          <li key={index}>{x.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
