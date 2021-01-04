import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Yyld1MsrzsRKAy9KaNfx8_hYeicBmbtzjJjKB88PcJY'
    }
});