import Button from '@Component/Button'
import { Field, Form, Formik } from 'formik'
import React from 'react'

export const Contact = () => {
  const handleSubmit = ({ values }) => {

  }

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          content: ''
        }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          as='input'
          name='name'
          placeholder='Enter your Name'
        />
        <Field
          as='input'
          name='email'
          placeholder='Enter your Name'
        />
        <Field
          as='textarea'
          name='content'
          placeholder='Enter your Name'
        />
        <Button
          type='submit'
          label={'Submit Value'}
        />
      </Form>
    </Formik>
  )
}
