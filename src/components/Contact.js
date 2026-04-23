'use client';
import { useState } from 'react';
import styles from './Contact.module.css';
import Reveal from '@/components/Reveal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred.');
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <Reveal>
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.text}>
                        Have a project in mind or just want to say hi? Feel free to send me a message!
                    </p>
                </Reveal>

                <Reveal animationClass="reveal-up">
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className={styles.textarea}
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.button}>Send Message</button>

                        {status && <p className={styles.status}>{status}</p>}
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
