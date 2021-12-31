import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from '../components/layout';


init("user_ASXLmERL5ByrsNmHHTr9A");

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (captchaValue) => {
        if (name && email && message) {
            const serviceId = 'service_9v5qyj8';
            const templateId = 'template_t3frd2p';
            const userId = 'user_ASXLmERL5ByrsNmHHTr9A';
            const templateParams = {
                name,
                email,
                message,
                'g-recaptcha-response': captchaValue,
            };

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
            <div id="contact-form" className='container my-5'>
                <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <ReCAPTCHA
                    sitekey={process.env.CAPTCHA_SITE_KEY}
                    onChange={submit}
                />
                <button onClick={submit}>Send Message</button>

                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            </div>
        </Layout>
    );
};

export default Contact;