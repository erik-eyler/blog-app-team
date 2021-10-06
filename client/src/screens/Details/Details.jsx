import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../../services/posts.js";
import Layout from "../../components/Layout/Layout.jsx";
import './Details.css'
// delete component

const Details = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // getPost
  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(id)
      setPost(res)
      setLoading(false)
    }
    fetchPost();
  }, [id])

  console.log(post)
  console.log(id)

  if (loading) <div>Loading...</div>


  return (
    <Layout> 
      <div className="contents">
        <div className="details-card">
          <div className="detail-img">
            {/* faker has image urls that do not exist, unsplash placeholder for now */}
            <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt={post.title} />
          </div>
          <div className="detail-text">
            <h4>{post.title}</h4>
            <p>By {post.authorFirstName} {post.authorLastName}</p>
            <p className="body">{post.body}</p>
          </div>
        </div> 
      </div>
    </Layout>
  )
};

export default Details;
