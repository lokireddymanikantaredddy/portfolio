import React, { useRef, useState } from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import facebookicon from '../../assets/facebook-icon.png';
import twittericon from '../../assets/twitter.png';
import youtubeicon from '../../assets/youtube.png';
import instagramicon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const formData = new FormData(form.current);
    const errors = {
      name: !formData.get('your_name'),
      email:
        !formData.get('your_email') ||
        !/^\S+@\S+\.\S+$/.test(formData.get('your_email')),
      message: !formData.get('message'),
    };
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const notifySuccess = () =>
    toast.success('Message sent successfully!', {
      icon: '👍',
      autoClose: 2500,
    });

  const notifyError = () =>
    toast.error('Failed to send message. Please try again.', {
      autoClose: 2500,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm('service_4ky2877', 'template_s3rdyba', form.current, {
        publicKey: '0NUmXPJEGEzM0d7kA',
      })
      .then(
        () => {
          notifySuccess();
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          notifyError();
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contactpage">
      <motion.div
        id="clients"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="contactpagetitle">Clients</h1>
        <p className="clientdesc">
          I'm just starting out as a developer, so I don't have any clients yet.
          You would be the first one to work with me. I'm eager to learn and
          improve my skills. I think we can create something great together 😊
        </p>
      </motion.div>

      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdesc">
          Please fill out the form below to discuss any work opportunities
        </span>

        <motion.form
          className="contactform"
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="form-group">
            <input
              type="text"
              className={`name ${formErrors.name ? 'error' : ''}`}
              placeholder="Your Name"
              name="your_name"
            />
            {formErrors.name && (
              <span className="error-message">Name is required</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              className={`email ${formErrors.email ? 'error' : ''}`}
              placeholder="Enter Your Email"
              name="your_email"
            />
            {formErrors.email && (
              <span className="error-message">
                {form.current && !form.current.your_email.value
                  ? 'Email is required'
                  : 'Please enter a valid email'}
              </span>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              className={`msg ${formErrors.message ? 'error' : ''}`}
              placeholder="Your Message"
            />
            {formErrors.message && (
              <span className="error-message">Message is required</span>
            )}
          </div>

          <button className="submitbtn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>

          <motion.div
            className="links"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {[facebookicon, twittericon, youtubeicon, instagramicon].map(
              (icon, idx) => (
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  key={idx}
                  src={icon}
                  alt="Social link"
                  className="link"
                />
              )
            )}
          </motion.div>
        </motion.form>

        <ToastContainer position="top-right" />
      </motion.div>
    </section>
  );
};

export default Contact;
