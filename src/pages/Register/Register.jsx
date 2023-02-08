import { Formik, Form } from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { size } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { LOGIN } from '../../routes/const';
import { Link } from 'react-router-dom';


const Register = () => {
  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
      resetForm()
    }, 2000)
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().required("Please retype your password.").oneOf([Yup.ref("password")], "Your passwords do not match."),
  })
  return (
    <div>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {}

        //   if (!values.email) {
        //       errors.email = 'Required'
        //   }
        //   if (!values.password) {
        //     errors.password = 'Required'
        //   }
        //     return errors
        // }} OR
      onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Title>Register your account</Title>
            <FormikInput name='firstName' placeholder='First Name'/>
            <FormikInput name='lastName' placeholder='Last Name'/>
            <FormikInput name='email' type='email' placeholder='Email'/>
            <FormikInput name='password' type='password' placeholder='Password' />
            <FormikInput name='confirmPassword' type='password' placeholder='Repeat Password'/>
            <Button type='submit' disabled={isSubmitting}>Submit</Button>
            <StyledLink to={LOGIN}>Sign in</StyledLink>
        </StyledForm>)}
      </Formik>
    </div>
  );
}

export default Register;

const StyledForm = styled(Form)`
  max-width: ${size.mobile};
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`
const StyledLink = styled(Link)`
  text-align: center;
  margin: 8px;
  font-size: 18px;
`
