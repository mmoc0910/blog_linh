import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";
import PostCard from "../components/post/PostCard";

type PostType = {
  thumbnail: string;
  description: string;
  href: string;
  title: string;
};
const HomePage = () => {
  // const { data, error, isLoading } = useSWR<PostType>(
  //   "http://localhost:8080/news",
  //   (url) => axios.get<{ data: PostType }>(url)
  // );
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/news",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("result - ", result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log("data - ", data);
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default HomePage;
