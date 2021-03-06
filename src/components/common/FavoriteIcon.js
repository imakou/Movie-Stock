import React from "react";
import { Icon } from "antd";

const FavoriteIcon = props => {
  const { isfavorite } = props;
  return (
    <button {...props} type="button" className="btn btn-danger">
      <Icon className="mr-1" type={"heart"} theme={isfavorite && "filled"} /> Favorite
    </button>
  );
};

export default FavoriteIcon;
