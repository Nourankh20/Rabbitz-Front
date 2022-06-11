import Products from "../components/Products";
import Navbar from "./../components/Navbar"
import Head from "next/head";
const index = ({products}) => {
  return(
   <main className="container">
     <Head>
       <title>Marketplace</title>
     </Head>
     <button onClick={ ()=>{window.location = "http://localhost:3000/shipment"}}
    >
      {/* shipment */}
     </button>
     <div className="main">
     {
       products.map(product=><Products key={product.id}product ={product}/>)
     }
     </div>
   </main>
  );
}
export default index


export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return{
    props:{products}
  }
}