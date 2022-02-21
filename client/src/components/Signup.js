import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { signUp } from "../store/session";

const Signup = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
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
            <div className="p-10 space-y-4">
              <div className="space-y-2">
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  name="username"
                  placeholder="username"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.username}</p>
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  name="email"
                  placeholder="email"
                  type="email"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.email}</p>
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  name="f_name"
                  placeholder="first name"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.f_name}</p>
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  name="l_name"
                  placeholder="last name"
                  required
                />
                <p className="text-xs text-red-700">{props.errors.l_name}</p>
                <div className="flex flex-col space-y-1">
                  <p className="text-xs pl-1">birthday</p>
                  <Field
                    className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                    name="dob"
                    placeholder="birthday"
                    type="date"
                  />
                </div>
                <p className="text-xs text-red-700">{props.errors.dob}</p>
                <Field
                  className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                  type="password"
                  name="confirm_password"
                  placeholder="confirm password"
                />
                <p className="text-xs text-red-700">
                  {props.errors.confirm_password}
                </p>
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
        to={"/"}
        className="text-sm hover:underline hover:font-semibold transition-all"
      >
        switch to login
      </Link>
    </div>
  );
};

export default Signup;