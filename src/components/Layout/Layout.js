
import { useContext } from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import cn from 'classnames';
import styles from "./Layout.module.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

function Layout({ children }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.body} ${styles[theme]}`}>
      <Header />
      <section>
        <div className="container">{children}</div>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
