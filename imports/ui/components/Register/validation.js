import * as Yup from "yup";

export default (validationSchema = Yup.object({
  username: Yup.string("Please Enter a username").required(
    "Please Enter a username"
  ),
  email: Yup.string("Please Enter a valid email")
    .email("Please Enter a valid email")
    .required("Please Enter an email"),
  password: Yup.string("")
    .min(8, "Password should be atleast 8 characters")
    .required("Please Enter a Password")
}));
