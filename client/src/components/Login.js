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
        <Form method="post" className="w-[250px]">
          <p className="mb-3 text-lg font-bold uppercase">login</p>
          <div className="mb-3">
            <p className="mb-1 text-sm">Username</p>
            <Field
              className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
              type="text"
              name="username"
            />
            <p className="text-xs text-red-600">{props.errors.username}</p>
          </div>
          <div className="mb-3">
            <p className="mb-1 text-sm">Password</p>
            <Field
              className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
              type="password"
              name="password"
            />
            <p className="text-xs text-red-600">{props.errors.password}</p>
          </div>
          <div className="flex flex-col justify-end space-y-3">
            <button
              className="h-[38px] rounded bg-indigo-500 text-white transition-all hover:bg-indigo-600"
              type="submit"
              disabled={props.isSubmitting}
            >
              Log in
            </button>
            <button
              className="h-[38px] rounded bg-pink-500 text-white transition-all hover:bg-pink-600"
              onClick={demoLogin}
              type="button"
              disabled={props.isSubmitting}
            >
              Demo
            </button>
            <div className="flex justify-center">
              <Link
                to="join"
                className="text-sm transition-all hover:font-semibold hover:underline"
              >
                switch to sign up
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
