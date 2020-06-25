import React, {useEffect, useState} from 'react'

import './style.css';

import api from '../../api.js';


export default function Anotation(props){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await api.get('/all')

            setPosts(response.data)
        };
        getData();
    }, [])

    function delPost(event){
        var id = event.target.id

        api.post("/del", { id })
        window.location.reload()
    }
    return (
        <>
            {posts.map((post) => {
                return <div className="anotation" key={post.id}>
                            <button  id={post.id} onClick={delPost} className="btn btn-dark">X</button>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
            })}
        </>
    );
};