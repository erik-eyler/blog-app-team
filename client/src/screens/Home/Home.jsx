import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/posts';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  // console.log(posts)

  if(loading) {<div>Loading...</div>}

  return (
    <Layout>
      <h1 className="logo">The Pier</h1>
      <h4 className="subtitle">(Stick around and drop us a line)</h4>
      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <Link key={index} to={`/posts/${post._id}`}>
              <div className="blog-card" >
                <div className="blog-card-title">{post.title}</div>
                <div className="author">By: {`${post.authorFirstName} ${post.authorLastName}`}</div>
                <div className="blog-card-body">{post.body}</div>
              </div>
            </Link>  
          )
        })}
      </div>
    </Layout>
  )
}

export default Home
