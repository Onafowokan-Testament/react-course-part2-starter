import { useState } from "react";
import usePost from "../hooks/usePost";
import { set } from "mongoose";

const PostList = () => {
  const [userId, setUserId] = useState<number>();

  const { data: Posts, error, isLoading } = usePost(userId);

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <ul className="list-group">
        {Posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
