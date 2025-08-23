import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("User registered:", values);
    alert("Registration successful with Formik!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-6 border rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold">User Registration (Formik)</h2>

        <div>
          <label className="block">Username</label>
          <Field name="username" className="w-full border p-2 rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block">Email</label>
          <Field type="email" name="email" className="w-full border p-2 rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block">Password</label>
          <Field type="password" name="password" className="w-full border p-2 rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
