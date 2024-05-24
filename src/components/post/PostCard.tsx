import React, { FC } from "react";
import { PostType } from "./type";
import { Link } from "react-router-dom";
import { getRandomImage, isHttpsImageUrl } from "../../constants";

type PostCardProps = { post: PostType };
const PostCard: FC<PostCardProps> = ({ post }) => {
  const { description, href, thumbnail, title } = post;
  const image = isHttpsImageUrl(thumbnail) ? thumbnail : getRandomImage();
  if (title)
    return (
      <Link className="block" to={`/post?href=${href}&img=[${image}]`}>
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/10] object-cover rounded-md"
        />
        <div className="pt-3">
          <h4 className="font-semibold text-lg line-clamp-2 mb-1">{title}</h4>
          <p className="line-clamp-3 text-gray-500">{description}</p>
        </div>
      </Link>
    );
  return;
};

export default PostCard;
