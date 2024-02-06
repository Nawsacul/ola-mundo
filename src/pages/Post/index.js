import './Post.css';
import styles from './Post.module.css';

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import PostModelo from "../../components/PostModelo";
import posts from '../../json/posts.json';
import NaoEncontrada from '../NaoEncontrada';
import PaginaPadrao from '../../components/PaginaPadrao';
import PostCard from '../../components/PostCard';

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h3 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h3>

                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>

            </PostModelo>

        </PaginaPadrao>
    )
}

export default Post;