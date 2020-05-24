import React, { FC } from "react";

interface BookListProps {
    language: string;
}

const BookList: FC<BookListProps> = props => {
    return(
        <p>this is {props.language} list component.</p>
    );
}

export default BookList;