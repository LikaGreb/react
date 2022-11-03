
import { Link } from 'react-router-dom';
import cn from 'classnames';


import styles from './PostItem.module.scss'

function PostItem({ item }) {
  
  return (
   
    <li className={cn("card", styles.card)}>
      <Link to={`/post/${item.id}`}>{item.title}</Link> 
      
     
    </li>
  );
}

export default PostItem;
