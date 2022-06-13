import Products from "../components/Products";
import Navbar from "./../components/Navbar"
import Head from "next/head";
import { Button, Modal, Form } from "react-bootstrap-v5";
const index = ({products}) => {
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
     <Button
          className="order"
          variant="dark"
          type="submit"
          onClick={ ()=>{window.location = "http://localhost:3000/payment"}}
        >
          Confirm order and pay
        </Button>
     {/* <button onClick={ ()=>{window.location = "http://localhost:3000/payment"}}> PAYMENT </button> */}

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