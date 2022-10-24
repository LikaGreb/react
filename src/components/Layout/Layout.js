
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  
  return (
    <div className={styles.body}>
      <Header />
      <section>
        <div className="container">{children}</div>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
