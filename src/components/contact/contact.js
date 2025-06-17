import React, { useRef, useState, useCallback, useEffect } from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import { FaPaperclip, FaPaperPlane, FaSpinner, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { debounce } from 'lodash';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 1000;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    preferredContact: 'email'
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormDraft');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const debouncedSave = useCallback(
    debounce((data) => {
      localStorage.setItem('contactFormDraft', JSON.stringify(data));
    }, 1000),
    []
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    debouncedSave(newFormData);

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }

    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error('Please upload only images (JPEG/PNG) or PDF files');
        e.target.value = null;
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error('File size should be less than 5MB');
        e.target.value = null;
        return;
      }
      setSelectedFile(file);
    }
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim() || formData.message.length < MESSAGE_MIN_LENGTH
    };
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const notifySuccess = () =>
    toast.success('Message sent successfully! I will get back to you soon.', {
      icon: '👍',
      autoClose: 3000,
    });

  const notifyError = () =>
    toast.error('Failed to send message. Please try again.', {
      autoClose: 3000,
    });

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
      preferredContact: 'email'
    });
    setSelectedFile(null);
    setMessageLength(0);
    localStorage.removeItem('contactFormDraft');
    if (form.current) {
      form.current.reset();
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        contact_preference: formData.preferredContact,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        'service_4ky2877',
        'template_je1jd8c',
        templateParams,
        '0NUmXPJEGEzM0d7kA'
      );

      notifySuccess();
      resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      notifyError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMessageCounterClass = () => {
    if (messageLength >= MESSAGE_MAX_LENGTH) return 'at-limit';
    if (messageLength >= MESSAGE_MAX_LENGTH * 0.9) return 'near-limit';
    return '';
  };

  const renderCharacterCount = () => (
    <span className={`message-counter ${getMessageCounterClass()}`}>
      {messageLength}/{MESSAGE_MAX_LENGTH}
      {messageLength >= MESSAGE_MAX_LENGTH * 0.9 && ' (Nearing limit)'}
    </span>
  );

  const renderFilePreview = () => {
    if (!selectedFile) return null;
    
    return (
      <motion.div 
        className="file-name"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaPaperclip />
        <span>{selectedFile.name}</span>
        <button
          type="button"
          onClick={() => setSelectedFile(null)}
          className="remove-file"
          aria-label="Remove file"
        >
          ×
        </button>
      </motion.div>
    );
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
        <div className="clients-desc-container">
          <p className="clients-desc">
            As an emerging developer, I'm excited to embark on my professional journey. While I may be new to the industry, I bring fresh perspectives, unwavering dedication, and a strong eagerness to learn and grow. I believe in creating meaningful collaborations and would love to be part of your next project, turning innovative ideas into reality.
          </p>
        </div>
      </motion.div>

      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="contactpagetitle">Contact Me</h1>
        <div className="contact-desc-container">
          <p className="contact-desc">
            Ready to start a project or discuss opportunities? I'm always excited to collaborate on innovative ideas and challenging projects. Whether you need a full-stack application, a responsive website, or technical consultation, let's connect and create something amazing together!
          </p>
        </div>

        <motion.form
          className="contactform"
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          aria-label="Contact form"
          role="form"
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                id="name"
                type="text"
                className={`name ${formErrors.name ? 'error' : formData.name ? 'success' : ''}`}
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={formErrors.name}
              />
              {formErrors.name && (
                <span className="error-message" role="alert">Name is required</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                id="email"
                type="email"
                className={`email ${formErrors.email ? 'error' : formData.email ? 'success' : ''}`}
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={formErrors.email}
              />
              {formErrors.email && (
                <span className="error-message" role="alert">
                  {!formData.email ? 'Email is required' : 'Please enter a valid email'}
                </span>
              )}
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject *</label>
              <input
                id="subject"
                type="text"
                className={`subject ${formErrors.subject ? 'error' : formData.subject ? 'success' : ''}`}
                placeholder="Message Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                aria-required="true"
                aria-invalid={formErrors.subject}
              />
              {formErrors.subject && (
                <span className="error-message" role="alert">Subject is required</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone (Optional)</label>
              <input
                id="phone"
                type="tel"
                className="phone"
                placeholder="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                aria-required="false"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="preferredContact" className="form-label">Preferred Contact Method</label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
              className="contact-select"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="either">Either</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`msg ${formErrors.message ? 'error' : formData.message ? 'success' : ''}`}
              placeholder="Tell me about your project, ideas, or questions..."
              value={formData.message}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={formErrors.message}
              maxLength={MESSAGE_MAX_LENGTH}
            />
            <div className="message-meta">
              {formErrors.message && (
                <motion.span 
                  className="error-message" 
                  role="alert"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Message must be at least {MESSAGE_MIN_LENGTH} characters
                </motion.span>
              )}
              {renderCharacterCount()}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="attachment" className="file-input-label">
              <FaPaperclip /> Attach File (Optional)
            </label>
            <input
              id="attachment"
              type="file"
              className="file-input"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
              aria-label="File attachment"
            />
            {renderFilePreview()}
          </div>

          <motion.button 
            className={`submitbtn ${isSubmitting ? 'loading' : ''}`}
            type="submit" 
            disabled={isSubmitting}
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="button-content">
              {isSubmitting ? (
                <>
                  <FaSpinner className="spinner" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="send-icon" />
                  <span>Send Message</span>
                </>
              )}
            </span>
            <div className="button-background"></div>
          </motion.button>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="social-link facebook"
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="social-link twitter"
              aria-label="Twitter Profile"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="social-link youtube"
              aria-label="YouTube Channel"
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="social-link instagram"
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.form>

        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
