import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/product.module.css";
const Products = ({product}) => {
    const{title,price,image,id} = product;
    return(
        <div className={Styles.product}>
            <div>
               <Image src={product.image} width="200" height="300" />
            </div>
            <ul>
                <li>
                    {title}
                </li>
                <li>
                    {price} EGP
                </li>
            </ul>
            <Link href={`/product/${id}`}><a className='button'>Purchase</a></Link>
        </div>

    );
}
export default Products