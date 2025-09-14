import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

export default function ContactForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
  const { email, name, phone, message } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/send-email",
        inputValue
      );
      alert(res.data);
      setInputValue({
        email: "",
        name: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        alert(err.response.data);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="container pb-5 mb-5">
      <div className="row p-md-3">
        <div className="col-lg-6 p-md-5 mt-3">
          <h3 className="fs-1">
            <span className="text">Connect</span> with our <br /> team of
            experts
          </h3>
          <p className="mt-3">We are available 24x7 for you!</p>
          <p style={{ marginBottom: "5rem" }}>
            We're here to help! If you have any questions or would like to
            discuss how our SEO and digital marketing services can benefit your
            business,
          </p>
          <div className="row align-items-center g-4">
            <div className="col-2 mb-3">
              <i
                className="fa-solid fa-location-dot profile"
                style={{ height: "50px", width: "50px" }}
              ></i>
            </div>
            <div className="col-10">
              <h5>Our Location</h5>
              <p>Rajrooppur, Prayagraj</p>
            </div>
            <div className="col-2 mb-3">
              <i
                class="fa-solid fa-phone profile"
                style={{ height: "50px", width: "50px" }}
              ></i>
            </div>
            <div className="col-10">
              <h5>Phone Number</h5>
              <p>+91 945-287-3121</p>
            </div>
            <div className="col-2 mb-3">
              <i
                class="fa-solid fa-envelope profile"
                style={{ height: "50px", width: "50px" }}
              ></i>
            </div>
            <div className="col-10">
              <h5>Email Address</h5>
              <p>brandmedia10112003@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form_container">
            <h2>Get In Touch</h2>
            <p className="text-muted">
              Have questions? Our SEO and digital marketing team is just a
              message away — ready with strategies tailored to grow your
              business.
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="password">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone number"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  value={message}
                  placeholder="Enter your message"
                  onChange={handleOnChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
