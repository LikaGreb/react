import content from "../../common/content";
import Layout from "../../components/Layout/Layout";
import Home from "./Home"

import Mymodal from "./Modal";

function Main() {
  const contentData = content.main;
    return (
    <Layout>
      <div className="innerContent">
        <h1>{contentData.title}</h1>
        <Mymodal />
        <Home />
      </div>
    </Layout>
  );
}

export default Main;

