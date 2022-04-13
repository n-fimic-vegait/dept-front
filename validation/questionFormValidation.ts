import * as Yup from 'yup'

export const questionFormSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  message: Yup.string().required('This field is required'),
})
