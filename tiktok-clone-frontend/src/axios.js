import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-clone-worldigitech.herokuapp.com/"
})

export default instance