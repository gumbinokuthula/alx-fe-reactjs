import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Grab the dynamic URL param
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamically routed blog post page.</p>
    </div>
  );
};

export default BlogPost;
