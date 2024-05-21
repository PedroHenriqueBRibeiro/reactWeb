import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

type Posts = {
    id: string,
    title: string,
    messagem: string
}

const GetPosts = () => {
    const [posts, setPosts] = useState<Posts[]>([])
    const [postsFiltrados, setPostsFiltrados] = useState<Posts[]>([])
    const navigate = useNavigate()
    const add = () => {
      navigate("/add")
      console.log(add)
    }

    const fetchPosts = async () => {
        const response = await api.get("/posts")
        setPosts(response.data);
        setPostsFiltrados(response.data)
        console.log(response.data)
    }

    const filtro = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filtrado = posts.filter( item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setPostsFiltrados(filtrado)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return ( 
        <div>
            <h1>Página GetPosts</h1>
            <input placeholder='Faça sua busca' onChange={filtro} />
            {postsFiltrados.map(item => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
            <button onClick={() => navigate("/add")}>Adicionar Post</button>
        </div>
     );
}
 
export default GetPosts;