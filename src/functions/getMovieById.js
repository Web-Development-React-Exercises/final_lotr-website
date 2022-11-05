import axios from "axios";

export default async function getMovieById(id) {
    try {
        const result = await axios.get(process.env.REACT_APP_URL + "/movie/" + id, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY
            }
        })
        return result.data;

    } catch (err) {
        return err.toString();
    }
}