import { useState } from "react";
import usePost from "../hooks/usePost";
import React from "react";

const PostList = () => {
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost(
    { pageSize }
  );

  if (isLoading) return <div>Loading ...</div>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page) => (
          <React.Fragment>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        className="btn btn-secondary"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Fetching next page" : "Load More"}
      </button>
    </>
  );
};

export default PostList;
