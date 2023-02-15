import { Formik, Form } from 'formik';
import * as Yup from "yup";
import FormikInput from '../../components/Formik/FormikInput';
import Button from '../../components/Button/Button';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { inputBgColor } from '../../consts/colors';
import FormikSelect from '../../components/Formik/FormikSelect'; 
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object().shape({
  // country: Yup.object().shape({ label: Yup.string().required(), value: Yup.string().required() }).required('Required'),
  country: Yup.object().required('Required'),
  address: Yup.string().required('Required'),
  postal_code: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  phone_number: Yup.number().required('Required'),
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  card_number: Yup.number().required('Required'),
  cvv: Yup.number().required('Required'),
});

const PaymentForm = () => {
  const navigate = useNavigate()
const {resetCart} = useContext(CartContext)
  const handleSubmit = (value, {resetForm}) => {
    console.log(value)
    resetCart()
    resetForm()
    navigate('/')
  };
  return (
    <Formik
      initialValues={{
        country: '',
        address: '',
        postal_code: '',
        city: '',
        phone_number: '',
        first_name: '',
        last_name: '',
        card_number: '',
        cvv: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Subtitle>Contact Details
        </Subtitle>
        <FormikSelect
          name='country'
          placeholder='Country'
          options={[{ value: 'LT', label: 'Lithuania'}]}/>
        <FormikInput name='address' placeholder='Address' />
        <InputRow>
          <InputRowItem>
          <FormikInput name='postal_code' placeholder='Postal code' />
          </InputRowItem>
          <InputRowItem>
          <FormikInput name='city' placeholder='City' />
          </InputRowItem>
        </InputRow>
        <FormikInput name='phone_number' placeholder='Phone number' />
        <Subtitle>Card Details</Subtitle>
        <InputRow>
          <InputRowItem>
          <FormikInput name='first_name' placeholder='First name' />
          </InputRowItem>
          <InputRowItem>
          <FormikInput name='last_name' placeholder='Last name' />
          </InputRowItem>
        </InputRow>
        <InputRow>
          <CardNumber>
            <FormikInput type='number' name='card_number' placeholder='Card number' />
          </CardNumber>
          <InputRowItem>
            <FormikInput type='number' name='cvv' placeholder='CVV' />
          </InputRowItem>
        </InputRow>
        <Button type="submit">Confirm purchase</Button>
      </StyledForm>
      
    </Formik>
  );
}

export default PaymentForm;

const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${inputBgColor};
`

const InputRow = styled.div`
  display: flex;
  gap: 16px;
`

const InputRowItem = styled.div`
  flex: 1;
`

const CardNumber = styled.div`
  flex: 3;
`