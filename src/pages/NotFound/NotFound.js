
import content from "../../common/content";
import Layout from "../../components/Layout/Layout";

function NotFound() {
  
  const contentData = content.notFound;
  return (
    <Layout>
      <div className="innerContent">
        <h2>{contentData}</h2>
      </div>
    </Layout>
  );
}

export default NotFound;
