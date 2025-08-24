import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Formik form submitted:", values);
      }}
    >
      {() => (
        <Form className="p-4 max-w-md mx-auto space-y-3 border rounded">
          <div>
            <Field name="username" placeholder="Username" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>
          <div>
            <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div>
            <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
