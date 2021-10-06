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

  console.log(posts)

  if(loading) {<div>Loading...</div>}

  return (
    <Layout>
      <div>This is the Home Page</div>
      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <Link to={`/posts/${post._id}`}>
              <div className="blog-card" key={index}>
                <h4>{post.title}</h4>
                <div className="author">{`${post.authorFirstName} ${post.authorLastName}`}</div>
              </div>
            </Link>  
          )
        })}
      </div>
    </Layout>
  )
}

export default Home
