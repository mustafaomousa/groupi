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

        return actions.resetForm();
      }}
    >
      {(props) => (
        <Form method="post">
          <div className="space-y-2 p-2">
            <div className="space-y-1">
              <Field
                className="w-full rounded border bg-zinc-50 px-2 py-1"
                name="name"
                placeholder="name"
              />
              <p className="text-xs text-red-700">{props.errors.name}</p>
              <Field
                className="w-full rounded border bg-zinc-50 px-2 py-1"
                name="bio"
                placeholder="bio"
              />
              <p className="text-xs text-red-700">{props.errors.bio}</p>
            </div>
            <div className="flex justify-end">
              <button
                className="h-6 rounded bg-sky-700 px-1.5 py-1 text-[10px] font-bold uppercase text-white shadow hover:bg-sky-600 disabled:bg-zinc-200 md:h-7 md:text-[12px]"
                type="submit"
                disabled={props.isSubmitting}
              >
                create
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GroupForm;
