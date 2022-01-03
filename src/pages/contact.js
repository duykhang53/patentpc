import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser';
import Layout from '../components/layout';
import Form from 'react-bootstrap/Form';
import { Link } from 'gatsby';
init("user_zBTH4MMXVd61RJQjY4za1");

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        if (name && email && message) {
            const serviceId = process.env.serviceId;
            const templateId = process.env.templateId;
            const userId = process.env.userId;
            const templateParams = {
                name,
                email,
                message
            };
            e.preventDefault();
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
        <Layout>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div id="contact-form">
                            <div className='mb-5'>
                                <h1 className='display-3 mb-5'>Contact US</h1>
                                <div className='mb-3'>
                                    <p className='d-flex h5 align-items-center'><i className="bi bi-geo me-3 display-6"></i><span>4701 Patrick Henry Dr, Building #16, Santa Clara, CA 95054</span></p>
                                </div>
                                <div className='mb-3 contact'>
                                    <p className='d-flex h5 align-items-center'><i className="bi bi-headset me-3 display-6"></i><Link to="8002343032">800 234-3032</Link></p>
                                </div>
                            </div>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicNBame" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicMessage" >
                                    <Form.Label>Your Message</Form.Label>
                                    <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                </Form.Group>
                                <button className='btn btn-outline-danger' onClick={submit}>Send Message</button>
                                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Contact;
