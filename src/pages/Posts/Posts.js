import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import styles from "./Posts.module.scss";
import PostItem from "./components/PostItem/PostItem";
import Mymodal from "../Posts/components/Modal/Modal";

function Posts() {
  const URL = process.env.REACT_APP_URL;  
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    async function getPosts() {
      const response = await axios.get(URL);
      setPosts(response.data.slice(0, 20));
      console.log(response);
    }
    getPosts();
  }, [URL]);

  return (
    <Layout>
      <Mymodal />
      <div className="innerContent">
        <ul className={styles.posts}>
          {posts.map((item) => (
            <PostItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Posts;
