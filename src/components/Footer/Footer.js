import content from "../../common/content";
import styles from "./Footer.module.scss";
import { format } from 'date-fns'

function Footer() {
  

  return (
    <footer>
          <div className={styles.footer}>
              <p>{ content.footer}</p>
              <p>2020 - { format(new Date(), 'yyyy')}</p>
      </div>
      
    </footer>
  );
}

export default Footer;