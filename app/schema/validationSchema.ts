import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  message: Yup.string().min(1, "Message must be at least 1 character").required("Message is required"),
});

export default validationSchema;
