import { useParams } from "react-router-dom"; 
import Layout from "./Layout";

export default function CategoryPage() {
  const { slug } = useParams();
  
  const newSlug = slug.toUpperCase().replace("-", "/");

  return (
    <>
      <h1>{newSlug}</h1>

    </>
  );
}
