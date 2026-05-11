import Button from '@Component/Button'
import SeoHead from '@Component/SeoHead'
import { Field, Form, Formik } from 'formik'
import React from 'react'

const contactInfo = [
  {
    label: 'Location',
    value: 'Jhenaidah, Bangladesh',
  },
  {
    label: 'Working Area',
    value: 'Dhaka and remote projects',
  },
  {
    label: 'Email',
    value: 'dev.shahariar.official@gmail.com',
  },
  {
    label: 'Phone',
    value: '+880 1410-270766',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shahariar270/',
    icon: 'st-icon--linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/shahariar270',
    icon: 'st-icon--github',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/shahariar270/',
    icon: 'st-icon--facebook',
  },
  // {
  //   label: 'X(twitter)',
  //   href: 'https://x.com/shahariar_codes',
  //   icon: 'st-icon--twitter',
  // },
]

export const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    } finally {
      resetForm()
    }
  }

  return (
    <section className='st-contact-page'>
      <SeoHead
        title="Contact"
        description="Get in touch for freelance, remote, or collaboration opportunities. Based in Jhenaidah, Bangladesh; available for Dhaka and remote work."
      />
      <div className="st-contact-intro">
        <p>Contact</p>
        <h2>Let's talk about your next web project.</h2>
        <span>
          Send a message for React, MERN, responsive UI, or frontend development work.
        </span>
      </div>

      <div className="st-contact-grid">
        <div className="st-contact-details">
          <div className="st-contact-info-list">
            {contactInfo.map((item) => (
              <div className="st-contact-info-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="st-contact-map">
            <iframe
              title="Jhenaidah Bangladesh location map"
              src="https://www.google.com/maps?q=Jhenaidah,%20Bangladesh&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className='st-form-container'>
          <Formik
            initialValues={
              {
                name: '',
                email: '',
                content: ''
              }}
            onSubmit={handleSubmit}
          >
            <Form className='st-form-wrapper'>
              <Field
                as='input'
                name='name'
                placeholder='Enter your Name'
                required
                className='st-input'
              />
              <Field
                as='input'
                name='email'
                placeholder='Enter your Email'
                required
                className='st-input'
              />
              <Field
                as='textarea'
                name='content'
                placeholder='Enter your Message'
                required
              />
              <Button
                type='submit'
                label={'Send Message'}
              />
            </Form>
          </Formik>
          <div className="st-contact-social">
            <div>
              <span>Social Media</span>
              <strong>Connect with me online</strong>
            </div>
            <div className="st-contact-social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
