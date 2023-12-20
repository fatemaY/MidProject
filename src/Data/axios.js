import axios from "axios";

const instance = axios.create({
    baseURL:'https://6581c3ab3dfdd1b11c442919.mockapi.io',
    headers:{
        'Content-Type': 'application/json',
        // Authorization: "some Token"
    }
})

export default instance;