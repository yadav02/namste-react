import axios from 'axios';


const apiResturantCard = axios.create ({
    baseURL: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6696613&lng=77.0568756&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
})

export {
    apiResturantCard
}