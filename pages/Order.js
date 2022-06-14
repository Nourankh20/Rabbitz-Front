import React, { useEffect, useState } from 'react';
// import logo from './rabbit-t.png';
import styles from './../styles/Order.module.css';
import axios from 'axios';
import Link from 'next/link';

function Order() {


    const [order, setOrderId] = useState( );
    const [orders, setOrders] = useState(" ");
    const [error, showError] = useState(false);
    const [found, setFound] = useState(false)


    useEffect(()=>{
    
      // console.log("props.term :>> ", term);
  
    },[])


    const find =async (e) =>{
      axios.get(
        `http://localhost:3001/order/${order}`
      )
    .then(( data) => {
      console.log('data.data', data.data)
      setOrders(data.data)
      setFound(true)
    });


    }
  
    // find();

    // console.log('order', orders)
 
    const handleSubmit = () => {
      
      setOrders([...orders]);
      console.log('orders', orders)
      // setOrder( order);
  
    };
    // const Search =async (e) => {
    //   if (e!==Order1.stripeID){
    //     showError(true)
    //   }
    //   else{
    //     handleSubmit()
        
    //   }
       
    // };
    // console.log('order', handleSubmit)
    // find()
    // console.log('orders', orders)
    return (
      <div className={styles.App}>
      <header className={styles.Appheader}>
        <p  >
          My Orders
        </p>
      </header>
      {!found &&
        <div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p style={{ color: '#196838', fontWeight: 'bold', fontSize: 20 }}>
            You have no orders yet!
          </p>
          <button className={styles.Button} 
          // onClick={() => {window.location('localhost:3000/') }}
          >
            <Link href={`/`}><a className={styles.Button} >Browse Product</a></Link>

          </button>
          <div style={{marginTop: 20}}>
            <p style={{ color: '#196838', fontWeight: 'bold', fontSize: 20 ,marginTop: 100}}>
              Or Enter your Oredr ID
            </p>
            <div>
            <input 
            type="text"  
            name="item" 
            placeholder="Enter Order ID.." 
            onChange={(e) => {setOrderId(e.target.value); showError(false);}}
            required
            />
            <button  className={styles.orderButton }
            onClick={() => find(order) } > Get Order</button>
            {error && <p style={{ color: '#196838', fontWeight: 'bold', fontSize: 10 }}> No match found!!</p>}
       
        
            </div>
          </div>
        </div>
      }
      
      {
        <div>
          {found&&<div className={styles.Card}>
            <div >
              {orders &&
                <div>
                  {"\n"}
                  <div className={styles.Order}>
                    <div >
                      <p className="Stripe"> {orders.Item} </p>
                    </div>

                    <div className={styles.Item}>
                      <p  >{orders.item} </p>
                      {/* <img src={require("./milk.jpeg")} className="img" /> */}
                    </div>
                    <div className={styles.price}>
                      <p> {orders.totalPrice/100} EGP</p>
                    </div>
                    <div className={styles.StatusCard}>
                      <p className={styles.Status}>  {orders.status}</p>
                    </div>
                  </div>
                </div>
              
              }
            </div>
          </div>}
        </div>
      }
    </div>
    );
  }
  export default Order;

