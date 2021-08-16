import axios from "axios";

const ENDPOINT_PATH = "http://localhost:3000/listFilms";

export const auth = {
    create(title) {
    return axios.post(ENDPOINT_PATH, { title })
    },
    getAll() {
        return axios.get(ENDPOINT_PATH)
    },
    delete(id) {
        return axios.delete(ENDPOINT_PATH+"/"+ id);
    },
    edit(id, list) {
        return axios.patch(ENDPOINT_PATH+"/"+ id, list)
    }
};
