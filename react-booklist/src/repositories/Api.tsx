import axios from "axios";
import { Book } from "../models/Book";

export interface APIResponse {
  totalItems: number;
  items: Book[];
}

const getDataFromAPI = async (keyword: string) => {
    const requestURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestURL}${keyword}`);
    return result;
}

export default getDataFromAPI;
