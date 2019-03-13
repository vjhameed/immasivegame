import * as Yup from "yup";

export default (validationSchema = Yup.object({
  email: Yup.string("Enter an Email")
    .email("Please Enter a valid email")
    .required("Please Enter an email"),
  password: Yup.string("Please Enter a password")
    .min(8, "Password should be atleast 8 characters")
    .required("Please Enter a Password")
}));
