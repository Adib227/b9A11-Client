import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import ManagePost from './ManagePost';

const MyPost = () => {
  const forms = useLoaderData();
  const [posts, setPosts] = useState(forms);

  return (
    <>
      <Helmet>
        <title>Helpass - 404</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center text-[#ef7c40]">My List</h1>
      {posts.map(list => (
        <ManagePost
          key={list._id}
          list={list}
          posts={posts}
          setPosts={setPosts}
        ></ManagePost>
      ))}
    </>
  );
};

export default MyPost;
