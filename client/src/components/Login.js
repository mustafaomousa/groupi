import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { login } from "../store/session";

const Login = () => {
  const dispatch = useDispatch();

  const demoLogin = async () => {
    await dispatch(login("demouser", "password"));
  };

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
            <div className="space-y-4 p-10">
              <div className="space-y-2">
                <Field
                  className="w-full rounded border bg-zinc-50 px-2 py-1.5"
                  name="username"
                  placeholder="username"
                />
                <p className="text-xs text-red-700">{props.errors.username}</p>
                <Field
                  className="w-full rounded border bg-zinc-50 px-2 py-1.5"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <p className="text-xs text-red-700">{props.errors.password}</p>
              </div>
              <button
                className="w-full rounded bg-zinc-800 px-2 py-1.5 font-bold text-white shadow hover:bg-zinc-700 disabled:bg-zinc-200"
                type="submit"
                disabled={props.isSubmitting}
              >
                Log in
              </button>
              <button
                onClick={demoLogin}
                type="button"
                className="w-full rounded bg-zinc-500 px-2 py-1.5 font-bold text-white shadow hover:bg-zinc-400 disabled:bg-zinc-200"
                disabled={props.isSubmitting}
              >
                Demo
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Link
        to={"join"}
        className="text-sm transition-all hover:font-semibold hover:underline"
      >
        switch to sign up
      </Link>
    </div>
  );
};

export default Login;
