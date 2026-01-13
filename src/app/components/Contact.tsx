import { useState } from "react";
import { MainHeading, Wrapper } from "../styles";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
  min-height: 60vh;
`;

const Description = styled.p`
  text-align: center;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  font-size: 0.9375rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-family: inherit;
  background: var(--color-background);
  color: var(--color-text);
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(75, 85, 99, 0.1);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-family: inherit;
  background: var(--color-background);
  color: var(--color-text);
  min-height: 150px;
  resize: vertical;
  transition: all var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(75, 85, 99, 0.1);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`;

const Button = styled.button`
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--radius-md);
  background-color: var(--color-accent);
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  align-self: flex-start;
  margin-top: var(--spacing-xs);

  &:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export default function Contact() {
  const PUBLIC_ID = process.env.NEXT_PUBLIC_ID;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send("service_cv", "template_riquvvv", formData, PUBLIC_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send the message, please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container>
      <MainHeading>Get in Touch</MainHeading>
      <Description>
        I will send you an email upon reading the message.
      </Description>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
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
            placeholder="Your email"
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
