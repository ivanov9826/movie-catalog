import { baseUrl } from "../constants/baseUrl";

export const getAll = () => {
    return fetch(`${baseUrl}/movie`)
            .then(res => res.json())
}