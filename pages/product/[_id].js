import Image from "next/image";
import Styles from "./../../styles/singleProduct.module.css";
import Head from "next/head";
const singleProduct = ({product}) => {
    
    const{name,price,_id,category,image,weight,measurement} = product
    return(
        <div className={Styles.product +" container"}>
            <Head><title>{name}: Page</title></Head>
            <div className={Styles.image}><img src={image} width ="300" height = "300"/></div>
            <div>
                <h2>{name}</h2>
                <h3>{category}</h3>
                <h4>{weight} {measurement}</h4>
                <h1>{price} EGP</h1>
                <div className={Styles.wrapper}>
                    
                    <span className={Styles.num}><a href={`/payment/${_id}`}>Purchase</a></span>
                    
                </div>
            </div>
        </div>
    );
}
export default singleProduct;


export async function getStaticPaths() {
    const req = await fetch('https://products-cyan.vercel.app/products');
    const products = await req.json();
    const paths = products.map(product=> {
       
        return{
            params:{_id:product._id.toString()}
            
           
        }
        
    })

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    const id = context.params._id;
    const req = await fetch('https://products-cyan.vercel.app/products/' + id);
    const product = await req.json();
    return{
        props:{product}
    }
}

