import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const getPosts = async () => {
    try{
      const { data } = await api.get('/posts')
      setPosts(data)
    } catch(err){
      console.log("Erro ao obter posts. ",err)
    }

  }

  const deletePost = async (id) => {
    try {
      await api.delete("/posts/" + id);
      setPosts(prevState => prevState.filter(post => post.id !== id));
      alert("Post deletado!")
    } catch(err) {
      console.log("Erro ao excluir o post: ", err);
    }
  }

const addPost = () => {
  navigate("/addpost")
}



useEffect(() => {
  getPosts();
}, []);

  return (
    <div>
    <h1>Gerenciamento de Posts</h1>
    <button onClick={() => navigate("/addpost")}>Adicionar Post</button>
    <ul>
        {/* Exibir Lista de Posts */}
        {posts.map( post => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.message}</p>
                <button onClick={() => deletePost(post.id)}>Deletar</button>
                <button onClick={() => navigate('/editpost/' +post.id)}>Editar</button>
            </li>
        ))}
    </ul>
</div>
  )
}

export default Home;