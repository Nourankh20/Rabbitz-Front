import React, { useState } from "react";
import Cleave from "cleave.js/react";
import { Button, Modal, Form } from "react-bootstrap-v5";
import { FormFeedback } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "../styles/creditCard.module.css";
// import "../styles/globals.css"
import Swal from "sweetalert2";

const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png",
];

export default function App() {
  const [creditCardNum, setCreditCardNum] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expireMonth, setExpireMonth] = useState("January");
  const [expireYear, setExpireYear] = useState("2023");
  const [cvv, setCVV] = useState("");

  const [creditCardNumState, setCreditCardNumState] = useState("");
  const [cardHolderState, setCardHolderState] = useState("");
  const [cvvState, setCVVState] = useState("");
  // const [expireMonthState, setExpireMonthState] = useState("January");
  // const [expireYearState, setExpireYearState] = useState("2021");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateCardHolder = (value) => {
    let cardHolderState;
    if (value.length > 2) {
      cardHolderState = "has-success";
      console.log("Success");
    } else {
      cardHolderState = "has-danger";
      console.log("Danger");
    }
    setCardHolderState(cardHolderState);
  };

  const validateCardNumber = (value) => {
    let creditCardNumState;

    if (value.length == 16) {
      creditCardNumState = "has-success";
      console.log("Success");
    } else {
      creditCardNumState = "has-danger";
      console.log("Danger");
    }
    setCreditCardNumState(creditCardNumState);
  };

  const validateCVV = (value) => {
    let cvvState;

    if (value.length == 3) {
      cvvState = "has-success";
      console.log("Success");
    } else {
      cvvState = "has-danger";
      console.log("Danger");
    }
    setCVVState(cvvState);
  };

  // const validateMonth = (value) => {
  //   let expireMonthState ;
  //   if (value != false) {
  //     expireMonthState = "has-success";
  //     console.log("Success")
  //   }
  //   else {
  //     expireMonthState = "has-danger";
  //     console.log("Danger")
  //   }
  //   setExpireMonthState(expireMonthState)
  // }

  // const validateYear = (value) => {
  //   let expireYearState ;
  //   if (value != false) {
  //     expireYearState = "has-success";
  //     console.log("Success")
  //   }
  //   else {
  //     expireYearState = "has-danger";
  //     console.log("Danger")
  //   }
  //   setExpireYearState(expireYearState)
  // }

  const handleNum = (e) => {
    validateCardNumber(e.target.rawValue);
    setCreditCardNum(e.target.rawValue);
    console.log(e.target.value);
  };

  const handleCardHolder = (e) => {
    validateCardHolder(e.target.value);
    setCardHolder(e.target.value);
    console.log(e.target.value);
  };

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
    console.log(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
    console.log(e.target.value);
  };

  const handleCVV = (e) => {
    validateCVV(e.target.value);
    setCVV(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    validateCardHolder(cardHolder);
    validateCardNumber(creditCardNum);
    validateCVV(cvv);

    console.log("Card Holder: ", cardHolder);
    console.log("Card Holder State: ", cardHolderState);
    console.log("Card Number State: ", creditCardNumState);
    console.log("Card CVV: ", cvvState);

    if (
      cardHolderState === "has-success" &&
      creditCardNumState === "has-success" &&
      cvvState === "has-success"
    ) {
      console.log(
        "Holder: ",
        cardHolder,
        "Card Number: ",
        creditCardNum,
        "CVV: ",
        cvv,
        "Expire Month: ",
        expireMonth,
        "Expire Year: ",
        expireYear
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Fill Everything!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
    {/* <body className={Styles.Body}> */}
      <div id="formTest">
        <Button
          className="order"
          variant="dark"
          type="submit"
          onClick={handleShow}
        >
          Confirm order and pay
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header> Confirm payment </Modal.Header>
        <Modal.Body>
          <div class="col-md-12 text-center">
            <Form>
              <div className={Styles.container}>
                <form id="form">
                  <div className="input-grp">
                    <div class="input-container">
                      <h1> Credit Card </h1>
                    </div>
                    <div id="visa" class="input-container">
                      <img
                        className="logo"
                        src={imageUrls[0]}
                        alt="Card logo"
                      />
                    </div>
                    <div id="mastercard" class="input-container">
                      <img
                        className="logo"
                        src={imageUrls[1]}
                        alt="Card logo"
                      />
                    </div>
                  </div>

                  <div>
                    <Cleave
                      name="cardNumber"
                      delimiter="-"
                      options={{
                        creditCard: true,
                      }}
                      value={creditCardNum}
                      valid={creditCardNumState === "has-success"}
                      invalid={creditCardNumState === "has-danger"}
                      onChange={handleNum}
                      placeholder="Card Number"
                    />
                    <FormFeedback>
                      ID is incorrect or has been registered with before.
                    </FormFeedback>
                  </div>

                  <div>
                    <input
                      name="cardHolder"
                      value={cardHolder}
                      valid={cardHolderState === "has-success"}
                      invalid={cardHolderState === "has-danger"}
                      onChange={handleCardHolder}
                      type="text"
                      placeholder="Card Holder Name"
                      required
                    />
                  </div>

                  <div className="input-grp">
                    <div className="input-container">
                      <h4>Exp. Month</h4>
                      <select value={expireMonth} onChange={handleExpMonth}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                    <div className="input-container">
                      <h4>Exp. Year</h4>
                      <select value={expireYear} onChange={handleExpYear}>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2029">2030</option>
                        <option value="2029">2031</option>
                      </select>
                    </div>
                    <div className="input-container">
                      <h4>CVV</h4>
                      <input
                        name="cvv"
                        type="password"
                        placeholder="CVV"
                        value={cvv}
                        valid={cvvState === "has-success"}
                        invalid={cvvState === "has-danger"}
                        onChange={handleCVV}
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    class="btn btn-primary btn-lg"
                  >{`${cardType} Pay `}</Button>
                </form>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* </body> */}
    </>
  );
}