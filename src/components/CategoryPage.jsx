import { useParams } from "react-router-dom"; 
import Layout from "./Layout";

export default function CategoryPage() {
  const { slug } = useParams(); 

  return (
    <>
    <Layout>
      <h1>{slug}</h1>
    </Layout>
    </>
  );
}
