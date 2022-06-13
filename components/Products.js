import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/product.module.css";
const Products = ({product}) => {
    const{name,price,image,_id,size,slug,stock,category,measurement,weight} = product;
    return(
        <div className={Styles.product}>
            <div>
               <img src={product.image} width="200" height="300" />
            </div>
            <ul>
                <li>
                    {name}
                </li>
                <li>
                    {price} EGP
                </li>
            </ul>
            <Link href={`/product/${_id}`}><a className='button'>Purchase</a></Link>
        </div>

    );
}
export default Products