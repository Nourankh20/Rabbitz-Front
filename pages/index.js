import Products from "../components/Products";
import { useRouter } from "next/router";
import Navbar from "./../components/Navbar"
import Head from "next/head";
const index = ({products}) => {
  const router = useRouter();
  return(
   <main className="container">
     <Head>
       <title>Marketplace</title>
     </Head>
     <div className="main">
     {
       products.map(product=><Products key={product.id}product ={product}/>)
     }
     </div>
   </main>
  );
}
export default index


export async function getStaticProps({ params = {}}){
  const req = await fetch("https://products-cyan.vercel.app/products");
  const data = await req.text();
  const products = JSON.parse(data);
  return{
    props:{products}
  }
}
