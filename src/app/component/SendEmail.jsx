

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SendEmail() {
    const [show, setShow] = useState(false);
    const [Email, setEmail] = useState("");
    const [EmailBody, setEmailBody] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const chackIfEmpty = () => {
        if (Email.trim().length !== 0 && EmailBody.trim().length !== 0) {
            return false
        }
        else {
            return true
        }
    }

    return (
        <>
            <div className='email'>
                <Button onClick={handleShow}>
                    ارسال ایمیل
                </Button>
            </div>

            <Modal className='email-main-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>  ارسال ایمیل  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 email-modal-email-input" controlId="exampleForm.ControlInput1">
                            <Form.Label>آدرس ایمیل شما :</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3 email-modal-email-input"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>متن :</Form.Label>
                            <Form.Control
                                onChange={(e) => { setEmailBody(e.target.value) }}
                                value={EmailBody}
                                as="textarea"
                                required
                                rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer dir='ltr'>
                    <Button disabled={chackIfEmpty()} className='send-email-btn' onClick={() => {
                        handleClose();
                        console.log(Email, EmailBody);
                        setEmail("")
                        setEmailBody("")
                    }}>
                        ارسال
                    </Button>
                    <Button className='cancel-send-email-btn' variant="secondary" onClick={handleClose}>
                        بستن
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default SendEmail;