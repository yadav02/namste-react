import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Loader from "./Loader";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6696613&lng=77.0568756&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
  };

  const handleFilterButton = () => {
    let outPutFilterList = restaurantList.filter(
      (filterItem) => filterItem.info.avgRating > 4
    );
    setRestaurantList(outPutFilterList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="custom-button" onClick={handleFilterButton}>
          Top Rated Restaurant
        </button>

        {/* <button className="custom-button">Reset Restaurant List</button> */}
      </div>
      {loading ? (
        <Loader/>
      ) : (
        <div className="res-container">
          {restaurantList?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          ))}
        </div>
      )}
    </div>
  );
};
