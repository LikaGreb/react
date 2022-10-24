
import { Link } from "react-router-dom";
import content from "../../common/content";
import styles from "./Header.module.scss";
import Root from "./../Root";

function Header() {
  const menu = content.menu;

  return (
    <header>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.menu}>
            {menu.map((item, i) => (
              <Link to={item.link} key={`${item.title}-${i}`}>
                {item.title}
              </Link>
            ))}
          </div>
         </div>
        </div>
      <Root />
    </header>
  );
}

export default Header;
