import { Field, ErrorMessage } from "formik";
import Input from "../Input/Input";

const FormikInput = ({ name, ...rest }) => {
  return (
    <div>
      <Field as={Input} name={name} {...rest} />
      <ErrorMessage name={name} component='div' />
    </div>
  );
}

export default FormikInput;
