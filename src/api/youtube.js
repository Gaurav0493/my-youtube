import axios from 'axios';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: process.env.API_KEY
    }
})