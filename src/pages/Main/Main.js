import content from "../../common/content";
import Layout from "../../components/Layout/Layout";
import Home from "./Home"

function Main() {
  const contentData = content.main;

  return (
    <Layout>
      <div className="innerContent">
        <h1>{contentData.title}</h1>
        <Home />
      </div>
    </Layout>
  );
}

export default Main;
