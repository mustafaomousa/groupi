import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { login } from "../store/session";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, actions) => {
          await dispatch(login(values.username, values.password)).then(
            (errors) => {
              actions.setErrors(errors);
            }
          );
        }}
      >
        {(props) => (
          <Form className="w-full" method="post">
            <div className="p-10 space-y-4">
              <div className="space-y-2">
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  name="username"
                  placeholder="username"
                />
                <p className="text-xs text-red-700">{props.errors.username}</p>
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <p className="text-xs text-red-700">{props.errors.password}</p>
              </div>
              <button
                className="w-full bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-200 text-white font-bold px-2 py-1.5 rounded shadow"
                type="submit"
                disabled={props.isSubmitting}
              >
                Log in
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Link
        to={"join"}
        className="text-sm hover:underline hover:font-semibold transition-all"
      >
        switch to sign up
      </Link>
    </div>
  );
};

export default Login;
