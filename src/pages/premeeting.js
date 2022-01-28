import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser';
import Layout from '../components/layout';
import SEO from "../components/seo";
import Form from 'react-bootstrap/Form';
import { Link } from 'gatsby';
init("user_zBTH4MMXVd61RJQjY4za1");

const PreMeeting = () => {
    const seo = { metaDesc: 'Patents, Trademarks, Copyrights, Trade Secrets' };
    //
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            const serviceId = 'service_kxcybmy';
            const templateId = 'template_unl3mif';
            const userId = 'user_zBTH4MMXVd61RJQjY4za1';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then((response) => { 
                    console.log(response);
                }, (err) => {
                    console.log('FAILED...', err);
                });

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            // open calendar
            const url = 'https://calendly.com/patentpc/one-on-one-with-attorney-tran';
            window.open(url, '_blank', 'noopener,noreferrer')
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
        <Layout>
            <SEO title="Contact US"  canonical='/contact' seo={seo} />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div id="contact-form">
                            <div className='mb-5'>
                                <h1 className='display-6 mb-5'>Before scheduling your meeting, please share with us some information</h1>
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
                                <button className='btn btn-outline-warning' onClick={submit}>Send Information</button>
                                <span className={emailSent ? 'visible text-center mt-4' : null}>Thank you for your message, we will be in touch in no time!</span>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default PreMeeting;
