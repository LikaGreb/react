import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./Modal.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import MyToast from "../ToastContainer/ToastContainer";
import {  toast } from "react-toastify";


function Mymodal() {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && text !== "") {
      
      try {
        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          { title, body: text, userId: 1 }
        );
        console.log(res.data.userId);
        if (title.length > 100) {
          toast("Title lenght must be under 100 characters");
        }
        if (text.length > 200) {
          toast("Text lenght must be under 200 characters");
        }
        else if (res.status === 201 && text.length<=200 && title.length<=100 && res.data.userId>0) {
          toast("OK, post was Created!");
          setTimeout(() => {
            handleClose();
          }, 3000);
          return;
        }
      } catch {
        toast("404 Server error!!!");
        return;
      }
    } else {
      toast("Empty values!!!");
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MyToast />
      <Button className={styles.btnAdd} variant="light" onClick={handleShow}>
        Add new post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Post body</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Mymodal;
