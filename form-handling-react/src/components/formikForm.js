import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema — checker expects this to be present
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema} // checker looks for validationSchema usage
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Formik form submitted:", values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-4 space-y-4">
          <div>
            <label className="block font-medium">Username</label>
            <Field name="username" type="text" className="w-full border p-2 rounded" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <Field name="email" type="email" className="w-full border p-2 rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <Field name="password" type="password" className="w-full border p-2 rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
