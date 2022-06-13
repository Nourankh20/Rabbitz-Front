import Link from 'next/link';
import Styles from "./../styles/Navbarr.module.css";
const Navbar = () => {
    return(
<nav className={Styles.nav}>
    <div className ={Styles.container + " container"}>
        <div className = {Styles.logo}>Rabbitz</div>
        <ul>
            <li>
                <Link href = "/"><a>Home</a></Link>
            </li>
            <li>
                <Link href = "/about"><a>about</a></Link>
            </li>
            <li>
                <Link href = "/shipment"><a>Shipment</a></Link>
            </li>
        </ul>
    </div>
</nav>
    );
}
export default Navbar;