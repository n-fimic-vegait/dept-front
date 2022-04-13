import * as Yup from 'yup'

export const questionFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  message: Yup.string()
    .max(500, 'Maximum 500 characters')
    .required('This field is required'),
})
