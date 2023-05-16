import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
export default function LikeButton() {
  const [isliked, setLiked] = useState(false);

  const buttonHandler = () => {
    setLiked((currentState) => !currentState);
  };

  return (
    <div>
      <FavoriteIcon
        onClick={buttonHandler}
        type="button"
        color={isliked ? "error" : "disabled"}
      ></FavoriteIcon>
    </div>
  );
}
