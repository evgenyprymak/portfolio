// @ts-ignore

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Menu from './Menu';
import Header from './components/Header';
import './css/Email.css';
import Divider from './components/Divider';
import PointsBackground from './components/PointsBackground';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
        )
            .then(() => {
                setSuccess(true);
                setError(false);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                setSuccess(false);
                setError(true);
                setTimeout(() => setSuccess(false), 5000);
            });
    };

    return (
        <div className='email-container'>
            <Menu
            contact
            transparent />
            <PointsBackground />
            <div className='container-xxl px-4 mt-80'>
                <Header
                    title={<span>Get in Touch</span>}
                    description={<span>I'm here to chat about design ideas, projects, or any questions you might have.</span>}
                    colorDescription='var(--txt-light-3)'
                />
                <div className="row row-gap-2 contact-button-group">
                    <a className='col-md-6 card-gap-2 contact-button' href="https://www.linkedin.com/in/evgenyprymak/"><img src='/portfolio/assets/icons/icon_linkedin.svg' style={{ height: '24px', marginLeft: '8px', marginRight: '8px', marginTop: '-2px' }} />My LinkedIn</a>
                    <div className='gap-4-vertical'></div>
                    <a className='col-md-6 card-gap-2 contact-button' href="mailto:prymakev@gmail.com"><img src='/portfolio/assets/icons/icon_email.svg' style={{ height: '24px', marginLeft: '8px', marginRight: '8px', marginTop: '0px' }} />prymakev@gmail.com</a>
                </div>
                <Divider type='light' />
                <Header title={<span>Drop me a message—I’d love to connect!</span>} size='small' />
                <div className='contactForm'>
                {success && (
                    <div className="div-success">Message sent successfully!</div>
                )}
                {error && (
                    <div className="div-error">Oops, something went wrong. Please try sending your message again, or feel free to reach out via my email listed above!</div>
                )}
                    <form onSubmit={handleSubmit}>
                        <div className='row row-gap-2'>
                            <div className='col-md-6 card-gap-2'>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name *"
                                    required
                                />
                            </div>
                            <div className='col-md-6 card-gap-2'>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email *"
                                    required
                                />
                            </div>
                        </div>
                        <div className='row row-gap-2'>
                            <div className='col-12 card-gap-2'>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="The message *"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
