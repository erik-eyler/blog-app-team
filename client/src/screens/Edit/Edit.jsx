import { useParams, useHistory } from 'react-router-dom';
import { getPost, updatePost } from '../../services/posts';
import { useState, useEffect } from "react";
import Layout from '../../components/Layout/Layout';

const Edit = () => {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const history = useHistory();



  
  const { id } = useParams();



  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(id)
      setPost(res)
    }
    fetchPost();
  }, [id])

  handleSubmit() = async (e) => {
    e.preventDefault();
    const anything = {
      title,
      authorFirstName,
      authorLastName,
      body,
      imgUrl,
    };
    const response = await updatePost(id, anything)
    history.push(`/posts/${response.data.id}`)
  }

  return (
    <Layout>
      <form>
        <label>Title</label>
        <input type="text" value={post.title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>First Name</label>
        <input type="text" value={post.authorFirstName} onChange={(e) => setAuthorFirstName(e.target.value)} />
        <br />
        <label>Last Name</label>
        <input type="text" value={post.authorLastName} onChange={(e) => setAuthorLastName(e.target.value)} />
        <br />
        <label>Body</label>
        <input type="text" value={post.body} onChange={(e) => setBody(e.target.value)} />
        <br />
        <label>Img Url</label>
        <input type="text" value={post.imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
        <br />
      </form>
    </Layout>
  )
}

export default Edit
