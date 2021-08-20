import axios from "axios";

// const ENDPOINT_PATH = "http://localhost:3001/api/notes";
 const ENDPOINT_PATH =  "https://mysterious-wave-04607.herokuapp.com/api/notes";

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
