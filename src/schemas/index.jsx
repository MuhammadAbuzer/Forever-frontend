import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please enter your name"),
  password: Yup.string().min(8).max(20).required("Please enter your password"),
  email: Yup.string()
    .min(5)
    .max(50)
    .email()
    .required("Please enter your email"),
});

export default signUpSchema;
