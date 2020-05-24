import React, { FC } from "react";
import { Link } from "react-router-dom";

const SelectBook: FC = () => {
  const keywords = ["React", "Vue", "Angular", "Swift", "AWS"];
  return (
    <>
      <h1>React App</h1>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>
            <Link to={`/list/${keyword}`}>{keyword}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SelectBook;
