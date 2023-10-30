import React, { useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
// import { fetchUserWithPosts } from "../api";
import DeckList from "./DeckList";
import PostsNav from "./PostsNav";
import ErrorMessage from "../common/ErrorMessage";

export const User = () => {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { userId } = useParams();
  console.log(`USER ID: ${userId}`);

  const { url } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  // TODO: Change the link below to go back to the home page.

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to={`/`}>Return Home</Link>
        </p>
      </ErrorMessage>
    );
  }

  /*
    TODO: In the below section, update the links to work appropriately with React Router.

    TODO: You'll need to add nested routes below.

    The <PostList /> component should show on the following route:
    /users/:userId/posts

    The <UserProfile /> component should show on the following route:
    /users/:userId
  */
  return (
    <section className="container">
      <PostsNav />
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to={`${url}`} className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${url}/posts`} className="nav-link">
              Posts
            </Link>
          </li>
        </ul>

        {user.id ? (
          <div className="p-4 border border-top-0">
            <Route path={`${url}/posts`}>
              <PostList posts={user.posts} />
            </Route>
            <Route exact path={`${url}`}>
              <UserProfile user={user} />
            </Route>
          </div>
        ) : (
          <div className="p-4 border border-top-0">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default User;
