"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";

import styles from "./CheckoutModal.module.css";

const CheckoutSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  cardHolder: Yup.string().required("Card holder name is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format")
    .required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVV")
    .required("CVV is required"),
  orderType: Yup.string().required("Order type is required"),
});

export default function CheckoutModal({ onClose, onSubmit }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close checkout modal"
        >
          <IoClose size={22} />
        </button>
        <h2 className={styles.title}>Checkout</h2>

        <Formik
          initialValues={{
            cardNumber: "",
            cardHolder: "",
            expiryDate: "",
            cvv: "",
            orderType: "DELIVERY",
          }}
          validationSchema={CheckoutSchema}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
        >
          {({ touched, errors }) => (
            <Form className={styles.form}>
              {/* Card Number */}
              <div className={styles.field}>
                <label>Card Number</label>
                <Field
                  name="cardNumber"
                  className={
                    touched.cardNumber && errors.cardNumber
                      ? styles.inputError
                      : ""
                  }
                />
                <ErrorMessage
                  name="cardNumber"
                  render={(msg) => <span className={styles.error}>{msg}</span>}
                />
              </div>

              {/* Card Holder */}
              <div className={styles.field}>
                <label>Card Holder</label>
                <Field
                  name="cardHolder"
                  className={
                    touched.cardHolder && errors.cardHolder
                      ? styles.inputError
                      : ""
                  }
                />
                <ErrorMessage
                  name="cardHolder"
                  render={(msg) => <span className={styles.error}>{msg}</span>}
                />
              </div>

              {/* Expiry + CVV */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Expiry Date</label>
                  <Field
                    name="expiryDate"
                    placeholder="MM/YY"
                    className={
                      touched.expiryDate && errors.expiryDate
                        ? styles.inputError
                        : ""
                    }
                  />
                  <ErrorMessage
                    name="expiryDate"
                    render={(msg) => (
                      <span className={styles.error}>{msg}</span>
                    )}
                  />
                </div>

                <div className={styles.field}>
                  <label>CVV</label>
                  <Field
                    name="cvv"
                    type="password"
                    className={
                      touched.cvv && errors.cvv ? styles.inputError : ""
                    }
                  />
                  <ErrorMessage
                    name="cvv"
                    render={(msg) => (
                      <span className={styles.error}>{msg}</span>
                    )}
                  />
                </div>
              </div>

              {/* Order Type */}
              <div className={styles.field}>
                <label>Order Type</label>
                <Field as="select" name="orderType">
                  <option value="DELIVERY">Delivery</option>
                  <option value="TAKEAWAY">Takeaway</option>
                </Field>
              </div>

              <button type="submit" className={styles.submit}>
                Confirm Order
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
