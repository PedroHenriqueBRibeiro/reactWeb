import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const {idPost} = useParams()
  console.log(idPost)

  const getPostById = async () => {
    const {data} = await api.get("/posts/" +idPost)
    setMessage(data.message)
    setTitle(data.title)
    console.log(response)
  }

  useEffect(() => {
    getPostById();
  }, [])


  const adicionar = async (e) => {
    e.preventDefault();

    try {
      await api.post("/posts", { title, message });
      alerta("");
    } catch (err) {
      alertaErro("");
    }
  };

  return (
    <div>
      <h1>EDITAR POST</h1>
      <form onSubmit={adicionar}>
        
        <label>
          Título:
          <input type="title" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
       
        <label>
          Mensagem:
          <input value={message} onChange={e => setMessage(e.target.value)} />
        </label>
        
        <button>Adicionar</button>
      </form>
    </div>
  );
};

export default EditPost;