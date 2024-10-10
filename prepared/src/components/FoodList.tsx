import React from 'react';
import { useNavigate } from 'react-router-dom';
/* import starIcon from "../assets/star-fill.png"; */

interface FavoriteButtonProps {
  drinkName?: string; // Optional, for Navbar case
  drinkImgUrl?: string; // Optional, for Navbar case
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ drinkName, drinkImgUrl }) => {
  const navigate = useNavigate(); // For navigation



  return (
    <>
      <button className="favorite-button" onClick={alert("test")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          // className={isFavorite ? 'star-icon active' : 'star-icon'}
        >
          <path d="M12 17.27L18.18 21 16.54 14.62 22 10.27 15.81 9.63 12 3 8.19 9.63 2 10.27 7.46 14.62 5.82 21 12 17.27z" />
        </svg>
      </button>
    </>
  );
};

export default FavoriteButton;
