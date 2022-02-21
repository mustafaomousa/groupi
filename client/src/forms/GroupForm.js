import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { newGroup } from "../store/memberships";

const GroupForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: "",
        bio: "",
        header_picture: "",
        profile_picture: "",
      }}
      onSubmit={async (values, actions) => {
        const group = {
          name: values.name,
          bio: values.bio,
          header: values.header,
          profile_picture: values.profile_picture,
        };
        await dispatch(newGroup(group));
      }}
    >
      {(props) => (
        <Form className="w-full" method="post">
          <div className="space-y-4">
            <div className="space-y-2">
              <Field
                className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                name="name"
                placeholder="name"
              />
              <p className="text-xs text-red-700">{props.errors.name}</p>
              <Field
                className="w-full bg-zinc-50 px-2 py-1.5 border rounded"
                name="bio"
                placeholder="bio"
              />
              <p className="text-xs text-red-700">{props.errors.bio}</p>
            </div>
            <button
              className="w-full bg-zinc-600 hover:bg-zinc-500 disabled:bg-zinc-200 text-white font-bold px-2 py-1.5 rounded shadow"
              type="submit"
              disabled={props.isSubmitting}
            >
              create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GroupForm;
