import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

import styles from "./Home.module.scss";
import PostItem from "./../Posts/components/PostItem/PostItem";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    }
    getPosts();
      
  }, []);
  
  return (

      <div className="innerContent">
        <ul className={styles.posts}>
          {posts.splice(Math.floor(Math.random() * posts.length), 1).map((item) => (<PostItem item={item} key={item.id} />))}
           {posts.splice(Math.floor(Math.random() * posts.length), 1).map((item) => (<PostItem item={item} key={item.id} />))}
          {posts.splice(Math.floor(Math.random() * posts.length), 1).map((item) => (<PostItem item={item} key={item.id} />))}
          {posts.splice(Math.floor(Math.random() * posts.length), 1).map((item) => (<PostItem item={item} key={item.id} />))}
          {posts.splice(Math.floor(Math.random() * posts.length), 1).map((item) => (<PostItem item={item} key={item.id} />))}
           {posts.splice(Math.floor(Math.random() * posts.length), 1).map((item) => (<PostItem item={item} key={item.id} />))}
        </ul>
      </div>
   
        
  )
}
export default Home;

