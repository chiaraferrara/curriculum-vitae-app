import { useEffect, useState } from "react";
import { MainHeading, Wrapper } from "../styles";
import { experienceData } from "../utils";
import Chip from "./Chip";

import styled from "@emotion/styled";
import emailjs from "emailjs-com";

const Container = styled.div`
  background-color: ##000000;
  color: black;
  min-height: 100vh;
  padding-top: 40px;
  @media (min-width: 768px) {
    width: max(70%);
    margin: 0 auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;ss
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #313233;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #4d63a1;
  }
`;

export default function Contact() {
  const PUBLIC_ID = process.env.NEXT_PUBLIC_ID;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send("service_cv", "template_riquvvv", formData, PUBLIC_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send the message, please try again.");
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Container>
        <MainHeading>For any question, contact me!</MainHeading>
        <p>I will send you an email upon reading the message.</p>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}
