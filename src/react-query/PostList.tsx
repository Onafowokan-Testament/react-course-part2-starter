import { useState } from "react";
import usePost from "../hooks/usePost";

const PostList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data: Posts, error, isLoading } = usePost({ page, pageSize });

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {Posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>

      <button
        disabled={page === 1 ? true : false}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary"
      >
        Previous
      </button>
      <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default PostList;
