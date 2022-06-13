import Head from "next/head";
//import Image from "react-konva";
import Styles from "../styles/shipping.module.css";
import Image from "next/image";
//import {
  //Button,
  //Form,
 // FormGroup,
 // Input,
 // Label,
  //FormFeedback,
//} from "reactstrap";
// import styles from "..styles/Home.module.css"
import React, { useState } from "react";
//import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

export default function Home() {
  const [shippingState, setShippingState] = useState("placed");
  //const [buttonState, setButtonState] = useState("true");

  //REMOVE FLAG WHEN STATES ARE FINALISED (FLAG FOR TESTING). LEAVE RETURNED,DELIVERED AND SHIPPED BELOW(DONT COMMENT OR DELETE)

  let returned = "b";
  let delivered = "b";
  let shipped = "b";

  //FLAGS
  let flag = "placed";
  if (flag === "returned") {
    returned = "a";
  }
  if (flag === "delivered" || flag === "returned") {
    delivered = "a";
  }
  if (flag === "shipped" || flag === "delivered" || flag === "returned") {
    shipped = "a";
  }

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
  //   if (flag == "placed") {
  //     buttonState = "false";
  //   }
  //   setButtonState(buttonState)
  //  };

  //   const handleOnClick = () => {
  //     returnButton();
  //     if (shippingState == "placed"){
  //       setShippingState("returned");
  //   }
  // };

  //Return Order Button
  function handleOnClick() {
    //returnButton();
    if (shippingState === "placed") {
      setShippingState("returned");
    }
  }
  return (
    <div style={{ color: "#defe11" }} className="body">
      <Head>
        <link
          rel="stylesheet"
          // href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        />
      </Head>

      <main>
        <h1 style={{ color: "#defe11" }}>
          Rabbit Mart
          <a href="https://imgbb.com/">
            <img
              style={{ marginLeft: 8 }}
              src="https://i.ibb.co/3ccW2mr/1646429235054.jpg"
              alt="1646429235054"
              border="0"
            />
          </a>
        </h1>

        <p style={{ color: "#defe11" }} className={Styles.description}>
          Shipping Status
        </p>

        <div className="grid">
          <a style={{ color: "#defe11" }} className="card">
            <check>
              <Image src="/checkcircle.svg" height={39} width={39} />
              <detail>Order Placed</detail>
            </check>
            <check>
              <Image
                src={
                  flag === "shipped" ||
                  flag === "delivered" ||
                  flag === "returned"
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
                  flag === "shipped" ||
                  flag === "delivered" ||
                  flag === "returned"
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
                  flag === "delivered" || flag === "returned"
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
                  flag === "delivered" || flag === "returned"
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
                  flag === "returned"
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
                  flag === "returned" ? "/checkcircle.svg" : "/emptycircle.svg"
                }
                height={35}
                width={35}
                alt="1646429235054"
              />
              <detail className={returned}>Returned</detail>
            </check>
            <button
              onClick={handleOnClick}
              style={{
                color: "#00573f",
                background: "#defe11",
                padding: 12,
                fontSize: 20,
                marginLeft: 440,
              }}
            >
              Return Order
            </button>
          </a>
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
        }
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #00573f;
          
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
        }
        .a {
          color: #defe11;
          text-decoration: none;
        }
        .b {
          color: #7a862f;
          text-decoration: none;
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
        }
        .button1 {background-color: #4CAF50;}
        .title a {
          background: #00573f;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 2rem;
          background: #00573f;
          color: #00573f;
          text-decoration: underline;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
        }
        .card {
          width: 650px;
          height: 600px;
          background: #00573f;
          margin: 3rem;
          flex-basis: 95%;
          padding:1.7rem;
          text-align: left;
          color: #defe11;
          text-decoration: none;
          border: 5px solid #defe11;
          border-radius: 20px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.8rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .card check {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: left;
          align-items: center;
        }
        .card detail {
          padding:0 1.2rem;
          font-size: 1.8rem;
          flex: 1;
          display: flex;
         
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
        }
      `}</style>
    </div>
  );
}