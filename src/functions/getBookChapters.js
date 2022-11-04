import axios from "axios";

export default async function getBookChapters(book_id) {
    try {
        const result = await axios.get(process.env.REACT_APP_URL + "/book/" + book_id + "/chapter", {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY
            }
        })
        return result.data;

    } catch (err) {
        return err.toString();
    }
}