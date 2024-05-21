import { useState } from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await api.post("/posts", {
                title: title,
                message: message
            })

            navigate("/")
        } catch(err) {
            console.log("Erro ao enviar o POST. ",err)
        }


    }

    // const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(e.target.value)
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Digite o Título"/>
                <br />
                <textarea onChange={e => setMessage(e.target.value)} value={message} placeholder="Digite a Mensagem"/>
                <br />
                <button type="submit">Enviar</button>
            </form>

        </div>
    );
}

export default AddPost;
