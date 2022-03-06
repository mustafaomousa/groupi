import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { signUp } from "../../store/session";

const Signup = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        f_name: "",
        l_name: "",
        dob: null,
        profile_picture: "",
        confirm_password: "",
        password: "",
      }}
      onSubmit={async (values, actions) => {
        if (values.password === values.confirm_password) {
          const user = { ...values };
          await dispatch(signUp(user)).then((errors) => {
            actions.setErrors(errors);
            console.log(errors);
          });
        }
      }}
    >
      {(props) => (
        <Form className="w-full" method="post" autocomplete="false">
          <p className="mb-3 text-lg font-bold uppercase">sign up</p>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[250px]">
              <div className="mb-3">
                <p className="mb-1 text-sm">Username</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  type="text"
                  name="username"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.username}</p>
              </div>
              <div className="mb-3">
                <p className="mb-1 text-sm">Email</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  name="email"
                  type="email"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.email}</p>
              </div>
              <div className="mb-3">
                <p className="mb-1 text-sm">First name</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  type="text"
                  name="f_name"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.f_name}</p>
              </div>
              <div className="mb-3">
                <p className="mb-1 text-sm">Last name</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  type="text"
                  name="l_name"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.l_name}</p>
              </div>
            </div>
            <div className="w-[250px]">
              <div className="mb-3">
                <p className="mb-1 text-sm">Birthday</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  name="dob"
                  placeholder="birthday"
                  type="date"
                />
                <p className="text-xs text-red-700">{props.errors.dob}</p>
              </div>
              <div className="mb-3">
                <p className="mb-1 text-sm">Password</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  type="password"
                  name="confirm_password"
                  placeholder="confirm password"
                />
                <p className="text-xs text-red-700">
                  {props.errors.confirm_password}
                </p>
              </div>
              <div className="mb-3">
                <p className="mb-1 text-sm">Confirm password</p>
                <Field
                  className="mb-1 w-full rounded border px-2 py-1.5 transition-all"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <p className="text-xs text-red-700">{props.errors.password}</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-end space-y-3">
            <button
              className="h-[38px] w-full rounded bg-indigo-500 text-white transition-all hover:bg-indigo-600"
              type="submit"
              disabled={props.isSubmitting}
            >
              Sign up
            </button>
            <Link
              to={"/"}
              className="text-sm transition-all hover:font-semibold hover:underline"
            >
              switch to login
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
