import Head from "next/head";
//import Image from "react-konva";
import Styles from "../styles/shipping.module.css";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from 'axios';
// font-family: 'MyWebFont';
// import { useState, useEffect } from "react";
//import {
  //Button,
//Form,
 // FormGroup,
 // Input,
 // Label,
//FormFeedback,
//} from "reactstrap";
// import styles from "..styles/Home.module.css"

import React, {useEffect, useState } from "react";
import Link from "next/link";
//#7a862f
export default function Home() {
  const [shippingState, setShippingState] = useState("placed");
  //const [buttonState, setButtonState] = useState("false");
  const orderID = window.localStorage.getItem("orderID")
  console.log('orderID', orderID)
  //REMOVE FLAG WHEN STATES ARE FINALISED (FLAG FOR TESTING). LEAVE RETURNED,DELIVERED AND SHIPPED BELOW(DONT COMMENT OR DELETE)

  useEffect(() =>{
    axios.get(
      `http://localhost:3002/shipping/shipmentById/${orderID.toString()}`
    ).then((res)=>{
      console.log('res', res.data.status)
      setShippingState(res.data.status)
    })
  },[shippingState])

  let returned = "b";
  let delivered = "b";
  let shipped = "b";

  //FLAGS
  // let flag = "placed";
  // if (flag === "returned") {
  //   returned = "a";
  // }
  // if (flag === "delivered" || flag === "returned") {
  //   delivered = "a";
  // }
  // if (flag === "shipped" || flag === "delivered" || flag === "returned") {
  //   shipped = "a";
  // }

  //States
  if (shippingState === "returned") {
    returned = "a";
  }
  if (shippingState === "delivered" || shippingState === "returned") {
    delivered = "a";
  }
  if (
    shippingState === "shipped" ||
    shippingState === "delivered" ||
    shippingState === "returned"
  ) {
    shipped = "a";
  }

  // function returnButton(){
  //   if (shippingState == "placed") {
  //     buttonState = "false";
  //   }
  //   setButtonState(buttonState)
  //  };

  //Return Order Button
  // useEffect(() => { 
  //   if (shippingState == "placed") {
  //       setButtonState("true");
  //     }
  // });

  const update = () =>{
    if(shippingState == 'placed'){
    axios.get(
      `http://localhost:3002/shipping/getStatus/${orderID.toString()}`
    ).then((res)=>{
      console.log('res', res.data.status)
      setShippingState(res.data.status)
    })
    Swal.fire({
      icon: "success",
      title: "Order Returned",
      showConfirmButton: false,
      timer: 1500,
    });}
    else{
      Swal.fire({
        icon: "error",
        title: `Order has already been ${shippingState}`,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  }

  function handleOnClick() {
    if (shippingState === "placed") {
      setShippingState("returned");
      Swal.fire({
        icon: "success",
        title: "Order Returned",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else {
      Swal.fire({
        icon: "error",
        title: `Order has already been ${shippingState}`,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  }
  return (
    <div style={{ color: "#defe11" }} className="body">
      

      <main>
        <h1 style={{ color: "#00573f", fontSize: 60, fontFamily: "MyWebFont"}}>
          Rabbit Mart 
          <br></br>
          </h1>
          <a>
            <img
              // style={{ marginLeft: 75}}
              src="https://i.ibb.co/3ccW2mr/1646429235054.jpg"
              alt="1646429235054"
              border="0"
            />
          </a>
        

        <p style={{ color: "#00573f" }} className={Styles.description}>
          Shipping Status
        </p>

        <div className="grid">
          <figure style={{ color: "#00573f" }} className={Styles.card2}>
            <figcaption>
            <check>
              <Image src="/checkcircle.svg" height={39} width={39} />
              <detail>Order Placed</detail>
            </check>
            <check>
              <Image
                src={
                  shippingState === "shipped" ||
                  shippingState === "delivered" ||
                  shippingState === "returned"
                    ? "/arrowdown.svg"
                    : "/arrowdowndimmed.svg"
                }
                height={100}
                width={35}
                alt="1646429235054"
              />
            </check>
            <check>
              <Image
                src={
                  shippingState === "shipped" ||
                  shippingState === "delivered" ||
                  shippingState === "returned"
                    ? "/checkcircle.svg"
                    : "/emptycircle.svg"
                }
                height={35}
                width={35}
                alt="1646429235054"
              />
              <detail className={shipped}>Order Shipped</detail>
            </check>
            <check>
              <Image
                src={
                  shippingState === "delivered" || shippingState === "returned"
                    ? "/arrowdown.svg"
                    : "/arrowdowndimmed.svg"
                }
                height={100}
                width={35}
                alt="1646429235054"
              />
            </check>
            <check>
              <Image
                src={
                  shippingState === "delivered" || shippingState === "returned"
                    ? "/checkcircle.svg"
                    : "/emptycircle.svg"
                }
                height={35}
                width={35}
                alt="1646429235054"
              />
              <detail className={delivered}>Order Delivered</detail>
            </check>
            <check>
              <Image
                src={
                  shippingState === "returned"
                    ? "/arrowdown.svg"
                    : "/arrowdowndimmed.svg"
                }
                height={100}
                width={35}
                alt="1646429235054"
              />
            </check>
            <check>
              <Image
                src={
                  shippingState === "returned" ? "/checkcircle.svg" : "/emptycircle.svg"
                }
                height={35}
                width={35}
                alt="1646429235054"
              />
              <detail className={returned}>Returned</detail>
            </check>
            <button
            className={Styles.button3}
              onClick={update}
              >
              Return Order
            </button>
            </figcaption>
          </figure>
        
        </div>
      </main>
      

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backround-color: #00573f;
          font-family: "MyWebFont"
        }
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: white;
          font-family: "MyWebFont"
          
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "MyWebFont"
        }
        .a {
          color: #00573f;
          text-decoration: none;
          font-family: "MyWebFont"
        }
        .b {
          color: gray;
          text-decoration: none;
          font-family: "MyWebFont"
        }
        .button {
          background-color: #defe11;
          border: none;
          color: #00573f;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-left: 100px;
          font-family: "MyWebFont"
        }

        .button1 {background-color: #4CAF50;}

        .button2 {
          position: relative;
          overflow: hidden;
          height: 3rem;
          padding: 0 2rem;
          border-radius: 1.5rem;
          background: gray;
          background-size:400%;
          color: #defe11;
          font-family: "MyWebFont"
        }

        .button2:hover::before{
          transform: scaleX(1);
        }
        .button2-content{
          position:relative;
          z-index: 1;
        }
        .button2::before {
          content: "Return Order";
          align-content: center;
          justify-content: center;
          position: absolute;
          top:0;
          left: 0;
          transform: scaleX(0);
          transform-origin: 0 50%;
          width: 100%;
          height: inherit;
          border-radius: inherit;
          background: linear-gradient(
            83.2deg,
            #247860 10.8%,
            #00573f 94.3%
          );
          transition: all 0.475s;
        }

        .title a {
          background: #00573f;
          text-decoration: none;
          font-family: "MyWebFont"
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
          font-family: "MyWebFont"
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          font-family: "MyWebFont"
        }
        .title,
        .description {
          text-align: center;
          font-family: "MyWebFont"
        }
        .description {
          line-height: 1.5;
          font-size: 2rem;
          background: #00573f;
          color: #00573f;
          text-decoration: underline;
          font-family: "MyWebFont"
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
          font-family: "MyWebFont"
        }
        .card {
          width: 650px;
          height: 600px;
          background: white;
          margin: 3rem;
          flex-basis: 95%;
          padding:1.7rem;
          text-align: left;
          color: #defe11;
          text-decoration: none;
          border: 5px solid #00573f;
          border-radius: 20px;
          transition: color 0.15s ease, border-color 0.15s ease;
          font-family: "MyWebFont"
          
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #defe11;
          border-color: #defe11;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.8rem;
          font-family: "MyWebFont"
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          font-family: "MyWebFont"
        }
        .card check {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: left;
          align-items: center;
          font-family: "MyWebFont"
        }
        .card detail {
          padding:0 1.2rem;
          font-size: 1.8rem;
          flex: 1;
          display: flex;
          font-family: "MyWebFont"
         
        }
        
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #defe11;
          padding: 0;
          margin: ;
          font-family: MyWebFont;
        }
        * {
          box-sizing: border-box;
          fontFamily: "MyWebFont"
        }
      `}</style>
     
      
    </div>
  );
}
// style={{
//   color: "#defe11",
//   background: "#00573f",
//   padding: 12,
//   fontSize: 20,
//   marginLeft: 433,
//   borderColor: "white",
//   borderRadius: 12,
//   fontFamily: "MyWebFont"
// }}