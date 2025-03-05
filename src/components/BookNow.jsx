import React, { useState } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaStickyNote,
} from "react-icons/fa";

const Container = styled.div`
  background-color: #fbf2e0;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100%;
  @media (max-width: 480px) {
    padding: 15px;

  }
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 60%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h5 {
    color: #ba7894;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #422a3c;
    margin-bottom: 10px;
    font-family: "Playfair Display", serif;
    @media (max-width: 480px) {
      font-size: 20px;

  }
  }

  p {
    font-size: 14px;
    color: #777;
    @media (max-width: 480px) {
      font-size: 12px;

  }
  }
`;
const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 30px; /* Increased spacing to prevent overlap */

  svg {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #777;
    font-size: 16px;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px 12px 40px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    resize: none;

    &:focus {
      border-color: #a97177;
    }
  }

  textarea {
    height: 100px;
  }

  span {
    position: absolute;
    bottom: -18px; /* Moves error message below input */
    left: 40px; /* Aligns with input text */
    color: red;
    font-size: 12px;
  }
`;

const Input = styled(InputWrapper)`
  svg {
    top: 23%;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #422a3c;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #412e3c;
  }
`;

const BookNow = () => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newError = {};
    if (!formData.name || formData.name.length < 3) {
      newError.name = "Name must be at least 3 characters.";
    }

    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailExp.test(formData.email)) {
      newError.email = "Please enter a valid email address.";
    }

    const phoneExp = /^\d{10}$/;

    if (!formData.phone || !phoneExp.test(formData.phone)) {
      newError.phone = "Phone number must be a 10-digit number.";
    }

    if (!formData.note || formData.note.length < 10) {
      newError.note = "Note must be at least 10 characters.";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      // Reset form if needed
      SetFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        note: "",
      });
    }
  };
  return (
    <Container>
      <FormWrapper>
        <Heading>
          <h5>Schedule your presence</h5>
          <h2>Get in touch</h2>
          <p>
            For any queries, appointment bookings, or to simply get in touch,
            we're here to help you.
          </p>
        </Heading>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <FaUser />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <p>{errors.name && <span>{errors.name}</span>}</p>
          </InputWrapper>
          <InputWrapper>
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </InputWrapper>
          <InputWrapper>
            <FaPhone />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </InputWrapper>
          <InputWrapper>
            <FaClipboardList />
            <input
              type="text"
              placeholder="Service You Need"
              name="service"
              value={formData.service}
              onChange={handleChange}
            />
          </InputWrapper>
          <Input>
            <FaStickyNote />
            <textarea
              placeholder="Any Note For Us"
              name="note"
              value={formData.note}
              onChange={handleChange}
            ></textarea>
            {errors.note && <span>{errors.note}</span>}
          </Input>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default BookNow;
