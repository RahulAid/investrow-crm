import React, { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import image from "../../assets/images/Investro_Signin_Img.jpg";
import { Input } from "../../components/UI/Input";
import { login } from "../../actions";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import logo from "../../assets/images/Investrow_logo.png";
import { ForgotPasswordModal } from "../../components/ForgotPasswordModal";

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    console.log("This is user", user);

    dispatch(login(user));
    <Navigate to="/" />;
  };

  if (auth.authenticate) {
    return <Navigate to="/" />;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Row style={{ borderTop: "1px solid #efefef", position: "relative" }}>
      <ForgotPasswordModal
        isOpen={isModalOpen} // Controls modal visibility
        onClose={closeModal} // Closes the modal
      />
      <a className="absolute z-50 right-10 top-[83vh] text-blue-800 bg-red-100 sm:text-xl font-[600] p-1 xs:text-sm">
        Designed and Developed by A1 Network and IT Solutions
      </a>
      <Col
        className="w-[40%] lg:h-[45%] xl:h-[42%] xs:h-[62%]"
        style={{
          margin: "auto",
          position: "fixed",
          left: "10%",
          zIndex: "2",
          textAlign: "center",
          top: "15%",
          borderRadius: "20px",
          backgroundColor: "white",
          boxShadow: "5px 5px 5px 5px gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className=" max-h-16 " src={logo} />

          <p className="text-2xl font-[600] text-green-800 ">
            Leads Management Tool
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
              color: "gray",
              margin: "0px",
              letterSpacing: "4px",
              marginTop: "10px",
            }}
          >
            MAXIMIZING CUSTOMER TOUCHPOINTS
          </p>
        </div>

        <Form
          onSubmit={userLogin}
          style={{ margin: "auto", minWidth: "400px", position: "relative" }}
        >
          <Input
            id=""
            placeholder="Enter email"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black w-[100%] pl-2 mt-4 h-8 xs:w-[80%] font-[600]"
          />
          <Input
            class="mb-3"
            id="formBasicPassword"
            placeholder="Password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black w-[100%] pl-2 mt-4 h-8 xs:w-[80%] font-[600]"
          />
          <Button
            variant="success"
            type="submit"
            className="bg-blue-200 p-1 pl-3 pr-3 rounded-full text-[20px] font-[600] mt-3 hover:bg-green-300"
          >
            Sign In
          </Button>
          <a
            style={{
              position: "absolute",
              bottom: 42,
              right: 40,
              fontSize: "12px",
              cursor: "pointer",
            }}
            onClick={openModal}
          >
            Forgot Password ?
          </a>
        </Form>
        <p className="text-danger mt-3">{/* {auth.message} */}</p>
      </Col>
      <Col
        md={22}
        style={{ position: "fixed", zIndex: "1", left: 0, width: "100%" }}
      >
        <img
          src={image}
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "100vh",
            margin: "auto",
            objectFit: "cover",
          }}
        />
      </Col>
    </Row>
  );
};
