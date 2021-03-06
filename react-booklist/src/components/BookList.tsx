import React, { FC, useState, useEffect } from "react";
import getDataFromAPI, { APIResponse } from "../repositories/Api";

interface BookListProps {
  keyword: string;
}

const BookList: FC<BookListProps> = (props: BookListProps) => {
  const [bookData, setBookData] = useState<APIResponse>({
    //stateの型は何がよいのか？
    totalItems: 0,
    items: [],
  });
  useEffect(() => {
    getDataFromAPI(props.keyword).then((response) =>
      setBookData(response.data)
    );
  }, [props]); //配列なのはなぜ？

  return (
    <div>
      <ul>
        {bookData.items.map((item, index) => (
          <li key={index}>{item.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
