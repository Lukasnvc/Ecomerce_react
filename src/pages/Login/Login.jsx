import { Formik, Form } from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { size } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { CHECKOUT_PATH, REGISTER_PATH } from '../../routes/const';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '../../hooks/user';
import { toast } from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate()
  const { mutateAsync: loginUser } = useLoginUser();
  const { setUser } = useContext(UserContext)
  
  const handleSubmit = (values, {setSubmitting, resetForm}) => {
    loginUser(values)
      .then((response) => {
        setUser(response)
        navigate(CHECKOUT_PATH)
        toast.success('Successfully logged in')
      })
      .catch((error) => {
      console.log('Falied to login:', error)
    })
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
          <StyledForm>
            <Title>Login</Title>
            <FormikInput name='email' type='email' placeholder='Email'/>
            <FormikInput name='password' type='password' placeholder='password'/>
            <Button type='submit'>Login</Button>
            <StyledLink to={REGISTER_PATH}>Sign up</StyledLink>
        </StyledForm>
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
