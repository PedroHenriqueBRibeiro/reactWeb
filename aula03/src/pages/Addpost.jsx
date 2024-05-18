import { useState } from "react";
import api from "../services/api";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const alerta = () => {
    alert("Postsagem adicionada com sucesso!");
  }

  const alertaErro = () => {
    alert("Erro ao adicionar postagem!");
  }

  const adicionar = async (e) => {
    e.preventDefault();

    try {
      await api.post("/posts", { title, message });
      alerta();
    } catch (err) {
      alertaErro();
    }
  };

  return (
    <div>
      <h1>ADICIONAR POST</h1>
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

export default AddPost;