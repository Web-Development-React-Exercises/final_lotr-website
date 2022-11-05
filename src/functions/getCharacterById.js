import axios from "axios";

export default async function getCharacterById(id) {
    try {
        const result = await axios.get(process.env.REACT_APP_URL + "/character/" + book_id, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY
            }
        })
        return result.data;

    } catch (err) {
        return err.toString();
    }
}