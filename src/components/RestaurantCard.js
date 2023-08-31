import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
