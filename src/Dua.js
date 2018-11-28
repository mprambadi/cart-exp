import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup'

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  console.log(props)
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};


const validationSchema = yup.object().shape({
   name:yup.string('harus berisi lima angka').required().min(5)
})

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: '' }),

  validationSchema,

  handleSubmit: (values, { setSubmitting, setFieldError }) => {
    setTimeout(() => {
      setSubmitting(false);
      setFieldError('name', 'username udah ada')
    }, 1000);
  },

  displayName: 'BasicForm',
})(MyForm);

export default MyEnhancedForm