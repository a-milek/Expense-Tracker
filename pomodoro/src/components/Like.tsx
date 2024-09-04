import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [likeState, setLikeState] = useState(false);

  const toggle = () => {
    setLikeState(!likeState);
    onClick();
  };
  if (likeState)
    return <IoHeartSharp color="#ff6b81" size="40" onClick={toggle} />;
  else return <IoHeartOutline size="40" onClick={toggle} />;
};

export default Like;
