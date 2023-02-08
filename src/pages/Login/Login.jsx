import { Formik, Form } from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { size } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { REGISTER } from '../../routes/const';


const Login = () => {
  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
      resetForm()
    }, 2000)
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  })
  return (
    <div>
      <Formik initialValues={{
        email: '',
        password: ''
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
            <Title>Login</Title>
            <FormikInput name='email' type='email' placeholder='Email'/>
            <FormikInput name='password' type='password' placeholder='password'/>
            <Button type='submit' disabled={isSubmitting}>Login</Button>
            <StyledLink to={REGISTER}>Sign up</StyledLink>
        </StyledForm>)}
      </Formik>
    </div>
  );
}

export default Login;

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
