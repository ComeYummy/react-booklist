import axios from "axios";

const getDataFromAPI = async (keyword: string) => {
    const requestURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestURL}${keyword}`);
    return result;
}

export default getDataFromAPI;
