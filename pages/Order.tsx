import React, { useState } from 'react';
import logo from './rabbit-t.png';
import './Order.css';


interface Order {
  stripeID: string;
  email: string;
  items: string[];
  Status: string;
  totalPrice: number;
};
const Order1 = {
  stripeID: "#LQM-25557789",
  email: "mail",
  items: ["milk "],
  Status: "Shipped",
  totalPrice: 23.80,
} as Order;


function Order() {

  const [order, setOrderId] = useState(" ");
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    setOrders([...orders, Order1]);
    // setOrder( order);

  };
  const Search =async (e:string)=> {
    if (e!==Order1.stripeID){
      showError(true)
    }
    else{
      handleSubmit()
      
    }
    
     
  };

  return (

    <div className="App">
      <header className="App-header">
        <p  >
          My Orders
        </p>
      </header>
      {orders.length === 0 &&
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: '#196838', fontWeight: 'bold', fontSize: 20 }}>
            You have no orders yet!
          </p>
          <button className='Button' 
          // onClick={() => { handleSubmit() }}
          >
            Browse Products
          </button>
          <div style={{marginTop: 20}}>
            <p style={{ color: '#196838', fontWeight: 'bold', fontSize: 20 ,marginTop: 100}}>
              Or Enter your Oredr ID
            </p>
            <div>
            <input 
            type="text"  
            name="item" 
            placeholder="Enter Oredr ID.." 
            onChange={(e) => {setOrderId(e.target.value); showError(false);}}
            required
            />
            <button  className='orderButton' 
            onClick={() => Search(order) } > Get Oreder</button>
            {error && <p style={{ color: '#196838', fontWeight: 'bold', fontSize: 10 }}> No match found!!</p>}
       
        
            </div>
          </div>
        </div>
      }
      
      {
        <div>
          {<div className="Card">
            <div >
              {orders.map((order: Order, idx: number) => (
                <div>
                  {"\n"}
                  <div className="Order">
                    <div >
                      <p className="Stripe"> {order.stripeID} </p>
                    </div>

                    <div className="Item">
                      <p  >{order.items} </p>
                      <img src={require("./milk.jpeg")} className="img" />
                    </div>
                    <div className="price">
                      <p> {order.totalPrice.toFixed(2)} EGP</p>
                    </div>
                    <div className="StatusCard">
                      <p className="Status">  {order.Status}</p>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>}
        </div>
      }
    </div>
  );
}
export default Order;
