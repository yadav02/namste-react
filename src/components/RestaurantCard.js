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
      <h2>{name}</h2>
      <p>{cuisines}</p>
      <p>{avgRating}stars</p>
      <p>{costForTwo}</p>
    </div>
  );
};
