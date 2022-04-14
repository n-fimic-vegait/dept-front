import { Field, Form, Formik } from 'formik'
import { questionFormSchema } from '../../../validation/questionFormValidation'
import styles from './QuestionFormSection.module.css'

interface QuestionFormValues {
  name: string
  email: string
  message: string
}

export const QuestionFormSection = () => {
  return (
    <div className={styles.questionFormSection}>
      <span className={styles.questionFormSection__title}>
        QUESTION? WE ARE HERE TO HELP!
      </span>
      <Formik
        initialValues={
          { name: '', email: '', message: '' } as QuestionFormValues
        }
        onSubmit={(values) => {}}
        validationSchema={questionFormSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.questionFormSection__form}>
            <div
              className={styles.questionFormSection__formWithoutSubmitButton}
            >
              <div
                className={styles.questionFormSection__form__labelFieldWrapper}
              >
                <label htmlFor='name'>NAME</label>
                <Field
                  type='text'
                  id='name'
                  name='name'
                  className={
                    styles.questionFormSection__form__labelFieldWrapper__field
                  }
                />
                {errors.name && touched.name ? (
                  <div
                    className={
                      styles.questionFormSection__form__labelFieldWrapper__fieldError
                    }
                  >
                    {errors.name}
                  </div>
                ) : null}
              </div>

              <div
                className={styles.questionFormSection__form__labelFieldWrapper}
              >
                <label htmlFor='email'>EMAIL</label>
                <Field
                  type='email'
                  id='email'
                  name='email'
                  className={
                    styles.questionFormSection__form__labelFieldWrapper__field
                  }
                />
                {errors.email && touched.email ? (
                  <div
                    className={
                      styles.questionFormSection__form__labelFieldWrapper__fieldError
                    }
                  >
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div
                className={styles.questionFormSection__form__labelFieldWrapper}
              >
                <label htmlFor='message'>MESSAGE</label>
                <Field
                  as='textarea'
                  rows={5}
                  maxLength={500}
                  id='message'
                  name='message'
                  className={
                    styles.questionFormSection__form__labelFieldWrapper__field
                  }
                />
                {errors.message && touched.message ? (
                  <div
                    className={
                      styles.questionFormSection__form__labelFieldWrapper__fieldError
                    }
                  >
                    {errors.message}
                  </div>
                ) : null}
              </div>
            </div>

            <button
              type='submit'
              className={styles.questionFormSection__form__submitButton}
            >
              SEND
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
