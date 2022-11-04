import axios from "axios";

export default async function getBooks() {
    try {
        //make axios request to URL
        const response = await axios.get(process.env.REACT_APP_URL + "/book", {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY
            }
        });
        //return response data
        return response.data;


    } catch (err) {
        return {
            statusCode: 500,
            body: err.toString(),
        };
    }
}