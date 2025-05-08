import axios from "axios";
import { useEffect, useState } from "react";

export default function Detalhes() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-4">
            {posts.map((post) => (
                <div key={post.id} className="bg-gray-100 p-4 rounded shadow mb-4">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}


