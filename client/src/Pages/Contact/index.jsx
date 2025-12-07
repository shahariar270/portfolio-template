import Button from '@Component/Button'
import { Field, Form, Formik } from 'formik'
import React from 'react'

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
            require
            className='st-input'
          />
          <Field
            as='input'
            name='email'
            placeholder='Enter your Email'
            require
            className='st-input'
          />
          <Field
            as='textarea'
            name='content'
            placeholder='Enter your Massage'
          />
          <Button
            type='submit'
            label={'Submit Value'}
          />
        </Form>
      </Formik>
    </div>

  )
}
