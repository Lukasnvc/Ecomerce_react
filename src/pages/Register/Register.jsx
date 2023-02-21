import { Formik, Form } from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { size } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { LOGIN_PATH } from '../../routes/const';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../hooks/user';
import { toast } from 'react-hot-toast';


const Register = () => {
  const navigate = useNavigate()

  const {mutateAsync: createUser} = useCreateUser();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { confirm_password, ...user } = values;
    createUser(user)
      .then(() => {
        navigate(LOGIN_PATH)
          toast.success('Successfully registered')
          .catch((error) => {
          console.log('Failed to create user :', error)
        })
    })
  }

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirm_password: Yup.string().required("Please retype your password.").oneOf([Yup.ref("password")], "Your passwords do not match."),
  })
  return (
    <div>
      <Formik initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
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
            <FormikInput name='first_name' placeholder='First Name'/>
            <FormikInput name='last_name' placeholder='Last Name'/>
            <FormikInput name='email' type='email' placeholder='Email'/>
            <FormikInput name='password' type='password' placeholder='Password' />
            <FormikInput name='confirm_password' type='password' placeholder='Repeat Password'/>
            <Button type='submit' disabled={isSubmitting}>Submit</Button>
            <StyledLink to={LOGIN_PATH}>Sign in</StyledLink>
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
